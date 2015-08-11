var assign = require('object-assign/index');

var Dispatcher = require('flux-riot').Dispatcher;

var ActionTypes = require('../constants/app_constants.js').ActionTypes;

var flux_riot = require('flux-riot');

var gid = 1;

var _tasks = [
  {
    id: gid++,
    title: 'Custom tags',
    done: true
  }, {
    id: gid++,
    title: 'Minimal syntax',
    done: true
  }, {
    id: gid++,
    title: 'Virtual DOM',
    done: true
  }, {
    id: gid++,
    title: 'Full stack'
  }, {
    id: gid++,
    title: 'IE8'
  }
];

var addTask = function(title, done) {
  if (done == null) {
    done = false;
  }
  return _tasks.push({
    id: gid++,
    title: title,
    done: done
  });
};

var getTasks = function() {
  return _tasks;
};

var TodoStore = assign(new flux_riot.BaseStore(), {
  getAll: function() {
    return getTasks();
  },
  getTask: function(id) {
    var i, len, ref, task;
    ref = TodoStore.getAll();
    for (i = 0, len = ref.length; i < len; i++) {
      task = ref[i];
      if (task.id === parseInt(id)) {
        return task;
      }
    }
  },
  dispatchToken: Dispatcher.register(function(payload) {
    var task;
    var action = payload.action;
    switch (action.type) {
      case ActionTypes.TASK_SAVE:
        var data = action.data;
        if (data.id) {
          task = TodoStore.getTask(data.id);
          task.title = data.title;
          return TodoStore.emitChange();
        } else if (data.title) {
          addTask(data.title);
          return TodoStore.emitChange();
        }
        break;
      case ActionTypes.TASK_TOGGLE:
        task = action.data;
        return task.done = !task.done;
      case ActionTypes.TASK_REMOVE:
        task = action.data;
        var index = TodoStore.getAll().indexOf(task);
        TodoStore.getAll().splice(index, 1);
        return TodoStore.emitChange();
    }
  })
});

module.exports = TodoStore;
