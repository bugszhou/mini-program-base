import {
  MiniComponent,
  method,
  ComponentBase as MiniComponentBase,
} from "mipp";
import { IEventBase } from "./Decorators/events";

export default class ComponentBase<
  IData = any,
> extends MiniComponentBase<IData> {
  @method
  aom<IComponent = MiniComponent<any>>(): IComponent {
    return this as unknown as IComponent;
  }

  @method
  getEvents<IEvent = IEventBase>(): IEvent {
    throw new TypeError("需要在子类重写: getEvents 方法");
  }
}

export { MiniComponent };
