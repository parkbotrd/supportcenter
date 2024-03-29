import React from 'react';
import './zMain.css';
import { Button } from 'react-bootstrap'

export default function App() {
    document.querySelector(".loader-container").remove()
    let logout = () => {
        localStorage.setItem("name", '')
        localStorage.setItem("id", '')
        localStorage.setItem("auth", '')
        // eslint-disable-next-line
        window.location.href = window.location.href
    }

    let login = () => {
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=530171799980212244&redirect_uri=https%3A%2F%2Fsupport.parkbot.ml%3A3001%2Flogin&response_type=code&scope=email%20identify'
    }

    return(
        <div className="App-header">
            {localStorage.getItem("name") ? 
                <div className="App-header">
                    {/*eslint-disable-next-line*/}
                    <h1>환영해요🖐</h1>
                    <h2>{localStorage.getItem("name")}</h2>
                    <Button variant="primary" style={{ marginTop: '10px' }} href="/tickets">내 티켓들</Button>
                    <Button variant="primary" style={{ marginTop: '10px' }} onClick={logout}>로그아웃</Button>
                </div> : 
                <div className="App-header">
                    <h1>고객 지원 센터</h1>
                    <p className="m30t">티켓을 열고싶으시면 로그인을 먼저 해주세요!</p>
                    <Button variant="primary" style={{ marginTop: '10px' }} onClick={login}>로그인</Button>
                </div>
            }
            
        </div>
    )
}