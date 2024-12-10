"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = Progress;
var cn_1 = require("../utils/cn");
var sizeClasses = {
    sm: "h-2",
    default: "h-3",
    lg: "h-4",
};
var variantClasses = {
    default: "bg-green-100",
    success: "bg-green-200",
    error: "bg-red-100",
};
function Progress(_a) {
    var value = _a.value, _b = _a.max, max = _b === void 0 ? 100 : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, _d = _a.size, size = _d === void 0 ? 'default' : _d, _e = _a.animated, animated = _e === void 0 ? false : _e, className = _a.className;
    var percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (<div className={(0, cn_1.cn)("w-full rounded-full border-2 border-black bg-white overflow-hidden", "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", sizeClasses[size], className)}>
      <div className={(0, cn_1.cn)("h-full rounded-r-sm border-r-2 border-black transition-all duration-500", variantClasses[variant], animated && "animate-pulse", percentage === 100 && "rounded-r-none")} style={{ width: "".concat(percentage, "%") }}/>
    </div>);
}
