import React from 'react';
import './SmallAvatar.css';

function SmallAvatar() {
    return (
        <div className="smallAvatar">
            <img 
                className="smallAvatar__image" 
                src="https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80" alt="" />
        </div>
    )
}

export default SmallAvatar;
