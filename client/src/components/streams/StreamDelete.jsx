import React from "react";
import Modal from "./Modal";
import history from "../../history";
import { withRouter, Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchStream, deleteStream } from "../../actions";

import { connect } from "react-redux";
const StreamDelete = (props) => {
  const renderContent = () => {
    if (!props.streams) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with title : ${props.streams.title}`;
    }
  };
  const id = props.match.params.id;

  useEffect(() => {
    props.fetchStream(id);
  }, []);
  const actions = (
    <>
      <button
        onClick={() => props.deleteStream(id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  return (
    <>
      <Modal
        onDismiss={() => history.push("/")}
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
      />
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
);
