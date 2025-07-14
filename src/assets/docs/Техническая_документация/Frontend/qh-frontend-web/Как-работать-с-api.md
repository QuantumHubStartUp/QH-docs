![alt text](/images/qh-frontend-web/Как-работать-с-api.png)

# Инструкция: Как добавить новый API в проект (RTK Query + Clean Architecture)

Пример на фиче `task`

---

## Структура слоёв

```bash
features/
└── task/
├── contracts/
│ └── task.ts
├── api/
│ ├── task.api.ts
│ └── taskService.ports.ts
├── services/
│ ├── task.service.ts
│ └── useTaskService.ts
└── ui/
└── TaskList.tsx

shared/
└── store.ts

```

---

## Шаг 1: Создание contracts

Создаём интерфейсы (DTO, сущности).

```bash
mkdir -p features/todo/contracts
touch features/todo/contracts/task.ts

```

---

## Шаг 2: Создание API слоя

*features/task/contracts/task.contracts.ts*
```ts
export interface TaskDto {
  id: number
  title: string
  completed: boolean
}

export interface CreateTaskDto {
  title: string
}
```

```bash
mkdir -p features/task/api
touch features/task/api/task.api.ts
```

*features/task/api/task.api.ts*
```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task, CreateTaskDto } from '../contracts/task'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
      providesTags: ['Tasks']
    }),
    createTask: builder.mutation<Task, CreateTaskDto>({
      query: (newTask) => ({
        url: 'tasks',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: ['Tasks']
    }),
    toggleTask: builder.mutation<Task, Task>({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: 'PATCH',
        body: { completed: !task.completed }
      }),
      invalidatesTags: ['Tasks']
    })
  })
})

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useToggleTaskMutation
} = taskApi

```

---

## Шаг 3: Создание порта (интерфейс зависимостей)

```bash
touch features/task/api/taskService.ports.ts
```

*features/task/api/taskService.ports.ts*
```ts 
import { CreateTaskDto, Task } from '../contracts/task'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'

export type TaskApiCreateTask = MutationTrigger<{
  arg: CreateTaskDto
  result: Task
}>

export type TaskApiToggleTask = MutationTrigger<{
  arg: Task
  result: Task
}>
```

---

## Шаг 4: Создание бизнес-логики (сервис)

```bash
mkdir -p features/task/services
touch features/task/services/task.service.ts
```


*features/task/services/task.service.ts*
```ts
import { CreateTaskDto, Task } from '../contracts/task'
import {
  TaskApiCreateTask,
  TaskApiToggleTask
} from '../api/taskService.ports'

export class TaskService {
  constructor(
    private createTaskFn: TaskApiCreateTask,
    private toggleTaskFn: TaskApiToggleTask
  ) {}

  async addTask(dto: CreateTaskDto): Promise<Task> {
    return await this.createTaskFn(dto).unwrap()
  }

  async toggleTask(task: Task): Promise<Task> {
    return await this.toggleTaskFn(task).unwrap()
  }
}

```

---

## Шаг 5: Создание хука useTaskService


```bash
touch features/task/services/useTaskService.ts
```

*features/task/services/useTaskService.ts*
```ts
import { useCreateTaskMutation, useToggleTaskMutation } from '../api/task.api'
import { TaskService } from './task.service'

export function useTaskService(): TaskService {
  const [createTask] = useCreateTaskMutation()
  const [toggleTask] = useToggleTaskMutation()

  return new TaskService(createTask, toggleTask)
}

```

---

## Шаг 6: Подключение API в Redux Store

*shared/store.ts*

```ts
import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from '../features/task/api/task.api'

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

```

---

## Шаг 7: Использование в UI

```bash
mkdir -p features/task/ui
touch features/task/ui/TaskList.tsx
```

*features/task/widgets/TaskList.tsx*
```tsx
import { useGetTasksQuery } from '../api/task.api'
import { useTaskService } from '../services/useTaskService'
import { useState } from 'react'

export function TaskList() {
  const { data: tasks = [], isLoading } = useGetTasksQuery()
  const taskService = useTaskService()
  const [title, setTitle] = useState('')

  const handleAdd = async () => {
    if (title.trim()) {
      await taskService.addTask({ title })
      setTitle('')
    }
  }

  if (isLoading) return <div>Загрузка...</div>

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => taskService.toggleTask(task)}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  )
}
```

---
## Шаг 8: Использование в фичи(Пример)

*features/task/index.ts*
```ts
export { TaskList } from './widgets/TaskList'
```

*app/App.tsx*
```ts
function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  )
}
```
