import _ from 'lodash'
import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom'
import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';



const StreamEdit = (props) => {
    const {id} = useParams();
    console.log(props.streams);
    useEffect(()=>{
        props.fetchStream(id);
    }, []);

    const onSubmit = (formValues)=>{
        console.log(formValues);
        console.log(formValues);
        props.editStream(id,formValues);
    } 
    const stream = props.streams[id]


    return (
        <div>
            <h1>{}</h1>
            <h3>Edit a Stream</h3>
            <StreamForm 
            initialValues={Object.keys(props.streams).length>0&&_.pick(stream,'title','description') }
            onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>{
    return {
        streams : state.streams
    }
}

export default connect(mapStateToProps, {
    fetchStream, editStream
})(withRouter(StreamEdit));
