import { MiniPage } from "mipp-ali";
import { generateRandomString } from "../helps";

export default function MiniProgramPage(target: new (...opts: any[]) => any) {
  const obj = new target();
  obj.__serialNumber = generateRandomString();
  MiniPage.render(obj);
}
