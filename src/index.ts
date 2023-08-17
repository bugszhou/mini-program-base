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
  extendLifetime,
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

  static before(): Partial<{
    onLoad: () => void;
    onShow: () => void;
    onReady: () => void;
  }> {
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

  beforeOnLoad(...opts: any[]) {
    try {
      this.viewOptions = opts?.[0] ?? Object.create(null);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      super.beforeOnLoad?.(...opts);
    } catch {}
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
  extendLifetime,
  IMiniEvent,
  IMiniComponentOptions,
  ViewBase as PageBase,
  ViewBase as WeappPageBase,
  AliappPageBase,
};
