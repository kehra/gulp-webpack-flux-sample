var keymirror = require('keyMirror');

module.exports = {
  ActionTypes: keymirror({
    TASK_SAVE: null,
    TASK_REMOVE: null,
    TASK_TOGGLE: null,
    TASK_CLEAR: null
  })
};
