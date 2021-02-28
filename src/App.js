import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="f0ba8040-e7d4-4045-a012-9815d248e4e0"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps }/>}
        />
    )

}

export default App;