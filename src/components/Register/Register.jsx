import styles from "./Register.module.css";

import { useState, useEffect } from "react";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const user = {
            name,
            email,
            password,
            confirmPassword,
        };

        if (password !== confirmPassword)
            setError("As senhas precisam ser iguais!");

        console.log(user);
    };

    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Crie seu usário e compartilhe histórias incríveis. ;)</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nome do usuário"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>
                    <span>Confirmação de senha</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                <button className="btn">Cadastrar</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};
