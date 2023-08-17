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

PageBase.before = () => {
  return ViewBase?.before?.() ?? Object.create(null);
};

class ViewBase<
  IData extends Record<string, any>,
  IOptions = any,
> extends PageBase<IData> {
  viewStatus: "load" | "show" | "ready" = "load";

  protected myComponents: any[] = [];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  protected viewOptions: IOptions = {};

  static before(): {
    onLoad: () => void;
    onShow: () => void;
    onReady: () => void;
  } {
    return Object.create(null);
  }

  isComponent() {
    return false;
  }

  isPage() {
    return true;
  }

  getComponents() {
    return this?.myComponents ?? [];
  }

  getViewOptions(): IOptions {
    return this.viewOptions ?? Object.create(null);
  }

  beforeOnLoad(...opts: any[]) {
    try {
      this.viewOptions = opts?.[0] ?? Object.create(null);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      super.beforeOnLoad?.(...opts);
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
