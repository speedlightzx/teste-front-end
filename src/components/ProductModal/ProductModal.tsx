import { Product } from "../Products/ProductInfo";
import plus from '../../assets/modal/plus.png'
import minus from '../../assets/modal/minus.png'
import { useState } from "react";
import x from '../../assets/modal/x.png'
//importando a interface de produto
//que tem o caminho da imagem como string, nome como string, descrição como string, e preço como número

interface Modal extends Product {
    closeModal: () => void
}

export default function ProductModal({ imagePath, name, description, price, closeModal }: Modal) {

    //state que armazena a quantidade de itens
    const [quantity, setQuantity] = useState<number>(1)

    //funcao para adicionar mais um item
    const addQuantity = () => {
        setQuantity((prevState) => prevState += 1)
    }

    //funcao para tirar um item
    const subQuantity = () => {
        if(quantity == 1) return
        setQuantity((prevState) => prevState -= 1)
    }

    return (
        <div className="modalOverlay">
        <div className="productModal">
            <div className="imageModal">
                <img src={imagePath} alt="" />
            </div>
            <div className="modal">

                <div className="close" onClick={() => closeModal()}>
                    <img src={x}/>
                </div>

                <div className="nameAndPrice">
                    <h1 className="name">{name}</h1>
                    <h2 className="price">R$ {price.toLocaleString()}</h2>
                </div>
                <div className="DescriptionAndSeeMore">
                    <p className="description">{description}</p>
                    <p className="seeMore">{'Veja mais detalhes do produto >'}</p>
                </div>
                <div className="buying">
                    <div className="quantity">
                        <img onClick={() => subQuantity()} className="minus" src={minus} alt="" />
                            <h1>{quantity}</h1>
                        <img onClick={() => addQuantity()} className="plus" src={plus} alt="" />
                    </div>
                    <button
                    onClick={() => closeModal()}
                    className="buyButton">
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}