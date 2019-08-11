import React, { Component } from "react";
import _ from "lodash";
import PeerConnection from "utils/utilsVideoCall/PeerConnection";
import MainWindow from "components/videoCall/MainWindow";
import CallWindow from "components/videoCall/CallWindow";
import CallModal from "components/videoCall/CallModal";
import swal from "sweetalert";
import io from "socket.io-client";
import { socketURL } from "utils/environment";
import { getLocaleName } from "utils/localStore";

import background1 from "assets/img/videoCall/1.jpg";
import background2 from "assets/img/videoCall/2.jpg";
import background3 from "assets/img/videoCall/3.jpg";
import background4 from "assets/img/videoCall/4.jpg";
import background5 from "assets/img/videoCall/5.jpg";
import background6 from "assets/img/videoCall/6.jpg";
import background7 from "assets/img/videoCall/7.jpg";

var socket;

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
      sessionExists: null,
      backgroundImage: background1,
      adminName: ""
    };
    this.pc = {};
    this.config = null;
    this.startCallHandler = this.startCall.bind(this);
    this.endCallHandler = this.endCall.bind(this);
    this.rejectCallHandler = this.rejectCall.bind(this);
  }

  componentWillMount() {
    socket = io(socketURL, {
      query: `user=${getLocaleName()}`
    });
    this.setState({
      adminName: "nicoloso100"
    });
    var img = Math.floor(Math.random() * 7) + 1;
    var selectedImg;
    switch (img) {
      case 1:
        selectedImg = background1;
        break;
      case 2:
        selectedImg = background2;
        break;
      case 3:
        selectedImg = background3;
        break;
      case 4:
        selectedImg = background4;
        break;
      case 5:
        selectedImg = background5;
        break;
      case 6:
        selectedImg = background6;
        break;
      case 7:
        selectedImg = background7;
        break;
      default:
        selectedImg = background1;
        break;
    }
    this.setState({ backgroundImage: selectedImg });
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

  startCall(isCaller, config) {
    this.config = config;
    this.pc = new PeerConnection(this.state.adminName, socket)
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
        style={{
          width: "100wh",
          height: "100vh",
          backgroundImage: `url(${this.state.backgroundImage}`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundColor: "#999"
        }}
      >
        {this.state.sessionExists === false ? (
          <React.Fragment>
            <MainWindow
              clientId={clientId}
              adminId={this.state.adminName}
              startCall={this.startCallHandler}
            />
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
        ) : null}
      </div>
    );
  }
}

export default VideoCall;
