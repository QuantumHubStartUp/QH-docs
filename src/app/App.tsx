import { Layout } from '@/shared/components/layout/Layout';

import { Route, Routes } from 'react-router-dom';

import { PATHS } from '@/config/paths-app.data';

import { isDev } from '@/config/env';
import { ThemePreview, useTheme } from '@/features/theme';
import { Loading } from '@/shared/components/ui/Loading';
import { NotFound } from '@/shared/components/widgets/NotFound';
import { Suspense } from 'react';

function App() {
  const paths = Object.values(PATHS);

  useTheme();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          {paths.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
          {isDev && <Route path="/colors" element={<ThemePreview />} />}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
