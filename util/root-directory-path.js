/* ========== Node.js Core Module Imports ========== */
const path = require('path');

// path for root directory
const rootPath = path.dirname(require.main.filename);

/* ========== Exporting the Root Path ========== */
module.exports = rootPath;
