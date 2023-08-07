import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthCheckLoading from "./components/loaders/AuthCheckLoading";
import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <AuthCheckLoading></AuthCheckLoading>
  ) : (
    <div className="font-ubuntu">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
