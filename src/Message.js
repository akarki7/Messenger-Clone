import React, {forwardRef} from 'react';
import { Card, CardContent,Typography} from '@material-ui/core';
import './Message.css'; 

const Message= forwardRef(({username,message}, ref) => {
    const isUser=username == message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}> 
            <CardContent>
                <Typography color="white" variant="h5" component="h2">
                    {!isUser && `${message.username}:`}{message.message}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
})

export default Message

// rfce to get the function snippet

//className={`message ${isUser && 'message_user'}`}> 
// if it is other users just apply stlying of 'message' to all but if it is the user currently sending message then
// also style it with 'message_user' so that we get two different styling but they both have same mains stlying only the current user
// has a bit more styling than that

//className={isUser ? "message_userCard" : "message_guestCard"}
// if it isUser use message_userCard else use message_guestCard (like ? in c/c++)


// {!isUser && `${message.username}:`}{message.message}
//if it is not(!) current user then display their name else do not display the name as you are yourself