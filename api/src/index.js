import { say } from "cowsay";
import { app } from "./app/app.js";
import { appConfig } from "./shared/config/config.js";

app.listen(appConfig.port, () => console.log(say({
  text: `🚀 Server listening on http://localhost:${appConfig.port}`,
  e: "oO",
  T: "U "
})))
