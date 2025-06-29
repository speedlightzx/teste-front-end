import shieldCheck from '../../assets/header/ShieldCheck.png'
import truck from '../../assets/header/Truck.png'
import creditCard from '../../assets/header/CreditCard.png'
import logo from '../../assets/header/logo.png'
import glass from '../../assets/header/MagnifyingGlass.png'
import box from '../../assets/header/box.png'
import heart from '../../assets/header/Heart.png'
import user from '../../assets/header/UserCircle.png'
import cart from '../../assets/header/ShoppingCart.png'
import crown from '../../assets/header/CrownSimple.png'
import { useState } from 'react'


export default function Header() {

    //alterar o estado dos itens da nav, para poder adicionar a classe que deixa o texto azul
    type navItens = 'TODAS CATEGORIAS' | 'SUPERMERCADO' | 'LIVROS' | 'MODA' | 'LANÇAMENTOS' | 'OFERTAS DO DIA' | 'ASSINATURA'
    const [navItem, setNavItem] = useState<navItens>('OFERTAS DO DIA')

    return (
        <header>
            <section className='headerTexts'>
                <div className='text'>
                    <img src={shieldCheck} alt="" />
                    <h1>Compra <span>100% segura</span></h1>
                </div>
                <div className='text'>
                    <img src={truck} alt="" />
                    <h1><span>Frete grátis</span> acima de R$ 200</h1>
                </div>
                <div className='text'>
                    <img src={creditCard} alt="" />
                    <h1><span>Parcele</span> suas compras</h1>
                </div>
            </section>

            <section className='search'>
                <img className='logo' src={logo} alt="" />

                <div className='searchBar'>
                    <input type="text" placeholder='O que você está buscando?'/>
                    <img src={glass} alt="" />
                </div>

                <div className='account'>
                    <img className='boxIcon' src={box} alt="" />
                    <img src={heart} alt="" />
                    <img src={user} alt="" />
                    <img src={cart} alt="" />
                </div>  
            </section>

            <nav className='headerNav'>
                <li onClick={() => setNavItem("TODAS CATEGORIAS")}
                 className={`${navItem == 'TODAS CATEGORIAS' ? 'navActiveItem' : ''}`}>
                TODAS CATEGORIAS
                </li>
                <li onClick={() => setNavItem("SUPERMERCADO")}
                 className={`${navItem == 'SUPERMERCADO' ? 'navActiveItem' : ''}`}>
                SUPERMERCADO
                </li>
                <li onClick={() => setNavItem("LIVROS")}
                 className={`${navItem == 'LIVROS' ? 'navActiveItem' : ''}`}>
                LIVROS
                </li>
                <li onClick={() => setNavItem("MODA")}
                 className={`${navItem == 'MODA' ? 'navActiveItem' : ''}`}>
                MODA
                </li>
                <li onClick={() => setNavItem("LANÇAMENTOS")}
                 className={`${navItem == 'LANÇAMENTOS' ? 'navActiveItem' : ''}`}>
                LANÇAMENTOS
                </li>
                <li onClick={() => setNavItem("OFERTAS DO DIA")}
                 className={`${navItem == 'OFERTAS DO DIA' ? 'navActiveItem' : ''}`}>
                OFERTAS DO DIA
                </li>
                <li onClick={() => setNavItem("ASSINATURA")}
                 className={`${navItem == 'ASSINATURA' ? 'navActiveItem' : ''}`}>
                    <img src={crown} alt="" />
                    ASSINATURA
                </li>
            </nav>
        </header>
    )
}