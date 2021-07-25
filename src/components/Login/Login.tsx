// @flow
import * as React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import firebase from "firebase";

type Props = {};
export const Login: React.FC<Props> = () => {
    const auth = firebase.auth()


    const login =async ()=> {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)

    }

    return (
        <Container>
            <Grid container alignItems={"center"} justify={"center"} style={{height: window.innerHeight-30}}>
                <Grid container alignItems={"center"} justify={"center"} style={{width: 400, backgroundColor: 'lightpink'}}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Войти с богом</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};