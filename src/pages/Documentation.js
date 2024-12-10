"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.Documentation = Documentation;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var docs_1 = require("../utils/docs");
var react_2 = require("@mdx-js/react");
var MDXComponents_1 = require("../components/MDXComponents");
function LoadingState() {
    return (<div className="space-y-8 animate-in fade-in duration-500">
      {/* Title skeleton */}
      <div className="space-y-4">
        <div className="h-8 bg-primary/40 rounded-lg w-2/3"/>
        <div className="h-4 bg-primary/30 rounded w-1/3"/>
      </div>

      {/* Content sections */}
      {__spreadArray([], Array(3), true).map(function (_, i) { return (<div key={i} className="space-y-6">
          {/* Section heading */}
          <div className="h-6 bg-primary/40 rounded w-1/4"/>
          
          {/* Paragraphs */}
          <div className="space-y-3">
            <div className="h-4 bg-primary/30 rounded w-full"/>
            <div className="h-4 bg-primary/30 rounded w-[95%]"/>
            <div className="h-4 bg-primary/30 rounded w-[90%]"/>
          </div>

          {/* Code block */}
          <div className="rounded-lg border-2 border-border p-4 space-y-2">
            <div className="h-4 bg-primary/20 rounded w-[80%]"/>
            <div className="h-4 bg-primary/20 rounded w-[70%]"/>
            <div className="h-4 bg-primary/20 rounded w-[75%]"/>
          </div>
        </div>); })}
    </div>);
}
function ErrorState(_a) {
    var error = _a.error;
    return (<div className="p-4 border-2 border-destructive rounded-lg bg-destructive/10 animate-in fade-in duration-300">
      <h2 className="text-destructive-foreground font-bold mb-2">Error Loading Documentation</h2>
      <p className="text-destructive-foreground">{error.message}</p>
    </div>);
}
function Documentation() {
    var _this = this;
    var _a = (0, react_1.useState)(docs_1.docSections[0].slug), activeSection = _a[0], setActiveSection = _a[1];
    var _b = (0, react_1.useState)(docs_1.docSections[0].items[0].slug), activeItem = _b[0], setActiveItem = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(false), isLoading = _d[0], setIsLoading = _d[1];
    // Add a small artificial delay for smoother transitions
    var handleNavigation = function (section, item) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setActiveSection(section);
                    setActiveItem(item);
                    setError(null);
                    // Small delay to ensure loading state is visible
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                case 1:
                    // Small delay to ensure loading state is visible
                    _a.sent();
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 border-r-2 border-border bg-card overflow-y-auto">
        <div className="pt-20 px-4 pb-4">
          <h2 className="font-display font-bold text-lg mb-6">Documentation</h2>
          <nav className="space-y-8">
            {docs_1.docSections.map(function (section) { return (<div key={section.slug}>
                <h3 className="font-display font-bold text-sm uppercase text-foreground/60 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items
                .sort(function (a, b) { return a.order - b.order; })
                .map(function (item) { return (<li key={item.slug}>
                        <button onClick={function () { return handleNavigation(section.slug, item.slug); }} className={(0, cn_1.cn)("flex items-center w-full px-2 py-1.5 rounded-md text-sm group transition-all duration-200", activeSection === section.slug && activeItem === item.slug
                    ? "font-medium bg-primary text-foreground"
                    : "hover:bg-primary/50")}>
                          <lucide_react_1.ChevronRight className={(0, cn_1.cn)("w-4 h-4 mr-1 transition-transform duration-200", activeSection === section.slug && activeItem === item.slug
                    ? "transform rotate-90"
                    : "opacity-0 group-hover:opacity-100")}/>
                          {item.title}
                        </button>
                      </li>); })}
                </ul>
              </div>); })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <react_2.MDXProvider components={MDXComponents_1.MDXComponents}>
            <div className="min-h-[200px]">
              {isLoading ? (<LoadingState />) : error ? (<ErrorState error={error}/>) : (<div className="animate-in fade-in duration-500">
                  <react_1.Suspense fallback={<LoadingState />}>
                    {(0, react_1.createElement)((0, react_1.lazy)(function () {
                return Promise.resolve("".concat("../content/docs/".concat(activeSection, "/").concat(activeItem, ".mdx"))).then(function (s) { return require(s); }).catch(function (err) {
                    setError(err);
                    return { default: function () { return null; } };
                });
            }))}
                  </react_1.Suspense>
                </div>)}
            </div>
          </react_2.MDXProvider>
        </div>
      </div>
    </div>);
}
