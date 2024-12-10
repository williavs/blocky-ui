"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = Dropdown;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
function Dropdown(_a) {
    var trigger = _a.trigger, items = _a.items, className = _a.className;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var dropdownRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    return (<div className={(0, cn_1.cn)("relative", className)} ref={dropdownRef}>
      <div onClick={function () { return setIsOpen(!isOpen); }}>
        {trigger || (<Button_1.Button variant="outline" className="inline-flex items-center gap-2">
            Menu
            <lucide_react_1.ChevronDown className="w-4 h-4"/>
          </Button_1.Button>)}
      </div>

      <div className={(0, cn_1.cn)("absolute top-full mt-2 w-48 rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50", "transform transition-all duration-200 origin-top", isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none")}>
        <div className="p-2">
          {items.map(function (item, index) { return (<button key={index} onClick={function () {
                item.onClick();
                setIsOpen(false);
            }} className={(0, cn_1.cn)("w-full text-left px-3 py-2 rounded-md text-sm", "transition-colors font-medium", "hover:bg-green-100 focus:bg-green-100", "focus:outline-none focus:ring-2 focus:ring-green-400")}>
              {item.label}
            </button>); })}
        </div>
      </div>
    </div>);
}
