#### Как добавлять новую страницу документации ?

Вся структура документации автоматический создаётся на основе,
директории `assets/docs/...`
Просто создаёшь там директорию это будет dropdown или `.md` файл.

Пример:

```sh
cd assets/docs && mkdir api
```

В таком случии ссылка ещё не появится, ведь нам нужно заполнить наш
dropdown контентом, например там же:

```sh
echo > new Doc.md
```

## и вот уже
