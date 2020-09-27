import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon';
import * as materialOutlined from '@styled-icons/material-outlined'
export const Headerwrap= styled.div`
margin: 0 auto;
height:10vh;
border-radius: 5px;
border-bottom: 1px solid #0F5373;
display: flex;
flex-direction: row;
justify-content: flex-end;
`
export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: white;
    /* icon styles go here */
  }
`
export const IconElement = styled.div`
background-image: ${materialOutlined}
`
