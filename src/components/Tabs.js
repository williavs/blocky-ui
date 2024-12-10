"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = Tabs;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
function Tabs(_a) {
    var tabs = _a.tabs, className = _a.className, _b = _a.defaultTab, defaultTab = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(defaultTab), activeTab = _c[0], setActiveTab = _c[1];
    return (<div className={(0, cn_1.cn)("flex flex-col h-[calc(100vh-12rem)]", className)}>
      <div className="flex gap-2 overflow-x-auto p-2 sticky top-0 backdrop-blur-sm bg-background/80">
        {tabs.map(function (tab, index) { return (<button key={index} onClick={function () { return setActiveTab(index); }} className={(0, cn_1.cn)("px-4 py-2 rounded-md border-2 transition-all whitespace-nowrap font-display", "focus:outline-none focus:ring-2 focus:ring-[--ring]", activeTab === index
                ? "border-[--border] bg-primary shadow-[4px_4px_0px_0px_var(--shadow-hover)]"
                : "border-transparent hover:border-[--border] hover:shadow-[4px_4px_0px_0px_var(--shadow)]", "text-foreground hover:text-foreground")}>
            {tab.label}
          </button>); })}
      </div>

      <div className="flex-1 relative overflow-hidden">
        {tabs.map(function (tab, index) { return (<div key={index} className={(0, cn_1.cn)("absolute inset-0 overflow-y-auto", "transition-all duration-300", activeTab === index
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-4 pointer-events-none")}>
            {tab.content}
          </div>); })}
      </div>
    </div>);
}
