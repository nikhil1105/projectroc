import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
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
                projectId="6c66f1d9-8457-4061-8731-2b1e32d7df44"
                username={user.username}
                secret={user.username}
                style={{ height: '100%' }}
            />
        </div>

    )
}

export default ChatsPage
