import React from 'react';
import "./BoardHeader.css";
import { IconContext } from "react-icons";
import { MdLock } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";

import SmallAvatar from '../SmallAvatar.js/SmallAvatar';
import SmallAddBtn from '../SmallAddBtn/SmallAddBtn';

function BoardHeader() {
    return (
        <div className="boardHeader">
            <div className="boardHeader__left">
                <div className="boardHeader__left-boardStatus gray-btn">
                   <IconContext.Provider value={{color: "var(--gray-3)",size: "0.8em"}}>
                        <MdLock />
                    </IconContext.Provider>
                    <h3>Private</h3>
                </div>
                <div className="boardHeader__left-boardMembers">
                    <SmallAvatar />
                    <SmallAvatar />
                    <SmallAvatar />
                    <SmallAddBtn size="md"/>
                </div>
            </div>
            <div className="boardHeader__right">
                <div className="boardHeader__right gray-btn">
                   <IconContext.Provider value={{color: "var(--gray-3)",size: "1.2em"}}>
                        <AiOutlineEllipsis />
                    </IconContext.Provider>
                    <h3>Show Menu</h3>
                </div>
            </div>
        </div>
    )
}

export default BoardHeader;
