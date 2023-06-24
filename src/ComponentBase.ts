import {
  MiniComponent,
  method,
  ComponentBase as MiniComponentBase,
  lifetime,
} from "mipp";
import { IEventBase } from "./Decorators/events";

export default class ComponentBase<
  IData = any,
> extends MiniComponentBase<IData> {
  viewStatus: "load" | "show" | "ready" = "load";

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

  @lifetime
  created(...opts: any) {
    try {
      this.viewStatus = "load";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      super.created?.(...opts);
    } catch {}
  }

  @lifetime
  show(...opts: any) {
    try {
      if (this.viewStatus !== "ready") {
        this.viewStatus = "show";
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      super.show?.(...opts);
    } catch {}
  }

  @lifetime
  ready(...opts: any) {
    try {
      this.viewStatus = "ready";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      super.ready?.(...opts);
    } catch {}
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
