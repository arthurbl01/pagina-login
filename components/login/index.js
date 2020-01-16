import React, { Component } from 'react';
import './style.css';
import Head from 'next/head';

class login extends Component {
    render() {
        return (
            <div className="login">
                <Head>
                    <link rel="preload" href="/fonts/Montserrat-Medium.ttf" as="font" crossOrigin="" />
                </Head>
                <section className="container">
                    <div className="corpo">
                        <div className="l-esquerdo">
                            <img className="img-login" src="/static/img-login.png" />
                            <h3 className="texto-l-esquerdo">Faça login com sua conta e aproveite.</h3>
                        </div>
                        <div className="l-direito">
                            <div className="titulo">
                                <div className="titulo-l-direito">
                                    Olá!<br />
                                    <b>Bom dia!</b>
                                </div>
                                <img className="img-logo" src="/static/img-logo.png" />
                            </div>

                            <h1 className="sub-titulo-login"> <b>Entre </b>com sua conta </h1>

                            <form className="formulario-login">
                                <div className="form__group field">
                                    <input type="input" className="form__field" placeholder="Name" name="name" required />
                                    <label className="form__label">Usuário</label>
                                </div>
                                <div className="form__group field">
                                    <input type="password" className="form__field" placeholder="Name" name="name" required />
                                    <label className="form__label">Senha</label>
                                </div>
                            </form>
                            <button className="btn-esq-senha"> Esqueceu sua senha? </button>
                            <button className="btn-login"> Login </button>
                            <button className="btn-cadastro"> Novo usuário </button>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default login;