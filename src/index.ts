import { addItem, deleteItem, updateItem } from "./data/array";
import { getWithExpiry, setWithExpiry } from "./data/browser";
import { addComma } from "./data/numbers";
import { capitalize, capitalizeEveryWord } from "./data/string";
import { handleKeyUp } from "./react";

export const arrays = { deleteItem, updateItem, addItem };
export const strings = { capitalizeEveryWord, capitalize };
export const browser = { getWithExpiry, setWithExpiry };
export const events = { handleKeyUp };
export const dates = {};
export const objects = {};
export const numbers = { addComma };
