import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextGlobal } from "./context/ContextGlobal.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ContextGlobal>
      <App />
    </ContextGlobal>
    <ToastContainer position="top-right" />
  </>
);
