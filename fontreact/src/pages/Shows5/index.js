import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"
import palco from "../../assets/images/palco.png"
import showludmilla from "../../assets/images/showludmilla.jpg"

import { useNavigate } from 'react-router-dom'

export default function Shows() {
    //demais coisas de JS aqui
    const navigate = useNavigate()
    function comprar() {
        navigate('/carrinho', {
            nomeDoShow: 'Pixote'
        })
    }
    // retorna o html
    return (
        <div>
            <header>
                <a href="http://localhost:3000" className="logo"><img src={logo} alt="logo" /></a>
                <ul className="navigation">
                    <li><a href="http://localhost:3000" tabindex="0">Início</a></li>
                    <li><a href="http://localhost:3000/cadastro" tabindex="2">Login</a></li>
                    <li><a href="http://localhost:3000/carrinho" tabindex="4">Carrinho</a></li>
                </ul>
            </header>

            <main>

                <section class="show-page">

                    <img src={showludmilla} class="show-event" alt="Banner pixote" />

                    <div class="info-conteiner">
                        <h1>Ludmilla - Numanice </h1><br />
                        <p>30 de Janeiro de 2023, 20:00</p>
                        <p>Arena Ticket Music - São Paulo, SP</p>
                    </div>

                    <hr />
                    <div class="descricao-conteiner">
                        <h2>Descrição de evento </h2>
                        <p>Ludmilla já tem feito uma série de shows ao vivo. Ela alterna com apresentações do “Numanice“, seu projeto de pagode, com seus shows tradicionais com muito pop e funk. Dessa vez, vai ser um show raiz.
               No repertório, não poderá faltar hits como “Verdinha“, “Deixa de Onda“, “Din Din Din“, “Onda Diferente“, entre outros. Não dá para esquecer também a nova “Socadona“,
               que ganhou até uma versão de funk apresentada pelo novo alterego de Ludmilla, a DJ Ludbrisa. Esse é o nome que ela deu para o momento que assume as picapes nos shows do Numanice.</p>
                    </div>

                    <div class="ingresso-conteiner">

                        <div id="esquerda">
                            <img src={palco} alt="palco" />
                        </div>

                        <div id='direita'>
                            <div class="Plateia">
                                <h1>Ingressos</h1>
                                <br />
                                <div class="plateia1">
                                    <h2>Pista</h2>
                                    <h2> R$ 250,00</h2>
                                    <br />
                                    <button onClick={() => comprar()}  > Comprar ! </button>
                                </div>
                                <br />
                                <br />
                                <p>Em atendimento ao Decreto nº 60.488, de 27 de agosto de 2021, para acesso ao local do evento é obrigatório a apresentação do comprovante de vacinação contra COVID-19, com no mínimo as 2 (Duas) doses.
                                    O comprovante pode ser físico ou digital (disponível nos aplicativos Conecte SUS, Poupatempo Digital e E-saudeSP).
                                    Todas as demais exigências do protocolo vigente serão rigorosamente atendidas.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <footer>
                <div className="container-footer-all">
                    <div className="container-body">
                        <div className="colum1">
                            <h1>Mais Informações</h1>

                            <p>
                                Todos os preços e condições comerciais estão sujeitos a alteração comercial sem prévio aviso. <br /> Tickect music Eventos Culturais Ltda - CNPJ 10.000.000/0001-00 Rua Fernão Dias , 130 - Cj 5 - CEP: 00110-030 - São Paulo - SP.
                            </p>
                        </div>

                        <div className="colum2">
                            <h1>Redes Sociais</h1>

                            <div className="row">
                                <img src={facebook} alt="facebook" />
                                <label>Nos Siga no Facebook</label>
                            </div>
                            <div className="row">
                                <img src={twitter} alt="Twitter" />
                                <label>Nos Siga no Twitter</label>
                            </div>
                            <div className="row">
                                <img src={insta} alt="insta" />
                                <label>Nos Siga no Instagram</label>
                            </div>
                        </div>

                        <div className="colum3">
                            <h1>Contatos</h1>
                        </div>
                    </div>
                </div>

                <div className="container-footer">
                    <div className="footer">
                        <div className="copyright">
                            © 2021 Ticket Music - Todos os Direitos Reservados
                        </div>

                        <div className="information">
                            <a href="s">Informações Da Compania</a> |
                            <a href="s">Privacidades e Politicas</a> |
                            <a href="s">Termos e Condições</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}