import { BrowserRouter } from "react-router";
import { AppRouter } from "./Routes/Router";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
