import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from '../../modules/MessageManager';
import { getAllUsers } from '../../modules/UserManager';
import "./MessageCard.css";

export const MessageForm = () => {
    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes()
    const [message, setMessage] = useState({
        senderId: parseInt(sessionStorage.getItem("nutshell_user")), 
        userId: 0,
        message: "",
        timestamp: time
    });

    const [users, setUsers] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (evt) => {
        const newMessage = { ...message }
        let selectedVal = evt.target.value

        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newMessage[evt.target.id] = selectedVal
        setMessage(newMessage)
    }

    useEffect(() => {
        getAllUsers()
            .then(usersFromAPI => {
                setUsers(usersFromAPI)
            });
    }, []);

    const handleClickSaveMessage = (evt) => {
        evt.preventDefault()

            addMessage(message)
                .then(() => history.push("/messages"))
    }

    return (


        <form className="messageForm">
            <h2 className="messageFrom_title">New Message</h2>
            <fieldset>
				<div className="form-group">
					<label htmlFor="userId">Send to: </label>
					<select value={message.userId} name="user" id="userId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a friend</option>
						{users.map(u => (
							<option key={u.id} value={u.id}>
								{u.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Message" value={message.message} />
                </div>
            </fieldset>
            <button className="button"
				onClick={handleClickSaveMessage}>
				Send Message
          </button>
        </form>
    )
}