import styled from "styled-components";
import {Zap} from '@styled-icons/octicons'
//import {StyledIconBase} from '@styled-icons/material-outlined';
//import {Notification_important} from '@styled-icons/material-outlined/notification_important'
export const Headerwrap= styled.div`
margin: 0 auto;
height:10vh;
border-radius: 5px;
border-bottom: 1px solid #0F5373;
display: flex;
flex-direction: row;
justify-content: flex-end;
`



export const RedZap = styled(Zap)`
  color: white;
`