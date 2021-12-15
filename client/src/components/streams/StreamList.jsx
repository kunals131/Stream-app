import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderCreate = (stream) => {};

  const renderAdmin = (stream) => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/${stream.id}/edit`} className="ui button primary">Edit</Link>
          <Link to={`/streams/${stream.id}/delete`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  };
  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {props.isSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.authStatus.userId,
    isSignedIn: state.authStatus.isSignedIn,
  };

  //Object.values turns all object values into an array
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
