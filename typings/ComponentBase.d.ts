import { MiniComponent, ComponentBase as MiniComponentBase } from "mipp";
import { IEventBase } from "./Decorators/events";
export default class ComponentBase<IData = any> extends MiniComponentBase<IData> {
    viewStatus: "load" | "show" | "ready";
    aom<IComponent = MiniComponent<any>>(): IComponent;
    created(...opts: any): void;
    show(...opts: any): void;
    ready(...opts: any): void;
    /**
     * 视图是否准备完成
     * @returns boolean
     */
    isReady(): boolean;
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { MiniComponent };
//# sourceMappingURL=ComponentBase.d.ts.map