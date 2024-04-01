import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import API_URL from "../constants";
import axios from "axios";


function ChatsPage() {

    const [user, setuser] = useState({})

    useEffect(() => {
        let url = API_URL + '/my-profile/' + localStorage.getItem('userId');
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                if (res.data.user) {
                    setuser(res.data.user);
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }, [])

    const chatprops = useMultiChatLogic('0d484187-81b3-47aa-917f-2d26123683f3', user.username, user.secret)
    const navigate = useNavigate()


    return (

        <div style={{ height: '100vh' }} >
            <button onClick={() => navigate('/')} style={{
                position: 'fixed',
                bottom: '4px',
                left: '4px',
                backgroundColor: 'white',
                borderRadius: '0.375rem', // Adjust as needed
                padding: '0.5rem', // Adjust as needed
                fontWeight: 'bold',
            }}   > Go Back </button>
            <PrettyChatWindow
                projectId="0d484187-81b3-47aa-917f-2d26123683f3"
                username={user.username}
                secret={user.username}
                style={{ height: '100%' }}
            />
        </div>

    )
}

export default ChatsPage
