import Backbone from 'backbone';

export default class TodoModel extends Backbone.Model
{
  defaults()
  {
    return {
      assignee: '',
      text: ''
    };
  }

  validate(attrs)
  {
    const errors = {};
    let hasError = false;
    if (!attrs.assignee)
    {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }
    if (!attrs.text)
    {
      errors.text = 'text must be set';
      hasError = true;
    }
    if (hasError) return errors;
  }
}