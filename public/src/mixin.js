export default function mixin (behavior, sharedBehavior = {}) {
  const instanceKeys = Reflect.ownKeys(behavior);
  const sharedKeys = Reflect.ownKeys(sharedBehavior);
  const typeTag = Symbol('isa');

  function _mixin (clazz) {
    for (let property of instanceKeys) {
      Object.defineProperty(
        clazz,
        property,
        {
          value: behavior[property]
        }
      );
    }
    Object.defineProperty(
      clazz,
      typeTag,
      {
        value: true
      }
    );
    return clazz;
  }
  for(let property of sharedKeys) {
    Object.defineProperty(
      _mixin,
      property,
      {
        value: sharedBehavior[property],
        enumerable: sharedBehavior.propertyIsEnumerable(property)
      }
    );
  }
  Object.defineProperty(
    _mixin,
    Symbol.hasInstance,
    {
      value: (i) => !!i[typeTag]
    }
  );
  return _mixin;
}