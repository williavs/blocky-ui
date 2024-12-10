"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
var react_1 = require("react");
var ThemeContext = (0, react_1.createContext)(undefined);
function ThemeProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(function () {
        // Check for saved theme preference
        var saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark')
            return saved;
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }), theme = _b[0], setTheme = _b[1];
    (0, react_1.useEffect)(function () {
        // Update data-theme attribute when theme changes
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    var toggleTheme = function () {
        setTheme(function (prev) { return prev === 'light' ? 'dark' : 'light'; });
    };
    return (<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>);
}
function useTheme() {
    var context = (0, react_1.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
