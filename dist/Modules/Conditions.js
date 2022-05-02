"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = exports.OtherWise = exports.When = exports.Else = exports.If = exports.isNodeID = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var isNodeID = function (node) {
    var _a;
    var ids = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ids[_i - 1] = arguments[_i];
    }
    var str = (_a = node === null || node === void 0 ? void 0 : node.type) === null || _a === void 0 ? void 0 : _a.toString();
    return ids === null || ids === void 0 ? void 0 : ids.find(function (id) { var _a; return ((_a = /csID = '(.*)'/g.exec(str)) === null || _a === void 0 ? void 0 : _a[1]) === id; });
};
exports.isNodeID = isNodeID;
var If = function (_a) {
    var _b, _c;
    var _d = _a.csID, csID = _d === void 0 ? '@CS-IF' : _d, condition = _a.condition, children = _a.children;
    var nodes = react_1.Children.toArray(children);
    var elseNodeIndex = (_b = nodes === null || nodes === void 0 ? void 0 : nodes.findIndex) === null || _b === void 0 ? void 0 : _b.call(nodes, function (node) { return (0, exports.isNodeID)(node, '@CS-ELSE'); });
    if (elseNodeIndex >= 0) {
        if (!condition)
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: nodes === null || nodes === void 0 ? void 0 : nodes[elseNodeIndex] });
        else
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: ((_c = nodes === null || nodes === void 0 ? void 0 : nodes.splice) === null || _c === void 0 ? void 0 : _c.call(nodes, elseNodeIndex, 1)) && nodes });
    }
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: condition ? children : null }, csID);
};
exports.If = If;
var Else = function (_a) {
    var _b = _a.csID, csID = _b === void 0 ? '@CS-ELSE' : _b, children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: children }, csID);
};
exports.Else = Else;
var When = function (_a) {
    var _b = _a.csID, csID = _b === void 0 ? '@CS-WHEN' : _b, condition = _a.condition, children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: condition ? children : null }, csID);
};
exports.When = When;
var OtherWise = function (_a) {
    var _b = _a.csID, csID = _b === void 0 ? '@CS-OTHERWISE' : _b, children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: children }, csID);
};
exports.OtherWise = OtherWise;
var Select = function (_a) {
    var _b;
    var children = _a.children;
    if (!children)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    var returnNodes = [];
    var nodes = react_1.Children.toArray(children);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes === null || nodes === void 0 ? void 0 : nodes[i];
        var isLast = i === nodes.length - 1;
        if ((0, exports.isNodeID)(node, '@CS-WHEN', '@CS-IF')) {
            if ((_b = node === null || node === void 0 ? void 0 : node.props) === null || _b === void 0 ? void 0 : _b.condition)
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: node });
        }
        if ((0, exports.isNodeID)(node, '@CS-OTHERWISE', '@CS-ELSE')) {
            if (isLast && (returnNodes === null || returnNodes === void 0 ? void 0 : returnNodes.length) === 0)
                returnNodes.push(node);
        }
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: returnNodes });
};
exports.Select = Select;
