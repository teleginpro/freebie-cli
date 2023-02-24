import http from "http";
import winston from "winston";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const message = "Hello TypeScript!";
const port = env.PORT ?? 5000;

const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `[${info.timestamp as string}] ${info.level}: ${info.message as string}`;
        })
    ),
});

http.createServer((_, res) => {
    res.end(message);
}).listen(port, function () {
    logger.info(`Server is running at http://0.0.0.0:${port}.`);
});
