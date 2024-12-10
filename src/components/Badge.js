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
exports.Badge = Badge;
var class_variance_authority_1 = require("class-variance-authority");
var cn_1 = require("../utils/cn");
var badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-md border-2 border-black px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", {
    variants: {
        variant: {
            default: "bg-green-100 text-green-900 hover:bg-green-200",
            outline: "bg-white hover:bg-green-50",
            success: "bg-green-100 text-green-900 hover:bg-green-200",
            error: "bg-red-100 text-red-900 hover:bg-red-200",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge(_a) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return (<div className={(0, cn_1.cn)(badgeVariants({ variant: variant, className: className }))} {...props}/>);
}
