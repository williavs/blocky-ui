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
exports.Toast = Toast;
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var class_variance_authority_1 = require("class-variance-authority");
var toastVariants = (0, class_variance_authority_1.cva)("relative flex items-center justify-between p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all", {
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
function Toast(_a) {
    var className = _a.className, variant = _a.variant, children = _a.children, onClose = _a.onClose, props = __rest(_a, ["className", "variant", "children", "onClose"]);
    return (<div className={(0, cn_1.cn)(toastVariants({ variant: variant }), "animate-slide-up", className)} {...props}>
      <div className="mr-4">{children}</div>
      {onClose && (<button onClick={onClose} className="p-1 hover:bg-black/5 rounded-md transition-colors">
          <lucide_react_1.X className="w-4 h-4"/>
          <span className="sr-only">Close</span>
        </button>)}
    </div>);
}
