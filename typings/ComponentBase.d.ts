import { MiniComponent } from "mipp";
export default class ComponentBase<IData = any> extends MiniComponent<IData> {
    aom<IComponent = MiniComponent<any>>(): IComponent;
}
export { MiniComponent };
