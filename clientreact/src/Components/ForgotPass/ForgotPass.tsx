import {
    Button,
    Checkbox,
    CheckBoxContainer,
    Container,
    Form,
    Input,
    Label,
    Linkwrapper,
    Logo,
    Title,
    ContainerWrapper
} from "./ForgotPassStyle";
import * as React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
type FormData = {
    login: string;
    password: string;
    type: string,
    token: string,
    cls: string
};

interface ForgotPass {

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

export const ForgotPass: React.FC<ForgotPass> = () => {
    const {register, handleSubmit, errors} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        let newFormData = JSON.stringify(data);
        fetch('http://localhost:9000/forgotpass', {
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
                    <Title>Адрес вашей электронной почты:</Title>
                    <Input type="email" id='login' name='email' placeholder='логин' ref={register({required: true})}/>
                    <Button type={'submit'}>Отправить</Button>
                    <Linkwrapper>
                        <Link to="/">Назад</Link>
                    </Linkwrapper>
                </Form>
            </Container>
        </ContainerWrapper>
    )
}
