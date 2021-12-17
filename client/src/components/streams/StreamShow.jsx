import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as flv from 'flv.js'
import { fetchStream } from '../../actions'
import { useState } from 'react'

const StreamShow = (props) => {
    const videoRef = useRef();
    const id = props.match.params.id;
   
    const flvPlayer = flv.createPlayer({
        type : 'flv',
        url : `http://localhost:8000/live/${id}.flv`,
    })
    const buildplayer = ()=> {
        if (!props.stream) {
            return;
        }
        flvPlayer.attachMediaElement(videoRef.current);
        flvPlayer.load(); 
    }

    useEffect(()=>{
        props.fetchStream(id) 
        buildplayer();

        return ()=>{
            console.log('I was unmounted')
            flvPlayer.destroy();
        }

    },[])

    useEffect(()=>{
        buildplayer();
    }, [props.stream])

    if (!props.stream) {
        return <div>Loading...</div>
    }

    const {title,description} = props.stream
    return (
        <div>
            <video ref={videoRef} style={{width : '100%'}} controls/>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}

export default withRouter (connect(mapStateToProps, {fetchStream})(StreamShow))
