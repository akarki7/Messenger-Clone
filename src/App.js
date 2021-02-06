import React, { useState } from 'react'
import { Button,FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input,setInput]=useState(''); //state (like variables but allow to show changes without refreshing)
  const [messages,setMessages]=useState([]);// [] is a list
  const [username, setUsername]=useState(''); //to dispplay the username of the user

  //you need to use setInput and setMessages to change the value of input and messages or else you cannot do it (because they are state not variables)

  //{ everything inside curly braces are read as JS}

  console.log(input);

  console.log(messages);


  const sendMessage=(event)=> {
      //all the logic to send a message goes here
      event.preventDefault(); //stops the form of input and button from automatically refreshing
      setMessages([...messages,input]);// adds new input to the end of the old list of messages
      setInput('');//after user presses send empty the message box
  }

  return (
    <div className="App">
        <h1>Hello To Aabishkar Karkis messenger</h1>

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
            <Message text ={message}/>//sending the messages to Message.js using the props variable 'text';  to change the styling of the messages being displayed
            //message is the loop variable that goes through each element of messages array
          ))
        }
    </div>
  );
}

export default App;

// props -> properties (powerful tool in react)
//ctrl+space shortkut by puting the cursor at the end of the keyword to import the file that contains the keyword
