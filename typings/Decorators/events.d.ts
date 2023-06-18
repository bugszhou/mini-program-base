export interface IEventBase {
    getListenViews<IView = any>(): IView[];
    setView<IView = any>(): IView[];
    /**
     * 页面和页面间触发事件
     */
    dispatchInViews(): void;
    /**
     * 触发全部事件
     */
    dispatch(): void;
}
//# sourceMappingURL=events.d.ts.map