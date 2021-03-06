

export const getEventsForUser = (userId) => {
    return fetch(`http://localhost:8088/events?${userId}&_expand=user`).then(res => res.json())
}

export const deleteEventById = (id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"

    }).then(res => res.json())
}


export const saveEvent = (newEvent) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(res => res.json())
}

export const updateEvent = (eventUpdate) => {
    return fetch(`http://localhost:8088/events/${eventUpdate.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventUpdate)
    }).then(res => res.json())

}

export const getEventById = (id) => {
    return fetch(`http://localhost:8088/events/${id}`).then(res => res.json())
}

export const getFriendsOfCurrentUser = (id) => {
    return fetch(`http://localhost:8088/friends?currentUserId=${id}`)
        .then(res => res.json()).then(parsedResponse =>{return parsedResponse})
}