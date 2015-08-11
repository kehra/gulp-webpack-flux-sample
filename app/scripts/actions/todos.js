var Dispatcher = require('flux-riot').Dispatcher;

var ActionTypes = require('../constants/app_constants.js').ActionTypes;

var dispatch = function(type, data) {
  return Dispatcher.handleViewAction({
    type: type,
    data: data
  });
};

module.exports = {
  saveTask: function(task) {
    return dispatch(ActionTypes.TASK_SAVE, task);
  },
  removeTask: function(task) {
    return dispatch(ActionTypes.TASK_REMOVE, task);
  },
  toggleTask: function(task) {
    return dispatch(ActionTypes.TASK_TOGGLE, task);
  },
  clearTasks: function() {
    return dispatch(ActionTypes.TASK_CLEAR);
  }
};
