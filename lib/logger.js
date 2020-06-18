"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const ecs_pino_format_1 = __importDefault(require("@elastic/ecs-pino-format"));
const pino_1 = __importDefault(require("pino"));
const pino_elasticsearch_1 = __importDefault(require("pino-elasticsearch"));
const pino_multi_stream_1 = require("pino-multi-stream");
const configurator_1 = __importDefault(require("./configurator"));
const { index, node } = configurator_1.default.logger.elasticSearch;
let streams = [{ stream: process.stdout }];
if (index && node)
    streams.push(pino_elasticsearch_1.default({
        index: index,
        consistency: "one",
        node: node,
        "es-version": 7,
        "flush-bytes": 10,
        sync: true,
    }));
exports.logger = pino_1.default(Object.assign({ level: configurator_1.default.logger.level, redact: ["req.headers.x-*-token"] }, ecs_pino_format_1.default), pino_multi_stream_1.multistream(streams));
exports.logger.info({
    msg: `Started logger module`,
    logLevel: exports.logger.level,
});
//# sourceMappingURL=logger.js.map