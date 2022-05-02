"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Map = function (_a) {
    var _b;
    var items = _a.items, filter = _a.filter, children = _a.children;
    var data = items || [];
    if (filter)
        data = (_b = data === null || data === void 0 ? void 0 : data.filter) === null || _b === void 0 ? void 0 : _b.call(data, filter);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data === null || data === void 0 ? void 0 : data.map(children) });
};
exports.Map = Map;
