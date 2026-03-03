import Category from './Category'
import computer from '../../assets/categories/computer.png'
import drinks from '../../assets/categories/drinks.png'
import health from '../../assets/categories/health.png'
import outfit from '../../assets/categories/outfits.png'
import sports from '../../assets/categories/sports.png'
import market from '../../assets/categories/market.png'
import tools from '../../assets/categories/tools.png'
import { useState } from "react";

export default function Categories() {

    //variavel para definir qual categoria está selecionada para fazer a interação
    type categories = 'Tecnologia' | 'Supermercado' | 'Bebidas' | 'Ferramentas' | 'Saúde' | 'Esporte e fitness' | 'Moda'
    const [selectedCategory, setSelectedCategory] = useState<categories>('Tecnologia')

    return (
        <section className="categories">
            <Category imagePath={computer} categoryName="Tecnologia" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={market} categoryName="Supermercado" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={drinks} categoryName="Bebidas" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={tools} categoryName="Ferramentas" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={health} categoryName="Saúde" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={sports} categoryName="Esporte e fitness" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Category imagePath={outfit} categoryName="Moda" selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </section>
    )
} 