import React, { useState, useEffect } from 'react'
import { FriendCard } from './FriendCard'
import { useHistory } from 'react-router-dom'
import { getAllFriends, deleteFriend } from '../../modules/FriendManager'
import './friend.css'

const currentUser = sessionStorage.getItem("nutshell_user")

export const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const history = useHistory();

    const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getAllFriends(currentUser).then(setFriends));
    };

    const getFriends = () => {
        return getAllFriends(currentUser).then(friendsFromAPI => {
            setFriends(friendsFromAPI)
        });
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            <section>
                <button type="button"
                    className="button"
                    onClick={() => { history.push("/friends/addFriends")}}>Add Friends
                    </button>
            </section>
            <div className="container-cards">
                {friends.map(friend =>
                <FriendCard key={friend.id}
                friend={friend}
                handleDeleteFriend={handleDeleteFriend} 
                user={friend.user} />)}
            </div>
        </>
    )
};