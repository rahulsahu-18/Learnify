import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "./components/ui/sonner";
import LoadingSpinner from "./components/LoadingSpinner";
import { useLoadUserQuery } from "./store/api/auth.api";

const Custom = ({ children }) => {
  // const { isLoading, isError, error } = useLoadUserQuery();

  // if (isLoading) return <LoadingSpinner />;

  // if (isError) {
  //   console.error(error);
  //   return <>{children}</>;
  // }

  return <>{children}</>;
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Custom>
    <App />
    <Toaster />
    </Custom>
  </Provider>,
);
