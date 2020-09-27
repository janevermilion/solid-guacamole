import {
    Button,
    Checkbox,
    CheckBoxContainer,
    Container,
    Form,
    Input,
    Label,
    LinkWrapper,
    Logo,
    Title
} from "./LoginFormWindowStyle";
import * as React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {ContainerWrapper} from "../Container/ContainerStyle";

type FormData = {
    login: string;
    password: string;
    type: string,
    token: string,
    cls: string
};

interface LoginFormWindow {

}

let checkToken = function (token: string) {
    console.log('trying to check jwt on server...')
    return fetch('http://localhost:9000/protected', {
        method: "GET",
        headers: {'Content-Type': 'application/json', 'Authorization': localStorage.token}
    }).then(result => {
        return result.json();
    }).then(answer => console.log(answer)).catch(function (error) {
        console.log('Check failed ', error);
    })
}

export const LoginFormWindow: React.FC<LoginFormWindow> = () => {
    const {register, handleSubmit, errors} = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        let newFormData = JSON.stringify(data);
        fetch('http://localhost:9000/login', {
            method: "POST",
            body: newFormData,
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            console.dir(response.headers)
            return response.json();
        })
            .then(function (data) {
                console.log(data);
                if (data.success === false)
                    throw new Error(data.err);
                console.log('My JWT:', data);
                localStorage.setItem('token', data.token);
                return data.token;
            }).then(function (token) {
            checkToken(token)
        }).catch(function (error) {
            console.log('Request failed', error);
        });
    };
    return (
        <ContainerWrapper>
            <Container>
                <Logo/>
                <Form method='POST' onSubmit={handleSubmit(onSubmit)}>
                    <Title>Авторизация</Title>
                    <Input type="email" id='login' name='email' placeholder='логин' ref={register({required: true})}/>
                    <Input type="password" id='password' name='password' placeholder='пароль'
                           ref={register({required: true})}/>
                    <CheckBoxContainer>
                        <Checkbox type="checkbox" id={'rememberme'}/>
                        <Label htmlFor={'rememberme'}>Запомнить меня</Label>
                    </CheckBoxContainer>
                    <Button type={'submit'}>ВХОД</Button>
                    <LinkWrapper><Link to='/forgot_pass'>Забыли пароль?</Link></LinkWrapper>
                </Form>
            </Container>
        </ContainerWrapper>
    )
}
