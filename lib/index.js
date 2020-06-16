"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var configurator_1 = require("./configurator");
Object.defineProperty(exports, "configurator", { enumerable: true, get: function () { return configurator_1.default; } });
__exportStar(require("./logger"), exports);
var snooman_1 = require("./snooman");
Object.defineProperty(exports, "snooman", { enumerable: true, get: function () { return snooman_1.default; } });
__exportStar(require("./structures"), exports);
__exportStar(require("./structures/api"), exports);
//# sourceMappingURL=index.js.map