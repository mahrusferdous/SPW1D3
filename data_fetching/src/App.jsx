import "./App.css";
import DataFetching from "./components/DataFetching";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <DataFetching />
        </QueryClientProvider>
    );
}

export default App;
