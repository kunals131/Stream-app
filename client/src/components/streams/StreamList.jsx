import React from 'react'
import { fetchStreams } from '../../actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
const StreamList = (props) => {

    useEffect(()=>{
        props.fetchStreams();
    },[])
    const renderList = ()=>{
        return props.streams.map(stream=>{
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderList()}
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {streams : Object.values(state.streams)};
    //Object.values turns all object values into an array
}
export default connect(mapStateToProps, {fetchStreams})(StreamList);
