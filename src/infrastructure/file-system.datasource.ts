import fs from "fs";
import { logDataSource } from "../domain/datasources/log.datasource";
import { logEntity, logLevel } from "../domain/entities/log.entity";
export class fileSystemDataSource implements logDataSource {
  private readonly path: string = "logs/";
  private lowLogPath: string = "logs/logs-low.log";
  private mediumLogPath: string = "logs/logs-medium.log";
  private highLogPath: string = "logs/logs-high.log";
  constructor() {
    this.createLogFile();
  }

  private createLogFile = () => {
    if (!fs.existsSync(this.path)) {
      fs.mkdirSync(this.path);
    }
    if (!fs.existsSync(this.lowLogPath)) {
      fs.writeFileSync(this.lowLogPath, "");
    }
    if (!fs.existsSync(this.mediumLogPath)) {
      fs.writeFileSync(this.mediumLogPath, "");
    }
    if (!fs.existsSync(this.highLogPath)) {
      fs.writeFileSync(this.highLogPath, "");
    }
  };
  async saveLog(log: logEntity): Promise<void> {
    fs.appendFileSync(this.path, `${JSON.stringify(log)}\n`);
    if (log.level === logLevel.INFO) {
      fs.appendFileSync(this.lowLogPath, `${JSON.stringify(log)}\n`);
    }
    if (log.level === logLevel.WARN) {
      fs.appendFileSync(this.mediumLogPath, `${JSON.stringify(log)}\n`);
    }
    if (log.level === logLevel.ERROR) {
      fs.appendFileSync(this.highLogPath, `${JSON.stringify(log)}\n`);
    }
  }

  private getLogsFromFile = (path: string): logEntity[] => {
    const logs: logEntity[] = [];
    const data = fs.readFileSync(path, "utf-8");
  };
  getLogs(level: logLevel): Promise<logEntity[]> {
    switch (level) {
      case logLevel.INFO:
        return Promise.resolve([]);
      case logLevel.WARN:
        return Promise.resolve([]);
      case logLevel.ERROR:
        return Promise.resolve([]);
      default:
        throw new Error("Invalid log level");
    }
  }
}
