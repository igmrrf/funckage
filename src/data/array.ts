/**
 * Arrays
 */

/**
 * @description Update an item in an array of items
 * @param {*} listOfItems
 * @param {*} itemToUpdate
 * @returns
 */
export const updateItem = (listOfItems: any[], itemToUpdate: any) => {
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
export const addItem = (listOfItems: any[], itemToAdd: any) => {
  listOfItems.push(itemToAdd);
  return listOfItems;
};

/**
 * @description Delete an item from a list of items
 * @param {*} listOfItems
 * @param {*} itemToDelete
 * @returns
 */
export const deleteItem = (listOfItems: any[], itemToDelete: any) => {
  return listOfItems.filter((item) => item.id !== itemToDelete.id);
};

/**
 * @description Finds an item in an array or throws an error with custom message
 * @param array
 * @param predicate
 * @param errMsg
 * @returns
 */
export const findOrThrow = <T>(
  array: Array<T>,
  predicate: (t: T) => boolean,
  errMsg: string
): T => {
  const t = array.find(predicate);
  if (!t) throw new Error(errMsg);
  return t;
};
