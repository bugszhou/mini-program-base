import {
  IComponentData,
  MiniComponent as WeappMiniComponent,
  method,
  pageLifetime,
  lifetimes,
  observer as weappObserver,
  IMiniEvent,
  IMiniComponentOptions,
} from "mipp";
import { MiniComponent as AliMiniComponent } from "mipp-ali";
import ComponentBase from "./ComponentBase";

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
};
