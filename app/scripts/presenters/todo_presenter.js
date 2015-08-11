var riot = require('riot');

var todo_store = require('../stores/todo_store.js');

require('../components/todo_app.tag');

require('../components/todo_edit.tag');

var app_tag = null;

var unmount = function() {
  if (app_tag) {
    return app_tag.unmount();
  }
};

var mount = function(tag, opts) {
  var app_container = document.createElement("div");
  app_container.id = 'app-container';
  document.getElementById('container').appendChild(app_container);
  return riot.mount('#app-container', tag, opts)[0];
};

module.exports = {
  list: function() {
    unmount();
    return app_tag = mount('todo-app', {
      title: "Todo App",
      store: todo_store
    });
  },
  edit: function(id) {
    unmount();
    return app_tag = mount('todo-edit', {
      taskId: id,
      store: todo_store
    });
  }
};
