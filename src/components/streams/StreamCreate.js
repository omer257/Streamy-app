import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {createStream} from '../../actions';
import {connect} from 'react-redux';

class StreamCreate extends React.Component {
  renderErr({touched,error}){
    if(touched && error){
      return( <div className="ui error message">
        <div className="header">{error}</div>
      </div>)
    }
  }
  renderInput = (formProps)=>{ 
    return (
      <div className="field">
        <label>{formProps.input.name}</label>
        <input {...formProps.input} />
        {this.renderErr(formProps.meta)}
      </div>
    )
  }
  onSubmit = (formProps)=>{
    console.log(this.props)
    this.props.createStream(formProps)
  }
  render() {

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formvalues => {
  const errors = {};
  if (!formvalues.title) {
    errors.title = "This field is manadatory";
  }
  if (!formvalues.description) {
    errors.description = "This field is manadatory";
  } 
  return errors;  
}

const connectedForm = reduxForm({
  form: 'StreamCreate',
  validate
})(StreamCreate)
export default connect(null,{createStream})(connectedForm);
