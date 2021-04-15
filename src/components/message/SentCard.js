import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getSingleUser} from '../../modules/UserManager'




export const SentCard = ({message}) => {
const [recipient, setRecipient] = useState([]);

useEffect(() => {
    getSingleUser(message.receiverId)
    .then(user => {
        setRecipient(user)
    }, []);
})



    return (
        <div className="messages">
            <div className="message-content">
                <h3>Sent to: {recipient.name}</h3>
                <p>{message.currentTime}</p>
                <p>Message: {message.message}</p>
                

            </div>

        </div>
    )

}