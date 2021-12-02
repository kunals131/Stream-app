import React, {useEffect, useState } from 'react'
import { SignInWithGoogle, SignOut } from '../firebase/firebase.config';
import { auth } from '../firebase/firebase.config';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


const GoogleAuth = ({signIn, signOut, isSignedIn}) => {
   
    auth.onAuthStateChanged(()=>{
        const user = auth.currentUser;
        if (user) {
            signIn(auth.currentUser.uid);
        }
        else {
            signOut();
        }
    })

    if (isSignedIn===null) {
        return null;
    }
   
        if (!isSignedIn) {
            return (
                <button className='ui red google button' onClick={SignInWithGoogle}>
                    <i className="google icon"/>  Sign In With Google
                </button>
            )
        }
        return (
            <button className="ui red google button" onClick={SignOut}>
                <i className="google icon"/>
                    Sign Out
                
            </button>
        )
    }

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        isSignedIn : state.authStatus.isSignedIn
    }
}

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth)
