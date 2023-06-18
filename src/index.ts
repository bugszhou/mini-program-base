import {
  IComponentData,
  MiniComponent as WeappMiniComponent,
  method,
  pageLifetime,
  lifetimes,
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
  IMiniEvent,
  IMiniComponentOptions,
  ViewBase as PageBase,
  ViewBase as WeappPageBase,
  AliappPageBase,
};
