const { addItem, deleteItem, updateItem } = require('./data/array');
const { redux_logger } = require('./helpers');
const { sleep, log } = require('./simple');

const funckage = {};

function HandleDisplayName(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argLowered = arg.toLowerCase();
    originalMethod.apply(this, [argLowered]);
  };
}

const compose =
  (...functions) =>
  (str) => {
    functions.reduceRight((int, func) => (int = func(int)), str);
  };

const composeFunctions = compose();

const array = { deleteItem, updateItem, addItem };

funckage.logger = redux_logger;
funckage.log = log;
funckage.array = array;

module.exports = funckage;
