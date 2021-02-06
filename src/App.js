import React, { useState, useEffect } from 'react'
import { Button,FormControl, InputLabel, Input,Card} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input,setInput]=useState(''); //state (like variables but allow to show changes without refreshing)
  const [messages,setMessages]=useState([{username:'sonny', text: 'hey guys'},{username: 'AK', text:'whats up'}]);// [] is a list
  const [username, setUsername]=useState(''); //to dispplay the username of the user
  
  useEffect(() => {
    setUsername(prompt('Please Enter your name : '));
  }, []) //condition; if it is blank inside [], this code runs ONCE when the app component loads

  //you need to use setInput and setMessages to change the value of input and messages or else you cannot do it (because they are state not variables)

  //{ everything inside curly braces are read as JS}

  console.log(input);

  console.log(messages);


  const sendMessage=(event)=> {
      //all the logic to send a message goes here
      event.preventDefault(); //stops the form of input and button from automatically refreshing
      setMessages([...messages,{username:username,text:input}]);// adds new input to the end of the old list of messages
      setInput('');//after user presses send empty the message box
  }

  return (
    <div className="App">
        <h1>Hello to {username}s messenger</h1>

        <form>
          {/* FormControl is a materialUI for better graphics, animations and overall look*/}
          <FormControl> 
            <InputLabel>Enter a message ...</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} variant ="contained" color="primary" type="submit" onClick={sendMessage}> Send Message</Button>
          </FormControl>
        </form>

         {/* disabled ={!input} -> stops the app from passing empty string to database if user hits enter in empty input box */}


        {
          messages.map(message => ( //map acts like a loop and returns the output that we want (loop+return)
            <Message username={message.username} text={message.text}/>//sending the messages to Message.js using the props variable 'text';  to change the styling of the messages being displayed
            //message is the loop variable that goes through each element of messages array
          ))
        }
    </div>
  );
}

export default App;

// props -> properties (powerful tool in react)
//ctrl+space shortkut by puting the cursor at the end of the keyword to import the file that contains the keyword

//useEffect -> run code on a condition in REACT
//useState -> variable in REACT
