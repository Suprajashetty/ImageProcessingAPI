"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageresize_1 = __importDefault(require("./routes/imageresize"));
var cacheCheck_1 = __importDefault(require("./routes/cacheCheck"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/resize', cacheCheck_1.default, imageresize_1.default);
app.listen(port, function () {
    console.log("Server is running http://localhost:".concat(port));
});
exports.default = app;
