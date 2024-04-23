import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  Server.start();
}
