import React from "react";
import ContainerWrapper from "../Container/Container";

const Profiles = () => {
    return (
        <ContainerWrapper>
            <div className={'profiles__container'}>
                <ul className={'profiles__users'}>
                    <li className={'profile__users__item'}>Lisa</li>
                    <li className={'profile__users__item'}>John</li>
                    <li className={'profile__users__item'}>Alfred</li>
                    <li className={'profile__users__item'}>Nick</li>
                </ul>
                <div className={'profile__user'}>
                    <div className={'profiles__profile'}>
                        <h4>Lisa</h4>
                        <p>Age: 15</p>
                        <p>Town: Spb</p>
                        <p>Status: alive</p>
                    </div>
                    <div className={'profiles__tasks'}>
                        <table className={'profile__table'}>
                            <tr className={'profile__trh'}>
                                <th className={'profile__th1'}>Задача</th>
                                <th className={'profile__th2'}>Дата постановки</th>
                                <th className={'profile__th3'}>Дата окончания</th>
                            </tr>
                            <tr>
                                <td className={'profile__td1'}>Помыть посуду</td>
                                <td className={'profile__td2'}>22.05.2012</td>
                                <td className={'profile__td3'}>23.05.2013</td>
                            </tr>
                            <tr>
                                <td className={'profile__td1'}>Помыть собаку</td>
                                <td className={'profile__td2'}>28.05.2012</td>
                                <td className={'profile__td3'}>29.05.2013</td>
                            </tr>
                            <tr>
                                <td className={'profile__td1'}>Помыть машину</td>
                                <td className={'profile__td2'}>25.05.2012</td>
                                <td className={'profile__td3'}>25.05.2013</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Profiles;
