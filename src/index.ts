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
export * from "./Decorators/index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function observer(key?: string) {
  return weappObserver;
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
  PageBase,
  PageBase as WeappPageBase,
  AliappPageBase,
};
