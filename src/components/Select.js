"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = Select;
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var Button_1 = require("./Button");
function Select(_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, error = _a.error, label = _a.label, _b = _a.placeholder, placeholder = _b === void 0 ? "Select an option" : _b, className = _a.className, disabled = _a.disabled;
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = (0, react_1.useState)(-1), highlightedIndex = _d[0], setHighlightedIndex = _d[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var optionsRef = (0, react_1.useRef)([]);
    var selectedOption = options.find(function (opt) { return opt.value === value; });
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
        if (!isOpen) {
            setHighlightedIndex(-1);
        }
    }, [isOpen]);
    var handleKeyDown = function (event) {
        if (disabled)
            return;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (isOpen && highlightedIndex >= 0) {
                    onChange === null || onChange === void 0 ? void 0 : onChange(options[highlightedIndex].value);
                    setIsOpen(false);
                }
                else {
                    setIsOpen(true);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                else {
                    setHighlightedIndex(function (prev) {
                        return prev < options.length - 1 ? prev + 1 : prev;
                    });
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                else {
                    setHighlightedIndex(function (prev) {
                        return prev > 0 ? prev - 1 : prev;
                    });
                }
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            case 'Tab':
                if (isOpen) {
                    setIsOpen(false);
                }
                break;
        }
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if (highlightedIndex >= 0 && isOpen) {
            (_a = optionsRef.current[highlightedIndex]) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                block: 'nearest'
            });
        }
    }, [highlightedIndex, isOpen]);
    return (<div className={(0, cn_1.cn)("relative", className)} ref={dropdownRef}>
      {label && (<label className="block text-sm font-medium text-green-900 mb-1.5">
          {label}
        </label>)}
      
      <Button_1.Button type="button" variant="outline" onClick={function () { return !disabled && setIsOpen(!isOpen); }} onKeyDown={handleKeyDown} aria-haspopup="listbox" aria-expanded={isOpen} aria-labelledby={label ? "".concat(label, "-label") : undefined} className={(0, cn_1.cn)("w-full justify-between bg-white", error && "border-red-500 focus:ring-red-400", disabled && "opacity-50 cursor-not-allowed")}>
        <span className={(0, cn_1.cn)("truncate", !selectedOption && "text-green-900/60")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <lucide_react_1.ChevronDown className={(0, cn_1.cn)("w-4 h-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}/>
      </Button_1.Button>

      <div className={(0, cn_1.cn)("absolute top-full mt-2 w-full rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50", "transform transition-all duration-200 origin-top", isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none")} role="listbox" aria-activedescendant={highlightedIndex >= 0 ? "option-".concat(highlightedIndex) : undefined}>
        <div className="p-2">
          {options.map(function (option, index) { return (<button key={option.value} ref={function (el) { return optionsRef.current[index] = el; }} role="option" aria-selected={option.value === value} id={"option-".concat(index)} onClick={function () {
                onChange === null || onChange === void 0 ? void 0 : onChange(option.value);
                setIsOpen(false);
            }} onMouseEnter={function () { return setHighlightedIndex(index); }} className={(0, cn_1.cn)("w-full text-left px-3 py-2 rounded-md text-sm", "transition-colors font-medium", "hover:bg-green-100 focus:bg-green-100", "focus:outline-none focus:ring-2 focus:ring-green-400", option.value === value && "bg-green-100", highlightedIndex === index && "bg-green-50")}>
              {option.label}
            </button>); })}
        </div>
      </div>

      {error && (<p className="mt-1.5 text-sm text-red-500">
          {typeof error === 'string' ? error : 'This field is required'}
        </p>)}
    </div>);
}
