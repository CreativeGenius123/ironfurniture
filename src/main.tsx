import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import the route tree
import { routeTree } from './routeTree.gen';

// Create a client
const queryClient = new QueryClient();

// Create a router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  context: { queryClient },
});

// Render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
