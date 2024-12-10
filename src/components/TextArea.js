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
exports.TextArea = TextArea;
var cn_1 = require("../utils/cn");
var react_1 = require("react");
function TextArea(_a) {
    var className = _a.className, error = _a.error, label = _a.label, props = __rest(_a, ["className", "error", "label"]);
    return (<div className="space-y-2">
      {label && (<label className="text-sm font-medium text-green-900">{label}</label>)}
      <textarea className={(0, cn_1.cn)("flex min-h-[120px] w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm", "ring-offset-white placeholder:text-green-500", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2", "disabled:cursor-not-allowed disabled:opacity-50", "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-y", error && "border-red-500 focus-visible:ring-red-400", className)} {...props}/>
    </div>);
}
