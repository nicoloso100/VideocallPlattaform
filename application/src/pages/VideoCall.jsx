import React, { Component } from "react";
import _ from "lodash";
import socket from "../utils/utilsVideoCall/socket";
import PeerConnection from "../utils/utilsVideoCall/PeerConnection";
import MainWindow from "components/videoCall/MainWindow";
import CallWindow from "components/videoCall/CallWindow";
import CallModal from "components/videoCall/CallModal";
import swal from "sweetalert";

class VideoCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "",
      callWindow: "",
      callModal: "",
      callFrom: "",
      localSrc: null,
      peerSrc: null,
      sessionExists: null
    };
    this.pc = {};
    this.config = null;
    this.startCallHandler = this.startCall.bind(this);
    this.endCallHandler = this.endCall.bind(this);
    this.rejectCallHandler = this.rejectCall.bind(this);
  }

  componentWillMount() {
    socket.open();
  }

  componentWillUnmount() {
    socket.close();
  }

  componentDidMount() {
    socket
      .on("init", data => {
        if (!data.id) {
          swal("Atención!", "Ya tienes una sesión abierta", "warning").then(
            () => {
              window.close();
            }
          );
          this.setState({ sessionExists: true });
        } else {
          this.setState({ sessionExists: false });
          this.setState({ clientId: data.id });
        }
      })
      .on("request", data =>
        this.setState({ callModal: "active", callFrom: data.from })
      )
      .on("call", data => {
        if (data.sdp) {
          this.pc.setRemoteDescription(data.sdp);
          if (data.sdp.type === "offer") this.pc.createAnswer();
        } else this.pc.addIceCandidate(data.candidate);
      })
      .on("end", this.endCall.bind(this, false))
      .emit("init");
  }

  startCall(isCaller, friendID, config) {
    this.config = config;
    this.pc = new PeerConnection(friendID)
      .on("localStream", src => {
        const newState = { callWindow: "active", localSrc: src };
        if (!isCaller) newState.callModal = "";
        this.setState(newState);
      })
      .on("peerStream", src => this.setState({ peerSrc: src }))
      .start(isCaller, config);
  }

  rejectCall() {
    const { callFrom } = this.state;
    socket.emit("end", { to: callFrom });
    this.setState({ callModal: "" });
  }

  endCall(isStarter) {
    if (_.isFunction(this.pc.stop)) this.pc.stop(isStarter);
    this.pc = {};
    this.config = null;
    this.setState({
      callWindow: "",
      localSrc: null,
      peerSrc: null
    });
  }

  render() {
    const {
      clientId,
      callFrom,
      callModal,
      callWindow,
      localSrc,
      peerSrc
    } = this.state;
    return (
      <div
        style={{ backgroundColor: "black", width: "100wh", height: "100vh" }}
      >
        {this.state.sessionExists === false ? (
          <React.Fragment>
            <MainWindow clientId={clientId} startCall={this.startCallHandler} />
            <CallWindow
              status={callWindow}
              localSrc={localSrc}
              peerSrc={peerSrc}
              config={this.config}
              mediaDevice={this.pc.mediaDevice}
              endCall={this.endCallHandler}
            />
            <CallModal
              status={callModal}
              startCall={this.startCallHandler}
              rejectCall={this.rejectCallHandler}
              callFrom={callFrom}
            />
          </React.Fragment>
        ) : (
          <div>nel</div>
        )}
      </div>
    );
  }
}

export default VideoCall;
