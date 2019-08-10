import io from "socket.io-client";
import { socketURL } from "utils/environment";
import { getLocaleName } from "utils/localStore";

const socket = io(socketURL, {
  query: `user=${getLocaleName()}`,
  autoConnect: false
});

export default socket;
