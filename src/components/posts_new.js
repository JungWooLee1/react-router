import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  renderField(field) {
    const { meta : {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
        <div className={className} >
          <label>{field.label}</label>
          <input className="form-control" type="text" {...field.input}/>
            <div className="text-help">
                {touched ? error :''}
            </div>
        </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
              label="Title For Post"
              name="title"
              component={this.renderField}>
          </Field>

          <Field
              label="Categories"
              name="categories"
              component={this.renderField}>
          </Field>

          <Field
              label="Post Content"
              name="content"
              component={this.renderField}>
          </Field>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    )
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf' content: 'asd'}
  const errors ={};

  // Validate the inputs from 'values' => values로부터 유효성을 검사한다.

  if ((values.title + "").length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux from assumes form is invaild
  return errors;
}

// 구성 옵션을 적어준다.
// form의 이름을 설정한다.

export default reduxForm({
  validate,
  form : 'PostsNewForm',

})(PostsNew);