import styled from "styled-components";
const logo=require('../../img/logo.png');
const background = require('../../img/fon_1.png') ;

let mainFont = `
font-family: Roboto, sans-serif;
font-style: normal;
font-weight: normal;
color: #FFFFFF;
font-size: 10px;
line-height: 13px;
`

export const Title = styled.p`
font-family: Roboto, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 13px;
color: #FFFFFF;
text-transform: uppercase;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding-top: 25vh;
`;

export const Logo = styled.img.attrs(() => ({
    width: '289px',
    height: '97px',
    src: logo,
    alt: 'CompanyLogo'
}))`
max-width: 70%;
margin-bottom:40px;
`

export const Linkwrapper = styled.a`
${mainFont}
text-decoration: none;
margin: 15px 0;
text-align:center;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
min-width: 250px;
`;

export const Input = styled.input.attrs(props => ({
    type: props.type,
    id: props.id,
    name: props.name,
    placeholder: props.placeholder
}))`
font-family: Roboto, sans-serif;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
padding: 12px 0 12px 14px;
color: #6D6E71;
border-radius: 4px;
margin-bottom: 45px;
`;

export const CheckBoxContainer = styled.div`
display: flex;
align-content: center;
margin-top: -30px;
margin-bottom: 12px;
`

export const Checkbox = styled(Input)`
margin-right: 10px;
margin-bottom: 0;
display: block;`;

export const Label = styled.label`
${mainFont}
margin-top: 4px;`

export const Button = styled.button.attrs((props) => ({
    type: props.type
}))`
font-family: Roboto, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
text-transform: uppercase;
padding: 12px 0;
background-color: #2EC1FF;
border: none;
border-radius: 4px;
`
