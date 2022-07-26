import { MiniPage } from "mipp-ali";

export default function MiniProgramPage(target: new (...opts: any[]) => any) {
  const obj = new target();
  MiniPage.render(obj);
}
