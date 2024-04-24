import { logEntity, logLevel } from "../entities/log.entity";
//las clases abstractas no se pueden instanciar, solo se pueden heredar
//sirven para obligar el comportamiento de las clases hijas
export abstract class logDataSource {
  //metodos abstractos no tienen cuerpo, solo se definen
  //se definen en las clases hijas
  abstract saveLog(log: logEntity): Promise<void>;
  abstract getLogs(level: logLevel): Promise<logEntity[]>;
}
