import logo from '../../assets/header/logo.png'
import insta from '../../assets/footer/instagram.png'
import facebook from '../../assets/footer/facebook.png'
import linkedin from '../../assets/footer/linkedin.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social">
                <img src={logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <section className='midia'>
                    <img src={insta} alt="insta" />
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                </section>
            </div>
            <div className='line'></div>

            <div className='website'>

                <section className='institucional'>
                    <h1>Institucional</h1>
                    <p>Sobre nós</p>
                    <p>Movimento</p>
                    <p>Trabalhe conosco</p>
                </section>

                <section className='ajuda'>
                    <h1>Ajuda</h1>
                    <p>Suporte</p>
                    <p>Fale conosco</p>
                    <p>Perguntas Frequentes</p>
                </section>

                <section className='termos'>
                    <h1>Termos</h1>
                    <p>Termos e condições</p>
                    <p>Política de Privacidade</p>
                    <p>Troca e devolução</p>
                </section>

            </div>
        </footer>
    )
}