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
exports.Skeleton = Skeleton;
var cn_1 = require("../utils/cn");
function Skeleton(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'text' : _b, className = _a.className, _c = _a.lines, lines = _c === void 0 ? 1 : _c;
    var baseClasses = "animate-pulse bg-green-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
    if (variant === 'avatar') {
        return (<div className={(0, cn_1.cn)(baseClasses, "w-12 h-12 rounded-full", className)}/>);
    }
    if (variant === 'button') {
        return (<div className={(0, cn_1.cn)(baseClasses, "h-10 w-24 rounded-md", className)}/>);
    }
    if (variant === 'image') {
        return (<div className={(0, cn_1.cn)(baseClasses, "h-48 w-full rounded-md", className)}/>);
    }
    if (variant === 'card') {
        return (<div className={(0, cn_1.cn)("space-y-4", className)}>
        <div className={(0, cn_1.cn)(baseClasses, "h-24 w-full rounded-md")}/>
        <div className="space-y-2">
          <div className={(0, cn_1.cn)(baseClasses, "h-10 w-3/4 rounded-md")}/>
          <div className={(0, cn_1.cn)(baseClasses, "h-10 w-1/2 rounded-md")}/>
        </div>
      </div>);
    }
    // Text variant (default)
    return (<div className={(0, cn_1.cn)("space-y-2", className)}>
      {__spreadArray([], Array(lines), true).map(function (_, i) { return (<div key={i} className={(0, cn_1.cn)(baseClasses, "h-10 rounded-md", i === lines - 1 ? "w-3/4" : "w-full")}/>); })}
    </div>);
}
