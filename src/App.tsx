import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
