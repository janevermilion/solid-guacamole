import React from "react";
import ContainerWrapper from "../Container/Container";

let Chat= () => {
    <ContainerWrapper>
        <div className={'chat__container'}>
            <ul className={'chats__list'}>
                <li className={'chat__list__item'}>Alexey, Sergey</li>
                <li className={'chat__list__item'}>Glafira, Klava, Sergey</li>
                <li className={'chat__list__item'}>Anton, Michail, Sergey</li>
            </ul>
            <div className={'current__chat'}>
                <div className={'chat__window'}>
                    <div className={'chat__message'}>
                        <img src="" alt="" className={'chat__message__avatar'}/>
                        <p className={'chat__message__user'}>Alex</p>
                        <p className={'chat__message__text'}>Wow!Beautiful message!</p>
                        <p className={'chat__message__date'}>12.05.08</p>
                    </div>
                </div>
                <div classname={'message__wrapper'}>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder={'Your message'}/>
                    <button className={'button_send'}>Send</button>
                </div>
            </div>
        </div>
    </ContainerWrapper>
}

export default Chat;
