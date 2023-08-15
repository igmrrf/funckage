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

declare function needsExactlyTwo(strings: ArrayOf<'exactly', 2, string>): void;

needsExactlyTwo(['onlyOne']); // error
needsExactlyTwo(['one', 'two']); // valid
needsExactlyTwo(['one', 'two', 'three']); // error

declare function needsAtLeastThree(
  strings: ArrayOf<'at least', 3, string>
): void;

needsAtLeastThree(['onlyOne']); // error
needsAtLeastThree(['one', 'two']); // error
needsAtLeastThree(['one', 'two', 'three']); // valid
needsAtLeastThree(['one', 'two', 'three', 'four']); // valid
