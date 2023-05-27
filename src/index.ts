import { addItem, deleteItem, updateItem } from './data/array';
import { getWithExpiry, setWithExpiry } from './store/index';

const array = { deleteItem, updateItem, addItem };
const store = { getWithExpiry, setWithExpiry };

const funckage = { array, store };

export default funckage;
