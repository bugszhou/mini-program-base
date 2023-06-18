import { MiniComponent as WeappMiniComponent, IMiniComponentOptions, PageBase as WeappPageBase } from "mipp";
import { MiniComponent as AliMiniComponent, method, IComponentData, pageLifetime, lifetimes, IMiniEvent, MiniPage as PageBase } from "mipp-ali";
import ComponentBase from "./ComponentBase.aliapp";
import observer from "./observer";
import { IEventBase } from "./Decorators/events";
export * from "./Decorators/index.aliapp";
declare class ViewBase<IData extends Record<string, any>> extends PageBase<IData> {
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { ComponentBase, AliMiniComponent as MiniComponent, WeappMiniComponent, AliMiniComponent, IComponentData, observer, method, pageLifetime, lifetimes, IMiniEvent, IMiniComponentOptions, ViewBase as PageBase, ViewBase as AliappPageBase, WeappPageBase, };
//# sourceMappingURL=index.aliapp.d.ts.map