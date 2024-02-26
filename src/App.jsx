import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return "Loading...";
  if (error) return "Failed to load.";
  if (data) return "Status: OK";
}

export default App;
