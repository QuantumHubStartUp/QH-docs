

import { Layout } from "@/shared/components/layout/Layout";

import { Routes, Route } from 'react-router-dom';



import { PATHS } from "@/config/paths-app.data";

import { Suspense } from "react";
import { Loading } from "@/shared/components/ui/Loading";
import { ThemeTest, useTheme } from "@/features/theme";




function App() {

  const paths = Object.values(PATHS);

  useTheme();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <ThemeTest />
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


