import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";


// createRoot(document.getElementById("root")!).render(<App />);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
