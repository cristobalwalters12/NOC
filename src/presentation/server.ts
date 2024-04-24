import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  //para ocupar menos memoria, se puede hacer un metodo estatico y para no tener que instanciar la clase
  public static start() {
    console.log("Server started...");
    CronService.createJob("*/2 * * * * *", () => {
      // asi se llama a un metodo no estatico
      new CheckService(
        //aqui se pueden hacer inyecciones de dependencias
        () => {
          console.log("Service is working");
        },
        (error) => {
          console.error(error);
        }
      ).execute("http://localhost:3000/");
    });
  }
}
