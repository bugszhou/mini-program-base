import {
  MiniComponent,
  method,
  ComponentBase as MiniComponentBase,
} from "mipp-ali";
import { IEventBase } from "./Decorators/events";

MiniComponentBase.before = () => {
  return ComponentBase?.before?.() ?? Object.create(null);
};

export default class ComponentBase<
  IData = any,
> extends MiniComponentBase<IData> {
  viewStatus: "load" | "show" | "ready" = "load";

  protected pageViewIns: any = null;

  static before(): Partial<{
    created: () => void;
    ready: () => void;
  }> {
    return Object.create(null);
  }

  @method
  aom<IComponent = MiniComponent<any>>(): IComponent {
    return this as unknown as IComponent;
  }

  @method
  isComponent() {
    return true;
  }

  @method
  isPage() {
    return false;
  }

  @method
  getPageViewIns() {
    return this?.pageViewIns ?? null;
  }

  /**
   * 视图是否准备完成
   * @returns boolean
   */
  @method
  isReady() {
    return this?.viewStatus === "ready";
  }

  @method
  getEvents<IEvent = IEventBase>(): IEvent {
    throw new TypeError("需要在子类重写: getEvents 方法");
  }
}

export { MiniComponent };
