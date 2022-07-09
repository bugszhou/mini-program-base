import { MiniComponent, method, ComponentBase as MiniComponentBase } from "mipp";

export default class ComponentBase<IData = any> extends MiniComponentBase<IData> {
  @method
  aom<IComponent = MiniComponent<any>>(): IComponent {
    return this as unknown as IComponent;
  }
}

export { MiniComponent };
