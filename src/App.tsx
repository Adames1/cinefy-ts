import { useTrendingMovie } from "./hooks/useTrendingMovie";

export default function App() {
  const { data } = useTrendingMovie("week", 1);

  return <div>App</div>;
}
