export interface IEventBase {
  getListenViews<IView = any>(): IView[];
  setView<IView = any>(): IView[];
  /**
   * 通过namespace触发事件
   */
  dispatchByNamespace<IData = any>(data?: IData): void;
  /**
   * 触发全部事件
   */
  dispatch<IData = any>(data?: IData, dispatchView?: any): void;
  /**
   * 向所在页面的对象发送事件
   */
  dispatchToPage<IData = any>(data?: IData, dispatchView?: any): void;
}
