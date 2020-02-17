import Marionette from 'backbone.marionette';

import FormView from './form';
import ListView from './list';
import LayoutTemplate from '../templates/layout.html';

export default class TodoView extends Marionette.LayoutView
{
  constructor(options)
  {
    options.template = LayoutTemplate;
    options.el = '#app-hook';
    options.regions = {
      form: '.form',
      list: '.list'
    };

    super(options);
  }

  onRender()
  {
    const formView = new FormView({model: this.model});
    const listView = new ListView({collection: this.collection});
    this.showChildView('form', formView);
    this.showChildView('list', listView);
  }

  collectionEvents()
  {
    return {
      add: 'itemAdded'
    };
  }

  onChildviewAddTodoItem(child)
  {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});

    if (this.model.isValid()) {
      const items = this.model.pick('assignee', 'text');
      this.collection.add(items);
    }
  }

  itemAdded()
  {
    this.model.set({
      assignee: '',
      text: ''
    });
  }
}