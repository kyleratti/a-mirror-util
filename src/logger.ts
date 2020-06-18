import ecsFormat from "@elastic/ecs-pino-format";
import pino from "pino";
import pinoElastic from "pino-elasticsearch";
import { multistream } from "pino-multi-stream";
import configurator from "./configurator";

const { index, node } = configurator.logger.elasticSearch;

let streams = [{ stream: process.stdout }];

if (index && node)
  streams.push(
    pinoElastic({
      index: index,
      consistency: "one",
      node: node,
      "es-version": 7,
      "flush-bytes": 10,
      sync: true,
    })
  );

export const logger = pino(
  {
    level: configurator.logger.level,
    redact: [
      "req.headers.x-tuckbot-api-token",
      "req.headers.x-acm-api-token",
      "req.headers.x-acm-bot-token",
    ],
    ...ecsFormat,
  },
  multistream(streams)
);

logger.info({
  msg: `Started logger module`,
  logLevel: logger.level,
});
