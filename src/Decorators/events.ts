export interface IEventBase {
  getListenViews<IView = any>(): IView[];
  setView<IView = any>(): IView[];
  /**
   * 页面和页面间触发事件
   */
  dispatchInViews<IData = any>(data?: IData): void;
  /**
   * 触发全部事件
   */
  dispatch<IData = any>(data?: IData, dispatchView?: any): void;
}