#!/bin/bash

set -e

# === Инициализация флагов ===
SKIP_LINT=false
SKIP_FORMAT=false
SKIP_BUILD=false
FORCE=false

# === Парсинг аргументов ===
COMMIT_MSG=""

while [[ "$#" -gt 0 ]]; do
  case $1 in
    --skip-lint) SKIP_LINT=true ;;
    --skip-format) SKIP_FORMAT=true ;;
    --skip-build) SKIP_BUILD=true ;;
    --force) FORCE=true ;;
    -m|--message) COMMIT_MSG="$2"; shift ;;
    *) echo "❌ Неизвестный аргумент: $1"; exit 1 ;;
  esac
  shift
done

# === Проверка на наличие commit message ===
if [ -z "$COMMIT_MSG" ]; then
  echo "❌ Ошибка: не указано сообщение коммита."
  echo "Использование: ./deploy.sh -m 'комментарий' [--skip-lint] [--skip-format] [--skip-build] [--force]"
  exit 1
fi

# === Проверка текущей ветки ===
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" == "main" && "$FORCE" == false ]]; then
  echo "⚠️ Ты собираешься закоммитить в ветку 'main'."
  read -p "Продолжить? [y/N] " confirm
  if [[ "$confirm" != "y" ]]; then
    echo "Операция отменена."
    exit 1
  fi
fi

# === Проверка bun/npm ===
if command -v bun &> /dev/null; then
  RUNNER="bun"
else
  RUNNER="npm"
fi

# === Выполнение шагов ===
if [[ "$SKIP_LINT" == false ]]; then
  echo "🔍 Linting..."
  $RUNNER run lint
fi

if [[ "$SKIP_FORMAT" == false ]]; then
  echo "🎨 Formatting..."
  $RUNNER run format
fi

if [[ "$SKIP_BUILD" == false ]]; then
  echo "🔧 Building..."
  $RUNNER run build
fi

# === Git status и подтверждение ===
git status
if [[ "$FORCE" == false ]]; then
  read -p "Добавить все изменения и продолжить коммит и пуш? [y/N] " confirm
  if [[ "$confirm" != "y" ]]; then
    echo "Операция отменена."
    exit 1
  fi
fi

# === Git команды ===
git add .
git commit -m "$COMMIT_MSG"
git push origin "$CURRENT_BRANCH"









# set -e

# if [ -z "$1" ]; then
#   echo "❌ Ошибка: не указано сообщение коммита."
#   echo "Использование: ./deploy.sh 'commit message'"
#   exit 1
# fi

# # Использовать bun, если установлен
# if command -v bun &> /dev/null; then
#   bun run lint
#   bun run format
#   bun run build
# else
#   npm run lint
#   npm run format
#   npm run build
# fi

# # Показать git-статус перед добавлением
# git status
# read -p "Добавить все изменения и продолжить? [y/N] " confirm
# if [[ $confirm != "y" ]]; then
#   echo "Операция отменена."
#   exit 1
# fi

# git add .
# git commit -m "$1"
# git push origin main

# echo "✅ Деплой успешно выполнен."