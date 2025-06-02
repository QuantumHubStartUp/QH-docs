import { SearchFoundsItem } from "../ux/SearchFoundsItem"


export const SearchFounds: React.FC = () => {
    const items = [
        {
            id: 1,
            name: "Автоимпортированные ссылки",
            links: [
                { id: 1, name: "Getting-started", url: "/docs/getting-started" },
                {
                    id: 2,
                    name: "Api",
                    children: [
                        { id: 3, name: "Rest", url: "/docs/api/rest" },
                        { id: 4, name: "Graphql", url: "/docs/api/graphql" },
                    ]
                },
            ]
        }
    ]

    

    return (
        <ul>
            {
                items.length > 0
                ?
                items.map(item => (
                    <SearchFoundsItem key={item.id} {...item} />
                ))
                :
                <p>Ничего не найдено</p>
            }
            
        </ul>
    )
}