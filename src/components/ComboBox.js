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
exports.ComboBox = ComboBox;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
function ComboBox(_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? "Select an option" : _b, label = _a.label, error = _a.error, disabled = _a.disabled, _c = _a.variant, variant = _c === void 0 ? 'outline' : _c, className = _a.className, id = _a.id;
    var _d = (0, react_1.useState)(false), isOpen = _d[0], setIsOpen = _d[1];
    var _e = (0, react_1.useState)(''), selectedLabel = _e[0], setSelectedLabel = _e[1];
    var _f = (0, react_1.useState)(-1), highlightedIndex = _f[0], setHighlightedIndex = _f[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var optionsRef = (0, react_1.useRef)(null);
    var uniqueId = id || "combobox-".concat(Math.random().toString(36).substr(2, 9));
    // Flatten options for keyboard navigation
    var flatOptions = options.reduce(function (acc, option) {
        if ('options' in option) {
            return __spreadArray(__spreadArray([], acc, true), option.options, true);
        }
        return __spreadArray(__spreadArray([], acc, true), [option], false);
    }, []);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    (0, react_1.useEffect)(function () {
        if (value) {
            options.forEach(function (option) {
                if ('options' in option) {
                    var found = option.options.find(function (o) { return o.value === value; });
                    if (found)
                        setSelectedLabel(found.label);
                }
                else if (option.value === value) {
                    setSelectedLabel(option.label);
                }
            });
        }
        else {
            setSelectedLabel('');
        }
    }, [value, options]);
    (0, react_1.useEffect)(function () {
        if (isOpen && optionsRef.current && highlightedIndex >= 0) {
            var highlightedElement = optionsRef.current.children[highlightedIndex];
            if (highlightedElement) {
                highlightedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [highlightedIndex, isOpen]);
    var handleKeyDown = function (e) {
        if (disabled)
            return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                    setHighlightedIndex(0);
                }
                else {
                    setHighlightedIndex(function (prev) {
                        return prev < flatOptions.length - 1 ? prev + 1 : prev;
                    });
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (isOpen) {
                    setHighlightedIndex(function (prev) { return prev > 0 ? prev - 1 : prev; });
                }
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (isOpen && highlightedIndex >= 0) {
                    onChange === null || onChange === void 0 ? void 0 : onChange(flatOptions[highlightedIndex].value);
                    setIsOpen(false);
                    setHighlightedIndex(-1);
                }
                else if (!isOpen) {
                    setIsOpen(true);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setHighlightedIndex(-1);
                break;
            case 'Tab':
                if (isOpen) {
                    setIsOpen(false);
                    setHighlightedIndex(-1);
                }
                break;
        }
    };
    return (<div className="relative" ref={dropdownRef}>
      {label && (<label htmlFor={uniqueId} className="block text-sm font-medium text-green-900 mb-1.5">
          {label}
        </label>)}
      <Button_1.Button id={uniqueId} variant={variant} disabled={disabled} onClick={function () { return setIsOpen(!isOpen); }} onKeyDown={handleKeyDown} aria-haspopup="listbox" aria-expanded={isOpen} aria-controls={"".concat(uniqueId, "-options")} aria-labelledby={label ? "".concat(uniqueId, "-label") : undefined} className={(0, cn_1.cn)("w-full justify-between", error && "border-red-500 focus-visible:ring-red-400", className)}>
        <span className={(0, cn_1.cn)("truncate", !selectedLabel && "text-green-900/60")}>
          {selectedLabel || placeholder}
        </span>
        <lucide_react_1.ChevronDown className={(0, cn_1.cn)("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")}/>
      </Button_1.Button>

      {isOpen && (<div id={"".concat(uniqueId, "-options")} role="listbox" aria-labelledby={label ? "".concat(uniqueId, "-label") : undefined} className={(0, cn_1.cn)("absolute z-50 w-full mt-2", "bg-white border-2 border-black rounded-md", "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", "animate-in fade-in-0 zoom-in-95 duration-200")}>
          <div className="p-1 max-h-60 overflow-auto" ref={optionsRef}>
            {options.map(function (option, index) {
                if ('options' in option) {
                    return (<div key={index} className="px-2 py-1.5">
                    <div className="text-sm font-semibold text-green-900 mb-1" role="presentation">
                      {option.label}
                    </div>
                    <div className="space-y-1">
                      {option.options.map(function (subOption, subIndex) {
                            var isHighlighted = highlightedIndex === flatOptions.findIndex(function (o) { return o.value === subOption.value; });
                            return (<button key={subIndex} role="option" aria-selected={value === subOption.value} onClick={function () {
                                    onChange === null || onChange === void 0 ? void 0 : onChange(subOption.value);
                                    setIsOpen(false);
                                }} onMouseEnter={function () {
                                    setHighlightedIndex(flatOptions.findIndex(function (o) { return o.value === subOption.value; }));
                                }} className={(0, cn_1.cn)("w-full text-left px-3 py-1.5 text-sm rounded-md", "transition-colors duration-200", "hover:bg-green-100 focus:bg-green-100", "focus:outline-none focus:ring-2 focus:ring-green-400", (value === subOption.value || isHighlighted) && "bg-green-100 font-medium")}>
                            {subOption.label}
                          </button>);
                        })}
                    </div>
                  </div>);
                }
                var isHighlighted = highlightedIndex === flatOptions.findIndex(function (o) { return o.value === option.value; });
                return (<button key={index} role="option" aria-selected={value === option.value} onClick={function () {
                        onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                        setIsOpen(false);
                    }} onMouseEnter={function () {
                        setHighlightedIndex(flatOptions.findIndex(function (o) { return o.value === option.value; }));
                    }} className={(0, cn_1.cn)("w-full text-left px-3 py-1.5 text-sm rounded-md", "transition-colors duration-200", "hover:bg-green-100 focus:bg-green-100", "focus:outline-none focus:ring-2 focus:ring-green-400", (value === option.value || isHighlighted) && "bg-green-100 font-medium")}>
                  {option.label}
                </button>);
            })}
          </div>
        </div>)}
    </div>);
}
