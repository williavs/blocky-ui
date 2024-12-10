"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExample = DataExample;
var react_1 = require("react");
var db_1 = require("../utils/db");
var Card_1 = require("./Card");
var Button_1 = require("./Button");
var Badge_1 = require("./Badge");
var Input_1 = require("./Input");
var lucide_react_1 = require("lucide-react");
var cn_1 = require("../utils/cn");
function DataExample() {
    var _this = this;
    var _a = (0, react_1.useState)([]), items = _a[0], setItems = _a[1];
    var _b = (0, react_1.useState)(''), newTitle = _b[0], setNewTitle = _b[1];
    var _c = (0, react_1.useState)(''), newDescription = _c[0], setNewDescription = _c[1];
    var _d = (0, react_1.useState)(true), isLoading = _d[0], setIsLoading = _d[1];
    (0, react_1.useEffect)(function () {
        var initDB = function () { return __awaiter(_this, void 0, void 0, function () {
            var items_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, db_1.db.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, db_1.db.getAllItems()];
                    case 2:
                        items_1 = _a.sent();
                        setItems(items_1);
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Failed to initialize DB:', error_1);
                        return [3 /*break*/, 5];
                    case 4:
                        setIsLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        initDB();
    }, []);
    var addItem = function () { return __awaiter(_this, void 0, void 0, function () {
        var id, items_2, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!newTitle.trim())
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, db_1.db.addItem({
                            title: newTitle,
                            description: newDescription,
                            status: 'active',
                            createdAt: new Date(),
                        })];
                case 2:
                    id = _a.sent();
                    return [4 /*yield*/, db_1.db.getAllItems()];
                case 3:
                    items_2 = _a.sent();
                    setItems(items_2);
                    setNewTitle('');
                    setNewDescription('');
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error('Failed to add item:', error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var deleteItem = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.db.deleteItem(id)];
                case 1:
                    _a.sent();
                    setItems(items.filter(function (item) { return item.id !== id; }));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Failed to delete item:', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var toggleStatus = function (item) { return __awaiter(_this, void 0, void 0, function () {
        var newStatus, updatedItem_1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newStatus = item.status === 'active' ? 'archived' : 'active';
                    updatedItem_1 = __assign(__assign({}, item), { status: newStatus });
                    return [4 /*yield*/, db_1.db.updateItem(updatedItem_1)];
                case 1:
                    _a.sent();
                    setItems(items.map(function (i) { return i.id === item.id ? updatedItem_1 : i; }));
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error('Failed to update item:', error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (isLoading) {
        return <div className="animate-pulse">Loading...</div>;
    }
    return (<div className="space-y-6">
      <Card_1.Card className="p-6 space-y-4">
        <h3 className="font-display font-bold text-lg">Add New Item</h3>
        <div className="space-y-3">
          <Input_1.Input placeholder="Title" value={newTitle} onChange={function (e) { return setNewTitle(e.target.value); }}/>
          <Input_1.Input placeholder="Description" value={newDescription} onChange={function (e) { return setNewDescription(e.target.value); }}/>
          <Button_1.Button onClick={addItem} className="w-full">
            <lucide_react_1.Plus className="w-4 h-4 mr-2"/>
            Add Item
          </Button_1.Button>
        </div>
      </Card_1.Card>

      <div className="space-y-4">
        {items.map(function (item) { return (<Card_1.Card key={item.id} className={(0, cn_1.cn)("p-4 transition-all", item.status === 'archived' && "opacity-75")}>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold">{item.title}</h3>
                  <Badge_1.Badge variant={item.status === 'active' ? 'success' : 'outline'} className="cursor-pointer" onClick={function () { return toggleStatus(item); }}>
                    {item.status}
                  </Badge_1.Badge>
                </div>
                <p className="text-sm text-green-900">{item.description}</p>
                <p className="text-xs text-green-900/60">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Button_1.Button variant="outline" size="sm" className="text-red-500 hover:text-red-600" onClick={function () { return deleteItem(item.id); }}>
                <lucide_react_1.Trash2 className="w-4 h-4"/>
              </Button_1.Button>
            </div>
          </Card_1.Card>); })}
      </div>
    </div>);
}
