import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars';

export default class FormView extends Marionette.LayoutView
{
  constructor(options)
  {
    options.template =  Handlebars.compile('<div><label for="id_text">Todo Text</label><input type="text" name="text" id="id_text" value="{{this.text}}" /></div><div><label for="id_assignee">Assign to</label><input type="text" name="assignee" id="id_assignee" value="{{this.assignee}}"/></div><button id="btn-add">Add Item</button>');
    options.tagName = 'form';

    super(options);
  }

  triggers()
  {
    return {
      submit: 'add:todo:item'
    };
  }

  modelEvents()
  {
    return {
      change: 'render'
    };
  }

  ui()
  {
    return {
      assignee: '#id_assignee',
      text: '#id_text'
    };
  }
}