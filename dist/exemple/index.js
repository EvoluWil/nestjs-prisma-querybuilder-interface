"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryBuilder_1 = require("../querybuilder/queryBuilder");
const teste = () => {
    const q = (0, queryBuilder_1.queryBuilder)({
        select: 'a b c',
        populate: [
            { path: 'pop', select: 'um dois' },
            { path: 'populate', select: 'tres quatro' }
        ]
    });
    console.log(q);
};
teste();
//# sourceMappingURL=index.js.map