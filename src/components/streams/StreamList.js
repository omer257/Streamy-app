import React from 'react';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  enableEdit(stream) {
    if (stream.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <div className="ui button red">Delete</div>
          <div className="ui button blue">Edit</div>
        </div>
      )
    }
  }
  renderList() {
    return this.props.streams.map((item) => {
      return (
        <div key={item.id} className="item">
          {this.enableEdit(item)}
          <i className="large video middle aligned icon"></i>
          {/* <img className="ui avatar image" src="/images/avatar2/small/lena.png" /> */}
          <div className="content">
            {item.title}-{item.description}
          </div>
        </div>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignIn) {
      return (
        <div className="right floated content">
          <Link className="ui button blue wide" to="/streams/new">Create stream</Link> 
        </div>
      )
    }
  }
  render() {
    if (!this.props.streams) {
      return <div>Loading...</div>
    }
    return <div className="ui middle aligned divided list">
      <h1>Current stream list</h1>
      {this.renderList()}<br />
      {this.renderCreate()}
    </div>
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams), userId: state.auth.userId,isSignIn: state.auth.isSignIn }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
