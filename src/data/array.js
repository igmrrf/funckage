"use strict";
/**
 * Arrays
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.addItem = exports.updateItem = void 0;
/**
 * @description Update an item in an array of items
 * @param {*} listOfItems
 * @param {*} itemToUpdate
 * @returns
 */
const updateItem = (listOfItems, itemToUpdate) => {
    const item = listOfItems.find((item) => item.id === itemToUpdate.id);
    listOfItems[listOfItems.indexOf(item)] = itemToUpdate;
    return listOfItems;
};
exports.updateItem = updateItem;
/**
 * @description Add an item to a list of items
 * @param {[*]} listOfItems
 * @param {*} itemToAdd
 * @returns
 */
const addItem = (listOfItems, itemToAdd) => {
    listOfItems.push(itemToAdd);
    return listOfItems;
};
exports.addItem = addItem;
/**
 * @description Delete an item from a list of items
 * @param {*} listOfItems
 * @param {*} itemToDelete
 * @returns
 */
const deleteItem = (listOfItems, itemToDelete) => {
    return listOfItems.filter((item) => item.id !== itemToDelete.id);
};
exports.deleteItem = deleteItem;
