"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
require("./index.css");
var rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}
client_1.default.createRoot(rootElement).render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
