export const decorator = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argLowered = arg.toLowerCase();
    originalMethod.apply(this, [argLowered]);
  };
};

const compose =
  (...functions: any[]) =>
  (str: object | number | string | any) => {
    functions.reduceRight((int, func) => {
      int = func(int);
    }, str);
  };

export const composeFunctions = compose();
