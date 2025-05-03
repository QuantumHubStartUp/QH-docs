
// import { useAtom } from "jotai";
// import { animeAtom } from "@/shared/store/global.store";


import { Layout } from "@/shared/widgets/Layout";
import "@styles/tailwindcss.css";


function App() {
  // const [anime, setAnime] = useAtom(animeAtom);

  return (
    <Layout>
      
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className="text-gray-700">
          This is a simple example of a React application using Tailwind CSS.
        </p>


    
      </main>
    </Layout>
  )
}

export default App
