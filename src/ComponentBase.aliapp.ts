import { ComponentBase as MiniComponentBase } from "mipp";
import { MiniComponent, method } from "mipp-ali";

export default class ComponentBase<
  IData = any,
> extends MiniComponentBase<IData> {
  @method
  aom<IComponent = MiniComponent<any>>(): IComponent {
    return this as unknown as IComponent;
  }
}

export { MiniComponent };
