import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextGlobal } from "./context/ContextGlobal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextGlobal>
    <App />
  </ContextGlobal>
);
