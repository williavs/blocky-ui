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
exports.Switch = Switch;
var cn_1 = require("../utils/cn");
var react_1 = require("react");
function Switch(_a) {
    var className = _a.className, label = _a.label, error = _a.error, providedId = _a.id, props = __rest(_a, ["className", "label", "error", "id"]);
    var uniqueId = providedId || "switch-".concat(Math.random().toString(36).substr(2, 9));
    return (<label htmlFor={uniqueId} className="flex items-center gap-2 cursor-pointer group">
      <div className="relative inline-flex items-center">
        <input id={uniqueId} type="checkbox" role="switch" aria-invalid={error ? "true" : undefined} aria-checked={props.checked} className={(0, cn_1.cn)("peer appearance-none w-11 h-6 rounded-full border-2 border-black", "checked:bg-green-100 checked:border-black", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2", "disabled:cursor-not-allowed disabled:opacity-50", "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", "transition-all duration-200", error && "border-red-500 focus-visible:ring-red-400", className)} {...props}/>
        <div aria-hidden="true" className={(0, cn_1.cn)("pointer-events-none absolute left-1", "w-4 h-4 rounded-full bg-black border-2 border-white", "peer-checked:translate-x-5 transition-transform duration-200", "shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]")}/>
      </div>
      {label && (<span className={(0, cn_1.cn)("text-sm font-medium select-none", error ? "text-red-500" : "text-green-900", "group-hover:text-green-800 transition-colors")}>
          {label}
        </span>)}
    </label>);
}
