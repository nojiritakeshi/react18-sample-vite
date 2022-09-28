import reportWebVitals from "./reportWebVitals";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "App";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

reportWebVitals();
