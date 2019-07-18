import React, { Component } from 'react';
import logo from './logo.png';
import nina from './nina.png';
import kat from './kat.png';
import art from './art.png';
import fundo1 from './Fundoedit.png';
import fundo2 from './Fundoedit2.png';
import piano from './piano.png';
import bigmac from './bigmac.png';
import tech from './tech.png';
import ifsp from './ifspelet1.png';
import usp from './uspsielet1.png';
import './App.css';
import './style.css';
import { template } from '@babel/core';

class App extends Component {
    state = {
        name: '',
        subject: '',
        message: '',
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        const template = "meu_email";

        this.sendFeedback(
            template,
            this.state.subject,
            this.state.message
        );
    }

    sendFeedback(templateId, subject, feedback) {
        window.emailjs
            .send('postmark', templateId, {
                subject,
                feedback
            })
            .then(res => {
                window.location.href = 'https://rafaelasouza.netlify.com/';
            })
    }
    handleChangeName(event) {
        this.setState({ ...this.state, name: event.target.value });

    }
    handleChangeMessage(event) {
        this.setState({ ...this.state, message: event.target.value });

    }
    handleChangeSubject(event) {
        this.setState({ ...this.state, subject: event.target.value });

    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" alt="Responsive image"></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#formacao">Formação</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#stuff">Stuff</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id='home'></div>

                <div id="slides" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#slides" data-slide-to="0"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={fundo1} className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={fundo2} className="img-fluid" alt="Responsive image"></img>
                        </div>
                    </div>
                </div>

                <div id='formacao'>
                    <div className="container-fluid padding">
                        <div className="row welcome text-center">
                            <div className="col-12">
                                <br></br><br></br>
                                <h1 className="display-4">Formação</h1>
                            </div>
                            <hr />
                            <div className="col-12">
                                <p className="lead">Um pequeno resumo das principais instituições que passaram por mim e algumas conquistas proporcionada por elas.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="d-block d-lg-flex align-items-center">
                            <div className="col-md-12 col-lg-10">
                                <h2>IFSP - Campus São Paulo</h2>
                                <p> De 2014 a 2016, fiz o curso técnico em eletrônica integrado ao ensino médio. Consegui também através de um professor dessa instituição uma iniciação científica em 2015 no Instituto de Física da USP (IFUSP), na área de embarcados.</p>
                            </div>
                            <div className="col-md-12 col-lg-2 text-center">
                                <img src={ifsp} className="img-fluid" id="school"></img>
                            </div>

                        </div>

                        <div className="d-block d-lg-flex align-items-center">
                            <div className="col-md-12 col-lg-10">
                                <h2>USP - Campus São Carlos</h2>
                                <p> Ingressei em 2018 no curso Bacharelado em Sistemas de Informação, e possuo previsão de formatura para 2021. No mesmo ano fui uma das alunas destaque do meu curso, estando entre as maiores médias.</p>
                            </div>

                            <div className="col-md-12 col-lg-2 text-center">
                                <img src={usp} className="img-fluid" id="school"></img>
                                <div id='stuff'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Coisas Favoritas</h1>
                        </div>
                        <hr />
                        <div className="col-12">
                            <p className="lead">As melhores coisas do mundo (na minha humilde opinião).</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={nina}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Gatinhos</h4>
                                    <p className="card-text">Sou completamente team gatos, mesmo o amor às vezes não sendo recíproco. Ah, essa gata da foto é a Nina e temos uma relação de ódio muito bonita.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={kat}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Katarina</h4>
                                    <p className="card-text">Apenas a melhor campeã do jogo League of Legends. Ela é perfeita, vai por mim (tenho 500 mil pontos de maestria). </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={bigmac}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Comidas de valor nutricional duvidoso</h4>
                                    <p className="card-text">Quanto mais gordura trans, sódio, açúcar e afins, mais eu tenho interesse. Só não conta pra minha mãe, ela acha que eu cozinho todos os dias... </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={tech}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Tecnologia</h4>
                                    <p className="card-text">Como uma boa estudante de T.I., eu amo tecnologia. Eu sei que é clichê, mas faz parte da minha vida e eu precisava exaltar. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={art}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Arte</h4>
                                    <p className="card-text">O meu hobbie favorito é desenhar, e sou uma grande entusiasta da arte 2D, tanto digital quanto outras pinturas de diferentes tipos (principalmente aquarela). </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card">
                                <img className="card-img-top" src={piano}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Música</h4>
                                    <p className="card-text">Sou apaixonada por música, principalmente instrumentais de piano e violino. Graças a alguns jogos de ritmo, comecei a gostar e não parei mais. Atualmente, faço aulas de piano. </p>
                                    <div id='contato'>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Contato</h1>
                        </div>
                        <hr />
                        <div className="col-12">
                            <p className="lead">Sinta-se livre para me mandar um email e falar sobre qualquer coisa :)</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <form id="contact-form d-flex justify-content-center" className="form" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="d-flex-column justify-content-center">
                            <input name="name" type="text" className="form-control mx-auto" onChange={this.handleChangeName.bind(this)} value={this.state.name} placeholder="Seu nome" required /><br />
                            <input name="subject" type="text" className="form-control mx-auto" onChange={this.handleChangeSubject.bind(this)} value={this.state.subject} placeholder="Assunto" required /><br />
                            <textarea name="message" className="form-control mx-auto" onChange={this.handleChangeMessage.bind(this)} value={this.state.message} placeholder="Mensagem" row="4" required /><br />

                            <input type="submit" name="submit" className="form-control submit mx-auto" value="Enviar" />

                        </div>
                    </form>

                </div>


                <footer>
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-12">
                                <h5 className="mb-0">Desenvolvido por Rafaela Souza Silva, 2019.</h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>

        );
    }
}

export default App;
