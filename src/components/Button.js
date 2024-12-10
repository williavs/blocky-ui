"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
function Button(_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "default" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, _d = _a.isLoading, isLoading = _d === void 0 ? false : _d, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, props = __rest(_a, ["className", "variant", "size", "isLoading", "leftIcon", "rightIcon", "children"]);
    return (<button className={(0, cn_1.cn)("relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50", "border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]", {
            "bg-primary text-foreground": variant === "default",
            "bg-transparent": variant === "outline",
            "bg-transparent border-transparent shadow-none hover:bg-accent hover:shadow-none hover:translate-x-0 hover:translate-y-0": variant === "ghost",
            "bg-[#D1FAE5] text-foreground hover:bg-[#A7F3D0]": variant === "download",
        }, {
            "h-10 px-4 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-12 px-6 text-base": size === "lg",
        }, className)} disabled={isLoading} {...props}>
      {isLoading && (<lucide_react_1.Loader2 className="mr-2 h-4 w-4 animate-spin"/>)}
      {!isLoading && leftIcon && (<span className="inline-flex shrink-0 items-center justify-center">
          {leftIcon}
        </span>)}
      <span className="inline-flex items-center justify-center leading-none">
        {children}
      </span>
      {!isLoading && rightIcon && (<span className="inline-flex shrink-0 items-center justify-center">
          {rightIcon}
        </span>)}
    </button>);
}
