import React from "react";
import {Headerwrap, RedZap} from "./HeaderStyle";
//import {Notification_important} from '@styled-icons/material-outlined/notification_important'

import {Lock} from '@styled-icons/material/Lock';
const Header =() => {
    return(
        <Headerwrap>
            <Lock/>
            <RedZap/>
            <div>img</div>
            <div>Jane</div>
            <div>settings</div>
            <div>logout</div>
        </Headerwrap>
    )
}


export default Header;
