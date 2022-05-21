"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = void 0;
const qs_1 = require("qs");
const queryBuilder = (query) => {
    return `?${qs_1.default.stringify(query)}`;
};
exports.queryBuilder = queryBuilder;
//# sourceMappingURL=queryBuilder.js.map