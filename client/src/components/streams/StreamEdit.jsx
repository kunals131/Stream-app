import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom'
import { fetchStream } from '../../actions';


const StreamEdit = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        props.fetchStream(id);
    }, []);

    
    const stream = props.streams[id]


    return (
        <div>
            stream edit
           {stream?stream.title:'LOADING...'}
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>{
    return {
        streams : state.streams
    }
}

export default connect(mapStateToProps, {
    fetchStream
})(withRouter(StreamEdit));
