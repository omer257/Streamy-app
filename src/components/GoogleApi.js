import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleApi extends React.Component {
  // state = { isSignIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '507712690853-g14hriitavnafh7kvg812isov8gl6n1m.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }
  onSigninClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  onAuthChange = (isSignIn) => {  
    if(isSignIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
      this.props.signOut(null);
    } 
  }
  
  getSigninOut() {
    if (this.props.auth.isSignIn === null) {
      return null;
    }
    else if (this.props.auth.isSignIn === false) {
      return (
        <button onClick={this.onSigninClick} className="ui blue google button ">
          <i className="google icon" style={{ width: "auto" }}>    Sign in</i>
          </button>
      )
    }
    else if (this.props.auth.isSignIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button ">
          <i className="google icon" style={{ width: "auto" }}>    Sign out</i>
        </button>
      )
    }
  }
  render() {
    return this.getSigninOut()
  }
} 

const MapPropsToRedux = (state)=>{ 
  return state;

}
export default connect(MapPropsToRedux,{signIn,signOut})(GoogleApi);
