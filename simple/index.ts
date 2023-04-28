/**
 *
 * @param {Number} milliseconds
 * @returns
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * @description Console Log
 * @param {*} data
 * @returns
 */
const log = (data) =>
  console.log('%c Funckage:', 'background: #ff0022; color: #bada55\n', data);

module.exports = { log, sleep };
