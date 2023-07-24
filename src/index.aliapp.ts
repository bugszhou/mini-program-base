import {
  MiniComponent as WeappMiniComponent,
  IMiniComponentOptions,
  PageBase as WeappPageBase,
} from "mipp";
import {
  MiniComponent as AliMiniComponent,
  method,
  IComponentData,
  pageLifetime,
  lifetimes,
  lifetime,
  extendLifetime,
  IMiniEvent,
  MiniPage as PageBase,
} from "mipp-ali";
import ComponentBase from "./ComponentBase.aliapp";
import observer from "./observer";
import { IEventBase } from "./Decorators/events";
export * from "./Decorators/index.aliapp";

class ViewBase<IData extends Record<string, any>> extends PageBase<IData> {
  viewStatus: "load" | "show" | "ready" = "load";

  protected myComponents: any[] = [];

  isComponent() {
    return false;
  }

  isPage() {
    return true;
  }

  getComponents() {
    return this?.myComponents ?? [];
  }

  onLoad(...opts: any) {
    try {
      this.viewStatus = "load";
      if (typeof super.onLoad === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.onLoad(...opts);
      }
    } catch {}
  }

  onShow(...opts: any) {
    try {
      if (this.viewStatus !== "ready") {
        this.viewStatus = "show";
      }
      if (typeof super.onShow === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.onShow(...opts);
      }
    } catch {}
  }

  onReady(...opts: any) {
    try {
      this.viewStatus = "ready";
      if (typeof super.onReady === "function") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        super.onReady(...opts);
      }
    } catch {}
  }

  /**
   * 视图是否准备完成
   * @returns boolean
   */
  isReady() {
    return this?.viewStatus === "ready";
  }

  getEvents<IEvent = IEventBase>(): IEvent {
    throw new TypeError("需要在子类重写: getEvents 方法");
  }
}

export {
  ComponentBase,
  AliMiniComponent as MiniComponent,
  WeappMiniComponent,
  AliMiniComponent,
  IComponentData,
  observer,
  method,
  pageLifetime,
  lifetimes,
  lifetime,
  IMiniEvent,
  IMiniComponentOptions,
  ViewBase as PageBase,
  ViewBase as AliappPageBase,
  WeappPageBase,
  extendLifetime,
};
