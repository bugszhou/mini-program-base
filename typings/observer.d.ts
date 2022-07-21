export declare enum OBSERVER_TYPE {
    DATA = "data",
    PROPS = "props",
    ALL = "all",
    UNKNOWN = "unknown"
}
export interface ObserverParams {
    /**
     * 组件的上下文
     */
    context: any;
    /**
     * 监听函数的数组
     */
    subscribeMap: Record<string, any[]>;
    /**
     * 是否强制触发所有监听
     */
    forceEmit?: boolean;
    /**
     * 上一个Props的状态
     */
    prevProps?: any;
    /**
     * 上一个Data的状态
     */
    prevData?: any;
}
/**
 * 监听Props的变化, for 监听函数
 * 参考微信文档进行实现：
 * https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
 * 为明确触发的字段来自props还是data，监听函数的入参除了依顺序提供监听字段的当前值，也会依顺序提供监听字段可能的参考来源
 * 具体类型可参考OBSERVER_TYPE
 */
export default function observer(key?: string): (target: any, property: string, descriptor: PropertyDescriptor) => void;
