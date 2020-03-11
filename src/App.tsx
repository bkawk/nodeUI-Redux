import React from "react";
import { connect } from "react-redux";
import { AppState } from "./redux/store";
import { ChatState } from "./redux/chat/types";
import { sendMessage } from "./redux/chat/actions";

interface AppProps { sendMessage: typeof sendMessage; chat: ChatState }

const App: React.FC<AppProps>  = (props: AppProps) => {
  const { sendMessage } = props;  
  const AddChat = () => {
    sendMessage({ user: "John", message: "Message one", timestamp: new Date().getTime() });
  };

  return(
    <React.Fragment>
      <button onClick={AddChat}>Add Chat</button>
    </React.Fragment>
  );
}


const addState = (state: AppState) => ({ chat: state.chat });
const ReduxConnect = connect(addState, { sendMessage }) (App)

export { ReduxConnect as App} ;