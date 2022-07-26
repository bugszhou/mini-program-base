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
  IMiniEvent,
  MiniPage as PageBase,
} from "mipp-ali";
import ComponentBase from "./ComponentBase.aliapp";
import observer from "./observer";
export * from "./Decorators/index.aliapp";

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
  IMiniEvent,
  IMiniComponentOptions,
  PageBase,
  PageBase as AliappPageBase,
  WeappPageBase,
};
