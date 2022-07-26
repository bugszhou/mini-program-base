import { PageBase } from "mipp";

export default function MiniProgramPage(target: new (...opts: any[]) => any) {
  const obj = new target();
  PageBase.render(obj);
}
