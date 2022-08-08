import { PageBase } from "mipp";
import { generateRandomString } from "../helps";

export default function MiniProgramPage(target: new (...opts: any[]) => any) {
  const obj = new target();
  obj.__serialNumber = generateRandomString();
  PageBase.render(obj);
}
