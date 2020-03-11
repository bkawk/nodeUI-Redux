import { Component } from 'react'
import { connect } from 'react-redux'
import { AppState } from "../redux/store";
import { ChatState } from "../redux/chat/types";
import { sendMessage } from "../redux/chat/actions";

interface AppProps { sendMessage: typeof sendMessage; chat: ChatState }

class Test extends Component<{}> {
    constructor(props = {}) {
      super(props);
    }

  render() {
    return null
  }
}

const addState = (state: AppState) => ({ chat: state.chat });
const ReduxConnect = connect(addState, { sendMessage }) (Test)

export { ReduxConnect as Test} ;
