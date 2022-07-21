import get from "lodash.get";
import isEqual from "lodash.isequal";

export enum OBSERVER_TYPE {
  DATA = "data",
  PROPS = "props",
  ALL = "all",
  UNKNOWN = "unknown",
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

interface ObserverItem {
  value: any;
  changed: boolean;
  type: OBSERVER_TYPE;
}

/**
 * 监听Props的变化, for 监听函数
 * 参考微信文档进行实现：
 * https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
 * 为明确触发的字段来自props还是data，监听函数的入参除了依顺序提供监听字段的当前值，也会依顺序提供监听字段可能的参考来源
 * 具体类型可参考OBSERVER_TYPE
 */
export default function observer(key?: string) {
  return function closureFn(
    target: any,
    property: string,
    descriptor: PropertyDescriptor,
  ) {
    const fn = descriptor.value;
    const subscribeKey = key || property;

    if (!target._propsSubscribeMap) {
      target._propsSubscribeMap = {};
      // didMount 监听
      const mountPublisher = target.didMount;
      target.didMount = async function newDidMount(...mountArgs: any[]) {
        try {
          const subscribeMap = target._propsSubscribeMap || {};
          checkSubscribe({
            context: this,
            subscribeMap,
            forceEmit: true,
          });
          if (typeof mountPublisher === "function") {
            const result = await mountPublisher.call(this, ...mountArgs);
            return result;
          }
        } catch (e) {
          throw e;
        }
      };
      // didUpdate 监听
      const updatePublisher = target.didUpdate;
      target.didUpdate = async function newDidUpdate(
        prevProps: any,
        prevData: any,
      ) {
        try {
          const subscribeMap = target._propsSubscribeMap || {};
          checkSubscribe({
            context: this,
            subscribeMap,
            forceEmit: false,
            prevProps,
            prevData,
          });
          if (typeof updatePublisher === "function") {
            const result = await updatePublisher.call(
              this,
              prevProps,
              prevData,
            );
            return result;
          }
        } catch (e) {
          throw e;
        }
      };
    }
    if (!target._propsSubscribeMap[subscribeKey]) {
      target._propsSubscribeMap[subscribeKey] = [];
    }
    target._propsSubscribeMap[subscribeKey].push(fn);
  };
}

function checkSubscribe({
  context,
  subscribeMap,
  forceEmit = false,
  prevProps = {},
  prevData = {},
}: ObserverParams) {
  Object.keys(subscribeMap).forEach((mapKey) => {
    const observerKeys = mapKey
      ?.split(",")
      .map((key) => key?.replaceAll(".**", "").trim());
    const fnParams = observerKeys?.map((key): ObserverItem => {
      if (!key) {
        return {
          value: undefined,
          changed: false,
          type: OBSERVER_TYPE.UNKNOWN,
        };
      }
      // 通配符触发所有监听
      if (key === "**") {
        return {
          value: undefined,
          changed: true,
          type: OBSERVER_TYPE.ALL,
        };
      }

      const prevPropsValue = get(prevProps, key);
      const propsValue = get(context?.props, key);
      const prevDataValue = get(prevData, key);
      const dataValue = get(context?.data, key);

      // 优先检查props变化
      if (!isEqual(prevPropsValue, propsValue)) {
        return {
          value: propsValue,
          changed: true,
          type: OBSERVER_TYPE.PROPS,
        };
      }

      // 检查data变化
      if (!isEqual(prevDataValue, dataValue)) {
        return {
          value: dataValue,
          changed: true,
          type: OBSERVER_TYPE.DATA,
        };
      }

      // 处理不变化时的数据讨论
      let type = OBSERVER_TYPE.UNKNOWN;
      let value = undefined;
      if (typeof propsValue !== "undefined") {
        type = OBSERVER_TYPE.PROPS;
        value = propsValue;
      } else if (typeof dataValue !== "undefined") {
        type = OBSERVER_TYPE.DATA;
        value = dataValue;
      }

      return {
        value,
        changed: false,
        type,
      };
    });
    if (!forceEmit && fnParams.every((params) => !params?.changed)) return;
    subscribeMap[mapKey]?.forEach((fn) => {
      fn?.call?.(
        context,
        ...fnParams.map((param) => param?.value),
        ...fnParams.map((param) => param?.type),
      );
    });
  });
}
