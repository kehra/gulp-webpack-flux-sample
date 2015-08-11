var riot = require('riot');

var BaseRouter = require('flux-riot').BaseRouter;

var todo_presenter = require('../presenters/todo_presenter.js');

BaseRouter.routes(todo_presenter.list, 'todos/add', todo_presenter.edit, 'todos/edit/:id', todo_presenter.edit);

module.exports = {
  start: BaseRouter.start
};
