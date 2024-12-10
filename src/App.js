"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var Components_1 = require("./pages/Components");
var Documentation_1 = require("./pages/Documentation");
var Navigation_1 = require("./components/Navigation");
var ThemeProvider_1 = require("./components/ThemeProvider");
function AppContent() {
    var location = (0, react_router_dom_1.useLocation)();
    var _a = (0, react_1.useState)('home'), currentPage = _a[0], setCurrentPage = _a[1];
    (0, react_1.useEffect)(function () {
        var path = location.pathname;
        if (path === '/components') {
            setCurrentPage('components');
        }
        else if (path === '/docs') {
            setCurrentPage('docs');
        }
        else {
            setCurrentPage('home');
        }
    }, [location]);
    return (<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation_1.Navigation />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.Home />}/>
        <react_router_dom_1.Route path="/components" element={<Components_1.Components />}/>
        <react_router_dom_1.Route path="/docs/*" element={<Documentation_1.Documentation />}/>
      </react_router_dom_1.Routes>
    </div>);
}
function App() {
    return (<ThemeProvider_1.ThemeProvider>
      <react_router_dom_1.BrowserRouter>
        <AppContent />
      </react_router_dom_1.BrowserRouter>
    </ThemeProvider_1.ThemeProvider>);
}
