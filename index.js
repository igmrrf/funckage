const funckage = {};

/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
export const console = (data) => console.log(data);

/**
 * @description Redux Logger
 * @param {*} store
 * @returns
 */
export const redux_logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(
    '%c prev state',
    'background: #222; color: #bada55',
    store.getState()
  );
  console.info('%c dispatching', 'background: #222; color: #ba55da', action);
  let result = next(action);
  console.log(
    '%c next state',
    'background: #222; color: #55bada',
    store.getState()
  );
  console.groupEnd();
  return result;
};

/**
 * Arrays
 */

/**
 * @description Update an item in an array of items
 * @param {*} listOfItems
 * @param {*} itemToUpdate
 * @returns
 */
export const updateItem = (listOfItems, itemToUpdate) => {
  const item = listOfItems.find((item) => item.id === itemToUpdate.id);
  listOfItems[listOfItems.indexOf(item)] = itemToUpdate;
  return listOfItems;
};

/**
 * @description Add an item to a list of items
 * @param {[*]} listOfItems
 * @param {*} itemToAdd
 * @returns
 */
export const addItem = (listOfItems, itemToAdd) => {
  listOfItems.push(itemToAdd);
  return listOfItems;
};

/**
 * @description Delete an item from a list of items
 * @param {*} listOfItems
 * @param {*} itemToDelete
 * @returns
 */
export const deleteItem = (listOfItems, itemToDelete) => {
  return listOfItems.filter((item) => item.id !== itemToDelete.id);
};

const array = { deleteItem, updateItem, addItem };

funckage.logger = redux_logger;
funckage.console = console;
funckage.array = array;

module.exports = funckage;
