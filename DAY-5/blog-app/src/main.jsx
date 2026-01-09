import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth.context.jsx";
import { BlogContextProvider } from "./context/blog.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BlogContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
