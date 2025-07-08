# Что такое middleware

Middleware - это функция, которая
выполняется перед запросом.

Она может выполнять различные действия, такие как:

- Проверка авторизации
- Проверка токена
- Логирование
- Кеширование
- и т.д.

Допустим у нас запрос есть и мы хотим проверить авторизацию.

```python
@login_require_middleware
async def get_user(request: Request):
    return {"message": "Hello, World!"}
```

login_require_middleware - это middleware, который проверяет авторизацию. Дикоратор @login_require_middleware проверяет авторизацию и если она не проходит, то возвращает ошибку 401.
Его можно увидеть в `app/middlewares/login_require_middleware.py`

---

## Как создать middleware

```python
from fastapi import Request, HTTPException


def logging_middleware(func):
    def wrapper(request: Request):
        print(f"Request: {request}")
        return func(request)
    return wrapper

```

logging_middleware - это middleware, который логирует запрос. И можем использовать его в любом месте нашего проекта.

```python
@logging_middleware
async def get_message(request: Request):
    return {"message": "Hello, World!"}
```
