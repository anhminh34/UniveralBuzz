import React, { useState } from 'react'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient=null;

const Chatroom = () => {
    const [publicChats, setPublicChats] =useState([]);
    const [privateChats, setPrivateChats] =useState(new Map());
    const [userData, setUserData] = useState({
        username:"",
        recievername:"",
        connected:false,
        message:""

    })

    const handleValue = (event)=> {
        const {value} = event.target;
        setUserData({...userData,[name]:value});
    }


    const registerUser = (event)=> {
        let Sock=new SockJS(http://localhost:8080/chat);
        stompClient=over(Sock);
        stompClient.connect({},onConnected,onError);
    }

    const onConnected = ()=> {
        setUserData({...userData,"connected":true});
        stompClient.subscribe('/chatroom/public',onPublicMessageRecieved);
        stompClient.subscribe('/user/'+userData.username+'/private',onPrivateMessageRecieved);
        userJoin();
    }

    const userJoin = ()=> {
        if(stompClient){
            let chatMessage ={
                senderName:userData.senderName,
                status:'JOIN'
            };
            stompClient.send('/app/message',{},JSON.stringify(chatMessage));
            
        }
    }

    const onPublicMessageRecieved=(payload)=>{
        let payloadData=JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;    
        }
    }

    const onError=(err)=>{
        console.log(err);
    }

    const onPrivateMessageRecieved=(payload)=>{
        let payloadData=JSON.parse(payload);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payload);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const sendPublicMessage=()=>{
        if(stompClient){
            let chatMessage ={
                senderName:userData.senderName,
                message:userData.message,
                status:'MESSAGE'
            };
            stompClient.send('/app/message',{},JSON.stringify(chatMessage));
            setUserData({...userData,"message":""});
        }
    }

    const sendPrivateMessage=()=>{
        if(stompClient){
            let chatMessage ={
                senderName:userData.senderName,
                recievername:tab,
                message:userData.message,
                status:'MESSAGE'
            };
            if(userData.username != tab){
                privateChats.set(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send('/app/private-message',{},JSON.stringify(chatMessage));
            setUserData({...userData,"message":""});
        }
    }

    return ( // html ui for main chatrooms to be reconfigured
        <div className = "container">
            {userData.connected?
            <div classname="chat-box">
                <div className="member-list">
                        <ul>
                            <li onClick={()=>{setTab("CHATROOM")}} className={'member ${tab==="CHATROOM" && "active"}'}>Chatrooms</li>
                            {[...privateChats.keys()].map((name,index)=>(
                                <li className='member' key={index}>
                                    {name}
                                </li>    
                            ))}
                        </ul>
                </div>
                {tab==="CHATROOM" && <div className="chat-content">
                    <ul className='chat-messages'>
                    {publicChats.map((chat,index)=>(
                        <li className='message' key={index}>
                            {chat.senderName !==userData.username && <div className='avatar'>{chat.senderName}</div>}
                            <div className='message-data'>{chat.message}</div>
                            {chat.senderName ===userData.username && <div className='avatar self'>{chat.senderName}</div>}
                        </li>
                    ))}
                    </ul>

                    <div className='send-message'>
                        <input type='text' className='input-message' 
                            name='message' placeholder='enter public message' value={userData.message}
                            onChange={handleValue}/>
                        <button type='button' className='send-button' onClick={sendPublicMessage}>send</button>
                    </div>    

                </div>}

                {tab!=="CHATROOM" && <div className="chat-content">
                    <ul className='chat-messages'>    
                    {publicChats.map((chat,index)=>(
                        <li className='message' key={index}>
                            {chat.senderName !==userData.username && <div className='avatar'>{chat.senderName}</div>}
                            <div className='message-data'>{chat.message}</div>
                            {chat.senderName ===userData.username && <div className='avatar self'>{chat.senderName}</div>}
                        </li>
                    ))}
                    </ul>

                    <div className='send-message'>
                        <input type='text' className='input-message' 
                            name='message' placeholder={'enter private message for ${tab}'} value={userData.message}
                            onChange={handleValue}/>
                        <button type='button' className='send-button' onClick={sendPrivateMessage}>send</button>
                    </div>
                </div>}    
            </div>
            :
            <div className='register'>
              <input 
              id='username'
              name='username'
              placeholder='Enter the username'
              value={userData.username}
              onChange={handleValue}/>
              />
              <button type="button" onClick={registerUser}>Register</button>              
            </div>
        </div>
    )
}