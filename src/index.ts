import {
  IComponentData,
  MiniComponent as WeappMiniComponent,
  method,
  pageLifetime,
  lifetimes,
  lifetime,
  observer as weappObserver,
  IMiniEvent,
  IMiniComponentOptions,
  PageBase,
} from "mipp";
import {
  MiniComponent as AliMiniComponent,
  PageBase as AliappPageBase,
} from "mipp-ali";
import ComponentBase from "./ComponentBase";
import { IEventBase } from "./Decorators/events";
export * from "./Decorators/index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function observer(key?: string) {
  return weappObserver;
}

class ViewBase<IData extends Record<string, any>> extends PageBase<IData> {
  viewStatus: "load" | "show" | "ready" = "load";

  isComponent() {
    return false;
  }

  isPage() {
    return true;
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
  WeappMiniComponent as MiniComponent,
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
  ViewBase as WeappPageBase,
  AliappPageBase,
};
