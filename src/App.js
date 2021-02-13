import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="f0ba8040-e7d4-4045-a012-9815d248e4e0"
            userName="admin"
            userSecret="12341234"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps }/>}
        />
    )

}

export default App;