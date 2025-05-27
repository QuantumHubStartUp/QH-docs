
// import { Menu } from "@/shared/components/widgets/Menu";
// import { ThreeDMarqueeDemoSecond } from "./components/Here";
// import { Logo } from "@/shared/components/ui/Logo";

import { Here } from "./components/Here";







const HomePage = () => {
    return (
        <main className="flex flex-row items-start justify-between">
            
            {/* <div className="flex flex-col items-start justify-center gap-3">
                <Logo title="Quantum Hub StartUp" />
                <h1 className="text-3xl font-bold underline">
                    Документация Quantum Hub StartUp
                </h1>
                
                <p className="text-lg">
                    Документация Quantum Hub StartUp.
                    Здесь собрана информация о проекте Quantum Hub StartUp,
                    есть как техническая часть так и пользовательская.
                </p>

                <div>
                    <h2>
                        Что ты найдёшь в этой Документация:
                    
                    </h2>
                    <ul>
                        <li>Цель проекта</li>
                        <li>Команда разработчиков</li>
                        <li>Техническая часть проекта</li>
                        <li>Правила проекта</li>
                    </ul>
                </div>
                

                <Menu />
            </div>

            
            <div>
                <img src="/logo.jpg" alt="" className="rounded-2xl" />
            </div> */}
            
            
            <Here />


        </main>
    )
}

export default HomePage;

