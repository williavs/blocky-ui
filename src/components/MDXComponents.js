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
exports.MDXComponents = void 0;
var react_1 = require("react");
var Button_1 = require("./Button");
var Card_1 = require("./Card");
var Badge_1 = require("./Badge");
var cn_1 = require("../utils/cn");
exports.MDXComponents = {
    h1: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h1 className={(0, cn_1.cn)("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props}/>);
    },
    h2: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h2 className={(0, cn_1.cn)("mt-10 scroll-m-20 border-b border-b-border pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props}/>);
    },
    h3: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h3 className={(0, cn_1.cn)("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}/>);
    },
    h4: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<h4 className={(0, cn_1.cn)("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}/>);
    },
    p: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<p className={(0, cn_1.cn)("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}/>);
    },
    ul: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<ul className={(0, cn_1.cn)("my-6 ml-6 list-disc", className)} {...props}/>);
    },
    ol: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<ol className={(0, cn_1.cn)("my-6 ml-6 list-decimal", className)} {...props}/>);
    },
    li: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<li className={(0, cn_1.cn)("mt-2", className)} {...props}/>);
    },
    blockquote: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<blockquote className={(0, cn_1.cn)("mt-6 border-l-2 border-border pl-6 italic", className)} {...props}/>);
    },
    img: function (_a) {
        var className = _a.className, alt = _a.alt, props = __rest(_a, ["className", "alt"]);
        return (<img className={(0, cn_1.cn)("rounded-md border border-border", className)} alt={alt} {...props}/>);
    },
    hr: function (_a) {
        var props = __rest(_a, []);
        return (<hr className="my-4 border-border md:my-8" {...props}/>);
    },
    table: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<div className="my-6 w-full overflow-y-auto">
      <table className={(0, cn_1.cn)("w-full", className)} {...props}/>
    </div>);
    },
    tr: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<tr className={(0, cn_1.cn)("m-0 border-t border-border p-0 even:bg-muted", className)} {...props}/>);
    },
    th: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<th className={(0, cn_1.cn)("border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props}/>);
    },
    td: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<td className={(0, cn_1.cn)("border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props}/>);
    },
    pre: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (<pre className={(0, cn_1.cn)("mb-4 mt-6 overflow-x-auto rounded-lg border-2 border-border bg-card p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(134,239,172,0.25)]", className)} {...props}/>);
    },
    code: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        var isInline = !className;
        return (<code className={(0, cn_1.cn)("font-mono text-sm", isInline
                ? "relative rounded border border-border bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                : "relative block overflow-x-auto bg-card text-foreground p-4", className)} {...props}/>);
    },
    // Map custom components
    Button: Button_1.Button,
    Card: Card_1.Card,
    Badge: Badge_1.Badge,
};
