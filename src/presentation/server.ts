import { CronService } from "./cron/cron-service";

export class Server {
  //para ocupar menos memoria, se puede hacer un metodo estatico y para no tener que instanciar la clase
  public static start() {
    console.log("Server started...");
    CronService.createJob("*/2 * * * * *", () => {
      const date = new Date();
      console.log(`Job executed at ${date}`);
    });
  }
}
