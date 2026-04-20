export const decorator = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // setting the parameter to lowercase
    const [arg] = args;
    const argLowered = arg.toLowerCase();
    // Logging Details
    console.log(`Calling method ${propertyKey} with arguments ${args}`);
    const result = originalMethod.apply(this, [argLowered]);
    console.log(`Method ${propertyKey} return: ${result}`);
    return result;
  };
  return descriptor;
};

const compose =
  (...functions: any[]) =>
    (str: object | number | string | any) => {
      functions.reduceRight((int, func) => {
        int = func(int);
      }, str);
    };

export const composeFunctions = compose();

type BuildArrayOf<
  Quantifier extends 'exactly' | 'at least',
  Count extends number,
  Type,
  Current extends Type[]
> = Current['length'] extends Count
  ? Quantifier extends 'exactly'
  ? [...Current]
  : [...Current, ...Type[]]
  : BuildArrayOf<Quantifier, Count, Type, [...Current, Type]>;

/** An array of a given type comprised of either exactly or at least a certain count of that type. */
type ArrayOf<
  Quantifier extends 'exactly' | 'at least',
  Count extends number,
  Type
> = BuildArrayOf<Quantifier, Count, Type, []>;

/**
 *
 * @param {object} data
 * @param {string} name
 * @param {string} type
 * @returns
 */
export const validateType = (
  data: object | any,
  name: string | number,
  type: string
) => {
  const isNamePresent = name in data;
  if (!isNamePresent) {
    return { message: `${name} is required`, valid: false };
  }
  const value = data[name];
  if (typeof value !== type) {
    return { message: `${name} must be a number`, valid: false };
  }
  return { message: 'success', valid: true };
};
