import React from 'react'
import {Field, reduxForm} from 'redux-form';

const StreamCreate = (props) => {

    console.log(props);

    const renderError=({error,touched})=> {
        if (touched&&error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    const renderInput = ({input, label, meta})=>{
        console.log(meta);
        const className=`field ${meta.error && meta.touched?'error':''}`
        return (
        <div className={className}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
        </div>
        )
    }
    const onSubmit = (formValues)=>{
        console.log(formValues);
        
    }

    return (
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}> 
            <Field label="Enter Title" component={renderInput} name="title"/>
            <Field name="description" label="Enter Description" component={renderInput}/>
            <button className="ui botton primary">Submit</button>
        </form>
    )
}

const validate = (formValues)=>{
    const errors={};
    if (!formValues.title) {
        //only ran if user didnt entered a title
        errors.title='You must enter a title'
    }
    if (!formValues.title) {
        errors.description ='You must enter a description'
    }
    return errors;
}

export default reduxForm({
    form : 'streamCreate',
    validate,

})(StreamCreate)
