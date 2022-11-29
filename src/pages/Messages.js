import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import authService from "../service/authService";

var stompClient = null;
const Messages = () => {
  const user = authService.getCurrentUser();
  const [privateChats, setPrivateChats] = useState(new Map());
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  useEffect(() => {
    console.log(userData);
    userData.username = JSON.parse(user).name;
    connect();
  }, []);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        <div className="member-list">
          <ul>
            {[...privateChats.keys()].map((name, index) => (
              <li
                onClick={() => {
                  setTab(name);
                }}
                className={`member ${tab === name && "active"}`}
                key={index}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {tab !== "CHATROOM" && (
          <div className="chat-content">
            <ul className="chat-messages">
              {[...privateChats.get(tab)].map((chat, index) => (
                <li
                  className={`message ${
                    chat.senderName === userData.username && "self"
                  }`}
                  key={index}
                >
                  {chat.senderName !== userData.username && (
                    <div className="avatar">{chat.senderName}</div>
                  )}

                  {chat.senderName === userData.username && (
                    <div className="avatar self">{chat.senderName}</div>
                  )}
                  <div className="message-data">{chat.message}</div>
                </li>
              ))}
            </ul>

            <div className="send-message mt-2">
              <input
                type="text"
                className="input-message"
                placeholder="Enter Message"
                value={userData.message}
                onChange={handleMessage}
              />
              <button
                type="button"
                className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
                onClick={sendPrivateValue}
              >
                send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
