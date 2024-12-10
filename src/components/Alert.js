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
exports.Alert = Alert;
var cn_1 = require("../utils/cn");
var class_variance_authority_1 = require("class-variance-authority");
var alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", {
    variants: {
        variant: {
            default: "bg-white text-green-900",
            success: "bg-green-100 text-green-900",
            error: "bg-red-100 text-red-900",
            warning: "bg-yellow-100 text-yellow-900",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Alert(_a) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return (<div className={(0, cn_1.cn)(alertVariants({ variant: variant, className: className }))} {...props}/>);
}
