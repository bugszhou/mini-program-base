import { MiniComponent, ComponentBase as MiniComponentBase } from "mipp";
import { IEventBase } from "./Decorators/events";
export default class ComponentBase<IData = any> extends MiniComponentBase<IData> {
    viewStatus: "load" | "ready";
    protected pageViewIns: any;
    static before(): Partial<{
        created: () => void;
        ready: () => void;
    }>;
    aom<IComponent = MiniComponent<any>>(): IComponent;
    isComponent(): boolean;
    isPage(): boolean;
    getPageViewIns(): any;
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    isReady(): boolean;
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { MiniComponent };
//# sourceMappingURL=ComponentBase.d.ts.map