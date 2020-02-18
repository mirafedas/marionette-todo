import Marionette from 'backbone.marionette';
import FormTemplate from '../templates/form.hbs';

export default class FormView extends Marionette.LayoutView
{
  constructor(options)
  {
    options.template =  FormTemplate;
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