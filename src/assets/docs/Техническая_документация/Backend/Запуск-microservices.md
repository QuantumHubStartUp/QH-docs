# QH Backend

## 📌 Описание

Этот репозиторий объединяет все микросервисы backend-платформы **QuasarHub**.  
Можно запускать сервисы в различных режимах: **Dev**, **Pre-Prod**, **Prod**.

---

## 🚀 Запуск микросервисов в режиме разработки

### 1. Установка зависимостей

- [Docker Desktop (Windows/macOS)](https://www.docker.com/products/docker-desktop)  
- [Docker для Linux](https://docs.docker.com/desktop/setup/install/linux/)

Убедитесь, что всё работает:

```bash
docker version
docker-compose version
```

---

### 2. Настройка сервисов

- `config/services.json` — список микросервисов
- `config/infrastructure.json` — инфраструктура (Redis, Kafka и т.д.)

> Отредактируйте эти файлы, чтобы указать, какие сервисы запускать.

---

### 3. Подключение SSH-ключа (если приватные репозитории)

#### Linux / WSL

```bash
ssh-keygen -t rsa -C "your_email@example.com"
eval $(ssh-agent -c)
ssh-add ~/.ssh/your_key
```

#### Windows (Git Bash)

```bash
ssh-keygen -t rsa -C "your_email@example.com"
ssh-add /c/Users/USERNAME/.ssh/your_key
```

Проверка подключения:

```bash
ssh -T git@github.com
```

---

## 🐳 Запуск через Docker Compose

### Linux

```bash
chmod +x ./cmd/linux/all-run.sh
./cmd/linux/all-run.sh
```

### Windows

```bash
./cmd/windows/all-run.bat
```

Для остановки:

```bash
./cmd/linux/all-stop.sh       # Linux
./cmd/windows/all-stop.bat    # Windows
```

---

## ☸️ Запуск через Kubernetes (Minikube)

> Требуется: [kubectl](https://kubernetes.io/docs/tasks/tools/) и [Minikube](https://minikube.sigs.k8s.io/docs/)

### Запуск:

```bash
chmod +x ./cmd/linux/run-k8s.sh
./cmd/linux/run-k8s.sh
```

После запуска:

```bash
cat .env.k8s  
```

### Остановка:

```bash
chmod +x ./cmd/linux/stop-k8s.sh
./cmd/linux/stop-k8s.sh
```

---

## 📂 Структура проекта

- Все маршруты описаны в `config/services.json`
- Дополнительные инфраструктурные компоненты — в `config/infrastructure.json`
- Документация сервисов доступна по `http://<minikube_ip>:<port>/proxy/<service>/api/v1/docs`

---

## 🧪 Pre-Prod и Prod режимы

> В разработке...

---

## 🔗 Полезные ссылки

- 📘 [Документация](https://qh-docs.netlify.app/)
- 💻 [GitHub Repository](https://github.com/QuasarHub/QH-Backend)