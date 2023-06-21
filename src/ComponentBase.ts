import {
  MiniComponent,
  method,
  ComponentBase as MiniComponentBase,
  lifetimes,
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

  @lifetimes
  created(...opts: any) {
    try {
      this.viewStatus = "load";
      if (typeof super.created === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.created(...opts);
      }
    } catch {}
  }

  @lifetimes
  show(...opts: any) {
    try {
      if (this.viewStatus !== "ready") {
        this.viewStatus = "show";
      }
      if (typeof super.show === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.show(...opts);
      }
    } catch {}
  }

  @lifetimes
  ready(...opts: any) {
    try {
      this.viewStatus = "ready";
      if (typeof super.ready === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.ready(...opts);
      }
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
