


import { lazy, Suspense } from "react";

import { Loading } from "@/shared/components/ui/Loading";




const HereLazy = lazy(() => import('./components/Here'));



const HomePage = () => {
    return (
        <main className="flex flex-row items-center justify-center">

            
            <Suspense fallback={<Loading />}>
                <HereLazy />
            </Suspense>
            
            
        </main>
    )
}

export default HomePage;

