import { ComponentBase } from "mipp";

export default function MiniProgramComponent(target: new (...opts: any[]) => any) {
  const obj = new target();
  ComponentBase.render(obj);
}
