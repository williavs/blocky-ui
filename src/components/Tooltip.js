"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = Tooltip;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
};
var arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-2 border-l-2",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-t-2 border-r-2",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-2 border-r-2",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-b-2 border-l-2",
};
function Tooltip(_a) {
    var content = _a.content, children = _a.children, _b = _a.position, position = _b === void 0 ? 'top' : _b, className = _a.className, _c = _a.delayDuration, delayDuration = _c === void 0 ? 200 : _c, providedId = _a.id;
    var _d = (0, react_1.useState)(false), isVisible = _d[0], setIsVisible = _d[1];
    var showTimeout = (0, react_1.useRef)();
    var uniqueId = providedId || "tooltip-".concat(Math.random().toString(36).substr(2, 9));
    var handleShow = function () {
        if (showTimeout.current) {
            window.clearTimeout(showTimeout.current);
        }
        showTimeout.current = window.setTimeout(function () {
            setIsVisible(true);
        }, delayDuration);
    };
    var handleHide = function () {
        if (showTimeout.current) {
            window.clearTimeout(showTimeout.current);
        }
        setIsVisible(false);
    };
    react_1.default.useEffect(function () {
        return function () {
            if (showTimeout.current) {
                window.clearTimeout(showTimeout.current);
            }
        };
    }, []);
    return (<div className="relative inline-block" onMouseEnter={handleShow} onMouseLeave={handleHide} onFocus={handleShow} onBlur={handleHide}>
      <div aria-describedby={isVisible ? uniqueId : undefined}>
        {children}
      </div>
      
      {isVisible && (<div id={uniqueId} role="tooltip" className={(0, cn_1.cn)("absolute z-50", positionClasses[position])}>
          <div className={(0, cn_1.cn)("relative bg-white px-3 py-1.5 rounded-md text-sm whitespace-nowrap", "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", "animate-in fade-in-0 zoom-in-95 duration-200", className)}>
            {content}
            <div className={(0, cn_1.cn)("absolute w-3 h-3 bg-white border-black rotate-45", arrowClasses[position])} aria-hidden="true"/>
          </div>
        </div>)}
    </div>);
}
