import { LinkUI } from "../ui/LinkUI"


export const NotFound = () => {
    return (
        <main className=" w-full min-h-screen text-center text-2xl font-bold bg-gradient-to-r from-blue-600 via-black-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            <h1>404 Нету такой страницы</h1>

            <LinkUI to="/">
                Главная страница
            </LinkUI>
        </main>
    )
}