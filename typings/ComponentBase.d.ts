import { MiniComponent, ComponentBase as MiniComponentBase } from "mipp";
import { IEventBase } from "./Decorators/events";
export default class ComponentBase<IData = any> extends MiniComponentBase<IData> {
    aom<IComponent = MiniComponent<any>>(): IComponent;
    getEvents<IEvent = IEventBase>(): IEvent;
}
export { MiniComponent };
//# sourceMappingURL=ComponentBase.d.ts.map