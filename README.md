### QH-docs

Данные проект является документацией к другому проекту. Это специальный сайт, для документации проекта Quantum Hub StartUp.
Цель этого сайта, описать всю структуру проекта и его техническую часть,
идею и принципы работы.

---

### Main Stack

1. React
2. Typescript
3. TailwindCSS
4. Jotai
   и по мелочи...

---

### Как добавлять новую страницу ?

Тут всё просто, нужно в src/assets/docs создать новую директорию(директория будет группой) и внутри создать новый markdown файл(страницу). И всё страница автоматически добавится на сайт.

---

### Как запускать проект ?

# Для Development:

Linux & Windows:

```bash
cd $(pwd)
bun i || yarn || npm i
bun run dev || yarn dev || npm run dev
```

или через Docker:

1. Установить docker и docker-compose
2. docker-compose up --build

# Для Pre-Production:

1. Установить docker и docker-compose
2. Запустить ENV_FILE=.env.preprod docker-compose up --build

# Для Production:

1. Установить docker и docker-compose
2. Скопировать репозиторий в директорию на сервере
3. Запустить ENV_FILE=.env.production docker-compose up --build -d

---

### Архитектура проекта

FSD (Feature-Service-Data) + Self Modify.

# Особенности Self Modify:

1. Есть иерархия компонентов.
   **Пример**:
   app -> pages -> layout -> widgets -> ux -> ui. Идут по уровне привилегий компонентов.

- app - сама программа(всё).
- pages - страницы(могут хранить: layout, widgets, ux, ui, tsx объекты).
- layout - основная структура страницы (могут хранить: widgets, ux, ui, tsx объекты).
- widgets - Большие компоненты(могут хранить: ux, ui, tsx объекты).
- ux - маленькие компоненты(могут хранить: ux(ограничение в 3 компонента), ui, tsx объекты).
- ui - самые маленькие компоненты(могут хранить: ui, tsx объекты ).

2. feature === module.
   Каждая функциональность собирается в отдельный модуль и импортируется в App.tsx.
3. feature/<feature>/index.tsx - это точка входа в модуль. чтобы испозьовать
   любую feature в другом месте(помаменте) нужно импортировать index.ts и export оттуда.
   **Пример**:

```ts
// src/features/<feature>/index.ts
export { <feature_component> } from "./widgets/<feature_component || и т.д>";
```

Затем можно использовать в любом месте:

```ts
// src/app/App.tsx (пример)
import { <feature_component> } from "@features/<feature>";
```

---

["Сайт"](https://qh-docs.netlify.app/)
["GitHub"](https://github.com/Quantum-Hub/QH-docs)
