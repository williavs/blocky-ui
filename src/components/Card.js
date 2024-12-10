"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
var cn_1 = require("../utils/cn");
function Card(_a) {
    var children = _a.children, className = _a.className;
    return (<div className={(0, cn_1.cn)("rounded-lg border-2 border-[--border] bg-card p-6", "shadow-[4px_4px_0px_0px_var(--shadow)]", "transition-colors duration-200", className)}>
      {children}
    </div>);
}
