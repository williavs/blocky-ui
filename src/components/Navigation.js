"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = Navigation;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
var ThemeProvider_1 = require("./ThemeProvider");
function Navigation(_a) {
    var className = _a.className;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)(null), hoveredItem = _c[0], setHoveredItem = _c[1];
    var _d = (0, ThemeProvider_1.useTheme)(), theme = _d.theme, toggleTheme = _d.toggleTheme;
    var menuItems = [
        { name: 'Home', href: '/', icon: lucide_react_1.Home },
        { name: 'Components', href: '/components', icon: lucide_react_1.Blocks },
        { name: 'Documentation', href: '/docs', icon: lucide_react_1.FileText },
        { name: 'GitHub', href: 'https://github.com/williavs', icon: lucide_react_1.Github, external: true },
    ];
    return (<>
      {/* Hamburger Button */}
      <div className={(0, cn_1.cn)("fixed top-4 z-50 transition-all duration-300", isOpen ? "left-[319px]" : "left-[19px]", className)}>
        <Button_1.Button variant="outline" size="sm" className={(0, cn_1.cn)("w-10 h-10 p-2", "bg-[#FFB324] hover:bg-[#FFA500]", "border-border text-foreground", "transition-colors duration-200")} onClick={function () { return setIsOpen(!isOpen); }}>
          {isOpen ? (<lucide_react_1.X className="w-5 h-5"/>) : (<lucide_react_1.Menu className="w-5 h-5"/>)}
          <span className="sr-only">Toggle Menu</span>
        </Button_1.Button>
      </div>

      {/* Overlay */}
      <div className={(0, cn_1.cn)("fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={function () { return setIsOpen(false); }}/>

      {/* Menu Panel */}
      <div className={(0, cn_1.cn)("fixed top-0 left-0 h-screen w-[300px] bg-menu text-menu-foreground border-r-2 border-border shadow-[4px_0_0_0_rgba(0,0,0,1)] z-40", "transform transition-transform duration-300 ease-in-out", isOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="p-6 h-full flex flex-col">
          <div className="mb-6">
            <div className="p-3 bg-[#FFB324]/10 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-display font-bold">Menu</h2>
              <p className="text-menu-foreground/80 text-sm">Navigate around the site</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map(function (item) {
            var Icon = item.icon;
            var isHovered = hoveredItem === item.name;
            return (<a key={item.name} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className={(0, cn_1.cn)("group block w-full py-2 px-3 text-left rounded-lg", "border-2 border-transparent", "font-display font-medium transition-all duration-200", "hover:border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent", "focus:outline-none focus:ring-2 focus:ring-ring", "relative")} onClick={function () { return !item.external && setIsOpen(false); }} onMouseEnter={function () { return setHoveredItem(item.name); }} onMouseLeave={function () { return setHoveredItem(null); }}>
                  <div className="flex items-center gap-3">
                    <div className={(0, cn_1.cn)("p-1.5 rounded-md border-2 border-border bg-menu", "transition-transform duration-200 group-hover:scale-110", isHovered && "rotate-[-5deg]")}>
                      <Icon className="w-4 h-4"/>
                    </div>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </div>
                </a>);
        })}
          </nav>

          {/* Theme Toggle */}
          <div className="mt-4">
            <button onClick={toggleTheme} className={(0, cn_1.cn)("w-full py-2 px-3 text-left rounded-lg", "border-2 border-transparent", "font-display font-medium transition-all duration-200", "hover:border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent", "focus:outline-none focus:ring-2 focus:ring-ring", "flex items-center gap-3")}>
              <div className="p-1.5 rounded-md border-2 border-border bg-menu">
                {theme === 'light' ? (<lucide_react_1.Moon className="w-4 h-4"/>) : (<lucide_react_1.Sun className="w-4 h-4"/>)}
              </div>
              <span>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </div>

          <div className="mt-auto">
            <div className="p-3 bg-accent rounded-lg border-2 border-border text-sm">
              <p className="font-medium mb-1">Tip:</p>
              <p className="text-menu-foreground/80">Use the menu to explore different sections of the design system.</p>
            </div>
          </div>
        </div>
      </div>
    </>);
}
