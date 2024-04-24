export enum logLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export class logEntity {
  public level: logLevel;
  public message: string;
  public createAt: Date;
  constructor(message: string, level: logLevel) {
    this.level = level;
    this.message = message;
    this.createAt = new Date();
  }
  static fromJSON(json: string): logEntity {
    const { message, level, createAt } = JSON.parse(json);
    const log = new logEntity(message, level);
    log.createAt = new Date(createAt);
    return log;
  }
}
