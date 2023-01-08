import React from 'react';
import './Header.css';

export default () => {
    return (
        <header className="black">
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/640px-Logonetflix.png" alt='Netflix'/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='Usuário' />
                </a>
            </div>
        </header>
    );
}