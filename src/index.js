import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import ko from "./lang/kor.json";
import eng from "./lang/eng.json";
import chi from "./lang/chi.json";

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { eng: eng, ko: ko, chi: chi }[locale];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
  // <React.StrictMode>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
