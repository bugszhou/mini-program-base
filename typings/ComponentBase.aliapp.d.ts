import { ComponentBase as MiniComponentBase } from "mipp";
import { MiniComponent } from "mipp-ali";
export default class ComponentBase<IData = any> extends MiniComponentBase<IData> {
    aom<IComponent = MiniComponent<any>>(): IComponent;
}
export { MiniComponent };
