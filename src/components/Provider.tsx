import { store } from "@/state/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import {Provider} from "react-redux";

const queryClient = new QueryClient()

const AppProvider = ({children}:PropsWithChildren) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  )
}

export default AppProvider