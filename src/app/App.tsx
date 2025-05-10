

import { Layout } from "@/shared/layout/Layout";
import "@styles/tailwindcss.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RouterConfig } from "@/config/Router";

import { PATHS } from "@/config/paths-app.data";

import { Suspense } from "react";
import { Loading } from "@/shared/ui/Loading";



function App() {
  const routerConf = new RouterConfig(PATHS);
  const paths = routerConf.getPaths();

  return (
    <Layout>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                {paths.map(({ path, component: Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
              </Routes>
            </Suspense>
        </BrowserRouter>

    </Layout>
  )
}

export default App;


