import { method, MiniComponent } from "mipp-ali";

export default class ComponentBase<IData = any> extends MiniComponent<IData> {
  @method
  aom<IComponent = MiniComponent<any>>(): IComponent {
    return this as unknown as IComponent;
  }
}

export { MiniComponent };
