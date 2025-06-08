import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@assets/styles/navigation.css";
import "@assets/styles/appLayout.css";
import "@assets/styles/typography.css";
import "@assets/styles/form.css";

import "@assets/utilityStyles/utils.css";
import "@assets/utilityStyles/gradient.css";
import "@assets/utilityStyles/button.css";
import "@assets/utilityStyles/effect.css";


// createRoot(document.getElementById("root")!).render(<App />);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
