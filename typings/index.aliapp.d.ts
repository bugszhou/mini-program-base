import { MiniComponent as WeappMiniComponent, IMiniComponentOptions, PageBase as WeappPageBase } from "mipp";
import { MiniComponent as AliMiniComponent, method, IComponentData, pageLifetime, lifetimes, lifetime, extendLifetime, IMiniEvent, MiniPage as PageBase } from "mipp-ali";
import ComponentBase from "./ComponentBase.aliapp";
import observer from "./observer";
import { IEventBase } from "./Decorators/events";
export * from "./Decorators/index.aliapp";
declare class ViewBase<IData extends Record<string, any>, IOptions = any> extends PageBase<IData> {
    viewStatus: "load" | "show" | "ready";
    protected myComponents: any[];
    protected viewOptions: IOptions;
    static before(): Partial<{
        onLoad: () => void;
        onShow: () => void;
        onReady: () => void;
    }>;
    isComponent(): boolean;
    isPage(): boolean;
    getComponents(): any[];
    getViewOptions(): IOptions;
    beforeOnLoad(...opts: any[]): void;
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    isReady(): boolean;
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { ComponentBase, AliMiniComponent as MiniComponent, WeappMiniComponent, AliMiniComponent, IComponentData, observer, method, pageLifetime, lifetimes, lifetime, IMiniEvent, IMiniComponentOptions, ViewBase as PageBase, ViewBase as AliappPageBase, WeappPageBase, extendLifetime, };
//# sourceMappingURL=index.aliapp.d.ts.map