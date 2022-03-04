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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import sharp from 'sharp';
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var filepath = path_1.default.resolve(__dirname, '../../images');
//To Add caching
var cacheImg = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, outputImg, inputImg, width, height;
    return __generator(this, function (_a) {
        fileName = "".concat(req.query.fileName);
        outputImg = "".concat(filepath, "\\thumb\\").concat(path_1.default.parse(fileName).name, "_").concat(req.query.width, "_").concat(req.query.height).concat(path_1.default.parse(fileName).ext);
        inputImg = "".concat(filepath, "\\full\\").concat(fileName);
        width = parseInt("".concat(req.query.width));
        height = parseInt("".concat(req.query.height));
        if (!fs_1.default.existsSync(inputImg)) {
            res.send('Input file not found');
        }
        else if (width <= 0 || height <= 0) {
            res.send("Values for height and width should be greater than 0");
        }
        else if (!width || !height) {
            res.send("Values for height and/or width is missing. Please enter the values");
        }
        else if (!fs_1.default.existsSync(outputImg)) {
            res.send('Output file not found');
        }
        else if (fs_1.default.existsSync(outputImg)) {
            res.sendFile(outputImg);
            console.log('Caching image');
        }
        else {
            next();
        }
        return [2 /*return*/];
    });
}); };
exports.default = cacheImg;