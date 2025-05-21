

import { Layout } from "@/shared/layout/Layout";
import "@shared/styles/tailwindcss.css";
import { Routes, Route } from 'react-router-dom';



import { PATHS } from "@/config/paths-app.data";

import { Suspense } from "react";
import { Loading } from "@/shared/ui/Loading";



function App() {

  const paths = Object.values(PATHS);

  return (
    <Layout>
        
            <Suspense fallback={<Loading />}>
              <Routes>
                {paths.map(({ path, component: Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Routes>
            </Suspense>
       

    </Layout>
  )
}

export default App;


