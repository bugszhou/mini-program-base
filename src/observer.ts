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
      const publisher = target.didUpdate;
      target.didUpdate = async function newDidUpdate(
        prevProps: any,
        prevData: any,
      ) {
        try {
          const subscribeMap = target._propsSubscribeMap || {};
          Object.keys(subscribeMap)
            .filter((key) => !isEqual(prevProps?.[key], this?.props?.[key]))
            .forEach((key) => {
              subscribeMap?.[key]?.forEach(async (fn: any) => {
                if (typeof fn === "function") {
                  await fn.call(this, this?.props?.[key]);
                }
              });
            });
          if (typeof publisher === "function") {
            const result = await publisher.call(this, prevProps, prevData);
            return result;
          }
        } catch (e) {
          throw e;
        } finally {
        }
      };
    }
    if (!target._propsSubscribeMap[subscribeKey]) {
      target._propsSubscribeMap[subscribeKey] = [];
    }
    target._propsSubscribeMap[subscribeKey].push(fn);
  };
}
