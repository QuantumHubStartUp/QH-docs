#!/bin/bash

set -e

bun run lint
bun run format

git add .
git commit -m "$1"
git push origin main
