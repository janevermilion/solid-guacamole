import React, {ReactNode} from "react";
import { Headerwrap, IconStyleWrapper } from "./HeaderStyle";

const Header =() => {
    return(
        <Headerwrap>
            <IconStyleWrapper><div>Notif</div></IconStyleWrapper>
            <div>img</div>
            <div>Jane</div>
            <div>settings</div>
            <div>logout</div>
        </Headerwrap>
    )
}


export default Header;
