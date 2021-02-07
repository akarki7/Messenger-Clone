import React, { useState, useEffect, forwardRef } from 'react'
import { Button,FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core'; //wrap the icon and treat it as a button

function App() {
  const [input,setInput]=useState(''); //state (like variables but allow to show changes without refreshing)
  const [messages,setMessages]=useState([]);// [] is a list
  const [username, setUsername]=useState(''); //to dispplay the username of the user
  
  useEffect(()=> {
    //load data from the database when the app component loads
    db.collection('messages')
    .orderBy('timestamp','desc') //asc for ascending (latest msg goes to bottom)
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    });
  }, [] );
  //onSnapshot -> every time the database changes this automatically detects is and updates

  useEffect(() => {
    setUsername(prompt('Please Enter your name : '));
  }, []); //condition; if it is blank inside [], this code runs ONCE when the app component loads

  //you need to use setInput and setMessages to change the value of input and messages or else you cannot do it (because they are state not variables)

  //{ everything inside curly braces are read as JS}

  console.log(input);

  console.log(messages);


  const sendMessage=(event)=> {
      //all the logic to send a message goes here
      event.preventDefault(); //stops the form of input and button from automatically refreshing

      db.collection('messages').add({
        message: input,
        username: username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()//putting servers time so that two people living in Usa and Nepal do not have problems due to time difference
      });
      setInput('');//after user presses send empty the message box
  }

  return (
    <div className="App">
        <img src="https://i.ibb.co/WF7xLG7/logo.png" width="100" height="100"/>
        <h1>Welcome to Aabishkars Messenger</h1>

        <form className="app__form">
          {/* FormControl is a materialUI for better graphics, animations and overall look*/}
          <FormControl className="app__formControl"> 
            <Input className="app__Input" placeholder = 'Type your message...' value={input} onChange={event => setInput(event.target.value)}/>

            <IconButton className="app__iconButton" disabled={!input} variant ="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon/>
            </IconButton>            
          </FormControl>
        </form>

         {/* disabled ={!input} -> stops the app from passing empty string to database if user hits enter in empty input box */}

        <FlipMove>
            {
              messages.map(({id,message}) => ( //map acts like a loop and returns the output that we want (loop+return)
                <Message key={id} username={username} message={message}/>//sending the messages to Message.js using the props variable 'text';  to change the styling of the messages being displayed
                //message is the loop variable that goes through each element of messages array
                
                //Update:
                //we want to separate our messages from others messages so we pass the username of the person logged in and 
                //the message which can be others message as well and we check if the username passed and username of message match and then display it as we need

                //key={id} used to indentiy the new messages added so that we can add the filpmove animation only to that message and leave other old messages as it is
                ))
            }
        </FlipMove>
     
    </div>
  );
}

export default App;

// props -> properties (powerful tool in react)
//ctrl+space shortkut by puting the cursor at the end of the keyword to import the file that contains the keyword

//useEffect -> run code on a condition in REACT
//useState -> variable in REACT

