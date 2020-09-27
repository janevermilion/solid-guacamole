import React from "react";
import {ContainerWrapper} from "../Container/ContainerStyle";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
//const Header = require('../Header/Header')

const Profiles = () => {
    return (
        <ContainerWrapper>
            <Header/>
            <div className={'profiles__container'}>
                <ul className={'profiles__users'}>
                    <li className={'profile__users__item'}><NavLink to={'/chats/1'}>Lisa</NavLink></li>
                    <li className={'profile__users__item'}><NavLink to={'/chats/2'}>John</NavLink></li>
                    <li className={'profile__users__item'}><NavLink to={'/chats/3'}>Alfred</NavLink></li>
                    <li className={'profile__users__item'}><NavLink to={'/chats/4'}>Nick</NavLink></li>
                </ul>
                <div className={'profile__user'}>
                    <div className={'profiles__profile'}>
                        <div className={'profiles__profile--info'}>
                            <h4 className={'profiles__profile--name'}>Lisa</h4>
                            <p className={'profiles__profile--age'}>Age: 15</p>
                            <p className={'profiles__profile--town'}>Town: Spb</p>
                            <p className={'profiles__profile--status'}>Status: alive</p>
                        </div>
                        <div className={'profiles__profile--img'}/>
                    </div>
                    <div className={'profiles__tasks'}>
                        <table className={'profile__table'}>
                            <thead>
                            <tr className={'profile__trh'}>
                                <th className={'profile__th1'}>id</th>
                                <th className={'profile__th1'}>Задача</th>
                                <th className={'profile__th2'}>Дата постановки</th>
                                <th className={'profile__th3'}>Дата окончания</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'profile__td1'}>1</td>
                                <td className={'profile__td1'}>Помыть посуду</td>
                                <td className={'profile__td2'}>22.05.2012</td>
                                <td className={'profile__td3'}>23.05.2013</td>
                            </tr>
                            <tr>
                                <td className={'profile__td1'}>2</td>
                                <td className={'profile__td1'}>Помыть собаку</td>
                                <td className={'profile__td2'}>28.05.2012</td>
                                <td className={'profile__td3'}>29.05.2013</td>
                            </tr>
                            <tr>
                                <td className={'profile__td1'}>3</td>
                                <td className={'profile__td1'}>Помыть машину</td>
                                <td className={'profile__td2'}>25.05.2012</td>
                                <td className={'profile__td3'}>25.05.2013</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Profiles;
