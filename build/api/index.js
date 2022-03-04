"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgRoute = express_1.default.Router();
imgRoute.get('/', function (req, res) {
    res.send("Image Router");
});
exports.default = imgRoute;
