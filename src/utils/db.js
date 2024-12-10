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
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var BlockyDB = /** @class */ (function () {
    function BlockyDB() {
        this.db = null;
        this.dbName = 'blockyDB';
        this.version = 1;
    }
    BlockyDB.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.dbName, _this.version);
                        request.onerror = function () { return reject(request.error); };
                        request.onsuccess = function () {
                            _this.db = request.result;
                            resolve();
                        };
                        request.onupgradeneeded = function (event) {
                            var db = event.target.result;
                            // Create example items store
                            if (!db.objectStoreNames.contains('items')) {
                                var store_1 = db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
                                store_1.createIndex('status', 'status', { unique: false });
                                store_1.createIndex('createdAt', 'createdAt', { unique: false });
                                // Add some example data
                                var sampleItems = [
                                    {
                                        title: 'Design System Documentation',
                                        description: 'Write comprehensive documentation for the Blocky Design System components.',
                                        status: 'active',
                                        createdAt: new Date(),
                                    },
                                    {
                                        title: 'Component Library',
                                        description: 'Build and test all core components for the design system.',
                                        status: 'active',
                                        createdAt: new Date(),
                                    },
                                    {
                                        title: 'Old Project',
                                        description: 'This is an archived project from last month.',
                                        status: 'archived',
                                        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                                    },
                                ];
                                sampleItems.forEach(function (item) { return store_1.add(item); });
                            }
                        };
                    })];
            });
        });
    };
    BlockyDB.prototype.getAllItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.db) {
                            reject(new Error('Database not initialized'));
                            return;
                        }
                        var transaction = _this.db.transaction(['items'], 'readonly');
                        var store = transaction.objectStore('items');
                        var request = store.getAll();
                        request.onerror = function () { return reject(request.error); };
                        request.onsuccess = function () { return resolve(request.result); };
                    })];
            });
        });
    };
    BlockyDB.prototype.addItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.db) {
                            reject(new Error('Database not initialized'));
                            return;
                        }
                        var transaction = _this.db.transaction(['items'], 'readwrite');
                        var store = transaction.objectStore('items');
                        var request = store.add(item);
                        request.onerror = function () { return reject(request.error); };
                        request.onsuccess = function () { return resolve(request.result); };
                    })];
            });
        });
    };
    BlockyDB.prototype.updateItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.db) {
                            reject(new Error('Database not initialized'));
                            return;
                        }
                        var transaction = _this.db.transaction(['items'], 'readwrite');
                        var store = transaction.objectStore('items');
                        var request = store.put(item);
                        request.onerror = function () { return reject(request.error); };
                        request.onsuccess = function () { return resolve(); };
                    })];
            });
        });
    };
    BlockyDB.prototype.deleteItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.db) {
                            reject(new Error('Database not initialized'));
                            return;
                        }
                        var transaction = _this.db.transaction(['items'], 'readwrite');
                        var store = transaction.objectStore('items');
                        var request = store.delete(id);
                        request.onerror = function () { return reject(request.error); };
                        request.onsuccess = function () { return resolve(); };
                    })];
            });
        });
    };
    return BlockyDB;
}());
exports.db = new BlockyDB();
