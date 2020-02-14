import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars';

class Todo extends Marionette.LayoutView
{
  constructor(options)
  {
    options.template = Handlebars.compile('{{this.text}} - {{this.assignee}}<button id="btn-remove">Remove</button>');
    options.tagName = 'li';

    super(options);
  }

  triggers()
  {
    return {
      submit: 'remove:todo:item'
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

export default class ListView extends Marionette.CollectionView
{
  constructor(options)
  {
    options.tagName = 'ol';
    options.childView = Todo;

    super(options);
  }
}