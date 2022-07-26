import { ComponentBase } from "mipp-ali";

export default function MiniProgramComponent(
  target: new (...opts: any[]) => any,
) {
  const obj = new target();
  ComponentBase.render(obj);
}
