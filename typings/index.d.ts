import { IComponentData, MiniComponent as WeappMiniComponent, method, pageLifetime, lifetimes, lifetime, observer as weappObserver, IMiniEvent, IMiniComponentOptions, PageBase, extendLifetime } from "mipp";
import { MiniComponent as AliMiniComponent, PageBase as AliappPageBase } from "mipp-ali";
import ComponentBase from "./ComponentBase";
import { IEventBase } from "./Decorators/events";
export * from "./Decorators/index";
declare function observer(key?: string): typeof weappObserver;
declare class ViewBase<IData extends Record<string, any>> extends PageBase<IData> {
    viewStatus: "load" | "show" | "ready";
    isComponent(): boolean;
    isPage(): boolean;
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    isReady(): boolean;
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { ComponentBase, WeappMiniComponent as MiniComponent, WeappMiniComponent, AliMiniComponent, IComponentData, observer, method, pageLifetime, lifetimes, lifetime, extendLifetime, IMiniEvent, IMiniComponentOptions, ViewBase as PageBase, ViewBase as WeappPageBase, AliappPageBase, };
//# sourceMappingURL=index.d.ts.map