"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = Spinner;
var cn_1 = require("../utils/cn");
var sizeClasses = {
    sm: "w-4 h-4",
    default: "w-8 h-8",
    lg: "w-12 h-12",
};
function Spinner(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c, className = _a.className;
    if (variant === 'dots') {
        return (<div className={(0, cn_1.cn)("flex gap-1", className)}>
        {__spreadArray([], Array(3), true).map(function (_, i) { return (<div key={i} className={(0, cn_1.cn)("bg-black rounded-full animate-bounce", sizeClasses[size], i === 1 && "delay-100", i === 2 && "delay-200")} style={{ animationDuration: '0.6s' }}/>); })}
      </div>);
    }
    if (variant === 'blocks') {
        return (<div className={(0, cn_1.cn)("grid grid-cols-2 gap-1", className)}>
        {__spreadArray([], Array(4), true).map(function (_, i) { return (<div key={i} className={(0, cn_1.cn)("border-2 border-black bg-green-100", "animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", sizeClasses[size], i === 1 && "delay-100", i === 2 && "delay-200", i === 3 && "delay-300")}/>); })}
      </div>);
    }
    if (variant === 'circle') {
        return (<div className={(0, cn_1.cn)("relative", sizeClasses[size], className)}>
        <svg className="animate-spin" viewBox="0 0 50 50">
          <circle className="stroke-black" strokeWidth="4" stroke="currentColor" fill="none" r="20" cx="25" cy="25"/>
          <circle className="stroke-green-100" strokeWidth="4" strokeDasharray="80" strokeDashoffset="20" stroke="currentColor" fill="none" r="20" cx="25" cy="25"/>
        </svg>
      </div>);
    }
    // Default spinner (rotating border)
    return (<div className={(0, cn_1.cn)("border-4 border-black border-t-green-100", "rounded-full animate-spin", sizeClasses[size], className)}/>);
}
