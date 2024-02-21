import React, { useState } from react;
import './Register.css';

const Register = ({ onRegister }) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleRegister = () => {
            if (username && password) {
                onRegister(username);
            } else {
                alert("Моля въведете потребителско име и парола");
            }
        };

        return ( <
                div className = 'register-container' >
                <
                h2 > Регистарция < /h2> <
                label >
                Потребителско име:
                <
                input type = "text"
                value = { username }
                onChange = {
                    (e) => {
                        setUsername(e.target.value)
                    }
                    /> <
                    /label> <
                    label >
                    Парола:
                        <
                        input type = "password"
                    value = { password }
                    onChange = {
                        (e) => {
                            setPassword(e.target.value)
                        }
                        /> <
                        /label> <
                        button onClick = { handleRegister } > Регистарция < /button> <
                        /div>
                    );
                }

                export default Register;