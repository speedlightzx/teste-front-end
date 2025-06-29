import { useState } from "react"
import ProductsShowcase from "./ProductsShowcase"

//componente recebe um boolean para saber se categoriza os produtos ou se mostra "Ver todos"
interface typeProductList {
    categories?: boolean
}

export default function Products({ categories }: typeProductList) {

    //variavel para definir a categoria selecionada para deixar interativo caso o componente seja categorizado
    type productCategoriesNav = 'CELULAR' | 'ACESSÓRIOS' | 'TABLETS' | 'NOTEBOOKS' | 'TVS' | 'VER TODOS'
    const [selectedProductCategory, setSelectedProductCategory] = useState<productCategoriesNav>('CELULAR')

    return (
        <div className="productCategories">
            <div className="textWithLines">
                <div className="line"></div>
                    <h1 className="textLine">Produtos Relacionados</h1>
                <div className="line"></div>
            </div>
            {!categories && <h1 className="subText">Ver todos</h1>}
            
            {categories == true && 
            <nav className="productCategoriesNav">
                <li 
                onClick={() => setSelectedProductCategory('CELULAR')}
                className={`${selectedProductCategory == 'CELULAR' ? 'selectedProductCategory' : ''}`}>
                CELULAR
                </li>
                <li
                 onClick={() => setSelectedProductCategory('ACESSÓRIOS')}
                 className={`${selectedProductCategory == 'ACESSÓRIOS' ? 'selectedProductCategory' : ''}`}>
                ACESSÓRIOS
                </li>
                <li
                onClick={() => setSelectedProductCategory('TABLETS')}
                className={`${selectedProductCategory == 'TABLETS' ? 'selectedProductCategory' : ''}`}>
                TABLETS
                </li>
                <li
                onClick={() => setSelectedProductCategory('NOTEBOOKS')}
                className={`${selectedProductCategory == 'NOTEBOOKS' ? 'selectedProductCategory' : ''}`}>
                NOTEBOOKS
                </li>
                <li 
                onClick={() => setSelectedProductCategory('TVS')}
                className={`${selectedProductCategory == 'TVS' ? 'selectedProductCategory' : ''}`}>
                TVS
                </li>
                <li
                onClick={() => setSelectedProductCategory('VER TODOS')}
                className={`${selectedProductCategory == 'VER TODOS' ? 'selectedProductCategory' : ''}`}>
                VER TODOS
                </li>
            </nav>
            }

            <ProductsShowcase />
        </div>
    )
}