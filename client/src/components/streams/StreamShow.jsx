import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    const id = props.match.params.id;
    useEffect(()=>{
        props.fetchStream(id)  
    },[])
    if (!props.stream) {
        return <div>Loading...</div>
    }
    const {title,description} = props.stream
    return (
        <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}

export default withRouter (connect(mapStateToProps, {fetchStream})(StreamShow))
