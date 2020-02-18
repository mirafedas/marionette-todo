import Marionette from 'backbone.marionette';
import ListTemplate from '../templates/list.hbs';

class Todo extends Marionette.LayoutView
{
  constructor(options)
  {
    options.template = ListTemplate;
    options.tagName = 'li';
    
    super(options);
  }

  modelEvents()
  {
    return {
      change: 'render',
    };
  }

  events() {
    return {
      'click button': 'itemSelect',
      'click span': 'itemEdit',
      'blur input': 'save'
    }
  }

  ui()
  {
    return {
      assignee: '#id_assignee',
      text: '#id_text',
      isEditMode: false,
      prevText: ''
    };
  }

  itemSelect() {
    this.model.destroy();
  }

  save(e) {
    const newText = e.target.value;
    const newTodoText = newText.substring(0, newText.indexOf("-") - 1);
    const newAsignee = newText.substring(newText.indexOf("-") + 2);
    
    this.model.set('isEditMode', false);
    this.model.set('assignee', newAsignee);
    this.model.set('text', newTodoText);
  }

  itemEdit(e) {
    const selectedItem = e.currentTarget;
    const prevText = selectedItem.innerText;
    
    this.model.set('prevText', prevText);
    this.model.set('isEditMode', true);
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