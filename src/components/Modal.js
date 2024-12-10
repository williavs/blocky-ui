"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = Modal;
var react_1 = require("react");
var cn_1 = require("../utils/cn");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
function Modal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children, className = _a.className;
    (0, react_1.useEffect)(function () {
        var handleEscape = function (e) {
            if (e.key === 'Escape')
                onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return function () {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}/>

      {/* Modal */}
      <div className="absolute inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full">
        <div className={(0, cn_1.cn)("w-full bg-white border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]", "animate-in zoom-in-95 duration-300", className)}>
          <div className="flex items-center justify-between p-4 border-b-2 border-black">
            {title && (<h2 className="text-lg font-display font-bold">{title}</h2>)}
            <Button_1.Button variant="outline" size="sm" className="ml-auto" onClick={onClose}>
              <lucide_react_1.X className="w-4 h-4"/>
              <span className="sr-only">Close</span>
            </Button_1.Button>
          </div>

          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </div>);
}
