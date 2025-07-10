#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "❌ Ошибка: не указано сообщение коммита."
  echo "Использование: ./deploy.sh 'commit message'"
  exit 1
fi

# Использовать bun, если установлен
if command -v bun &> /dev/null; then
  bun run lint
  bun run format
  bun run build
else
  npm run lint
  npm run format
  npm run build
fi

# Показать git-статус перед добавлением
git status
read -p "Добавить все изменения и продолжить? [y/N] " confirm
if [[ $confirm != "y" ]]; then
  echo "Операция отменена."
  exit 1
fi

git add .
git commit -m "$1"
git push origin main

echo "✅ Деплой успешно выполнен."