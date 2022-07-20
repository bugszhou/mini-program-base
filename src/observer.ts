import isEqual from "lodash.isequal";

// 监听Props的变化, for 监听函数
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
          Object.keys(subscribeMap).forEach((mapKey) => {
            const observerKeys = mapKey?.split(",").map((key) => key.trim());
            const fnParams = observerKeys.map((key) => ({
              value: this.props?.[key] ?? this.data?.[key],
              changed: false,
            }));
            subscribeMap[mapKey]?.forEach((fn: any) => {
              if (typeof fn === "function") {
                fn.call(this, ...fnParams.map((param) => param.value));
              }
            });
          });
          if (typeof mountPublisher === "function") {
            const result = await mountPublisher.call(this, ...mountArgs);
            return result;
          }
        } catch (e) {
          console.error(e);
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
          Object.keys(subscribeMap).forEach((mapKey) => {
            const observerKeys = mapKey?.split(",").map((key) => key.trim());
            const fnParams = observerKeys.map((key) => ({
              value: this.props?.[key] ?? this.data?.[key],
              changed:
                !isEqual(prevProps?.[key], this.props?.[key]) ||
                !isEqual(prevData?.[key], this.data?.[key]),
            }));
            if (fnParams.every((params) => !params.changed)) return;
            subscribeMap[mapKey]?.forEach((fn: any) => {
              if (typeof fn === "function") {
                fn.call(this, ...fnParams.map((param) => param.value));
              }
            });
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
          console.error(e);
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
