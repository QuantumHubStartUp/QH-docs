

import { PATHS } from "@/config/paths-app.data";
import { Link } from "../ui/Link";
import { externalLinks } from "@/config/paths-app.data";





export const Menu = () => {
    

    return (
       
        <menu className="flex flex-row gap-2 flex-wrap gap-3 items-center justify-center">
            <li>
                <Link href={PATHS.home.path} className="text-blue-400 hover:underline">
                    Главная
                </Link>
            </li>
            <li>
                <Link href={PATHS.about.path} className="text-blue-400 hover:underline">
                    О нас
                </Link>
            </li>
            <li>
                <Link target = "_blank" href={externalLinks.qhDocsGitHub.url} className="text-blue-400 hover:underline">
                    { externalLinks.qhDocsGitHub.name }
                </Link>
            </li>
        </menu>
    )
}

