import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'react-native-paper';

import Fire from '../Fire';

class Chat extends React.Component {

    state = {
        messages: [],
        user:{_id:1, name: 'test'}
    };
    componentDidMount() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Button icon="logout" mode="Text button" color='#77b3d4' onPress={() => this.props.navigation.navigate('Login')}>
                    Logout
                </Button>
            ),
        });
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }
    render() {
        console.log(this.props.route.params,'this.props.navigation.params.name')
        // console.log(this.props.navigation,'this.props.navigation')
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                // user={this.user}
                user={{
                    name: this.props.route.params,
                    _id: Fire.shared.uid,
                }}
                renderAvatar={() => null}
                // showAvatarForEveryMessage={true}
                showUserAvatar={true}
                showAvatarForEveryMessage={true}
                renderAvatarOnTop={true}
            />
        );
    }
}

export default Chat;



// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import Fire from "../Fire";
//
// export default function Chat({ navigation, route }) {
//     const [messages, setMessages] = useState([]);
//     const [userName, setUserName] = useState('');
//     const [id, setId] = useState('');
//     console.log(messages,'messagesmessages')
//     useEffect(() => {
//         console.log('useEffectuseEffectuseEffect')
//         //listener will be added on component mounted
//         Fire.shared.on(message =>
//             setMessages(previousMessages => GiftedChat.append(previousMessages, message))
//         );
//         const { name } = route.params;
//         setUserName(name);
//         setId(Fire.shared.uid)
//         //return function is called on component unmount
//         // return () => {
//         //     Fire.shared.off();
//         // }
//     }, [])
//
//     const onSend = useCallback((messages = []) => {
//         setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//     }, [])
//
//     return (
//         <GiftedChat
//             messages={messages}
//             // onSend={Fire.shared.send}
//             onSend={messages => onSend(messages)}
//             user={{
//                 name: userName,
//                 _id: id,
//             }}
//         />
//     )
// }
//