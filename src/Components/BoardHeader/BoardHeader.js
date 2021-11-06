import React from 'react';
import "./BoardHeader.css";
import { IconContext } from "react-icons";
import { MdLock } from "react-icons/md";
import SmallAvatar from '../SmallAvatar.js/SmallAvatar';
import SmallAddBtn from '../SmallAddBtn/SmallAddBtn';

function BoardHeader() {
    return (
        <div className="boardHeader">
            <div className="boardHeader__left">
                <div className="boardHeader__left-boardStatus gray-btn">
                   <IconContext.Provider value={{color: "var(--gray-3)",size: "0.8em"}}>
                            {/* <div className=""> */}
                                <MdLock />
                            {/* </div> */}
                    </IconContext.Provider>
                    <h3>Private</h3>
                </div>
                <div className="boardHeader__left-boardMembers">
                    <SmallAvatar />
                    <SmallAvatar />
                    <SmallAvatar />
                    <SmallAddBtn size="sm"/>
                </div>
            </div>
            <div className="boardHeader__right">

            </div>
        </div>
    )
}

export default BoardHeader;
