const { addItem, deleteItem, updateItem } = require('./data/array');
const { redux_logger } = require('./helpers');
const { sleep, log } = require('./simple');

const funckage = {};

const array = { deleteItem, updateItem, addItem };

funckage.logger = redux_logger;
funckage.log = log;
funckage.array = array;

module.exports = funckage;
