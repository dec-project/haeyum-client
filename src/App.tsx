import { memo } from 'react';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import Layout from './common/components/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = memo(() => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </QueryClientProvider>
));

App.displayName = 'App';

export default App;
