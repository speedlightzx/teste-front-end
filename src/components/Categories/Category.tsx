//interface para receber apenas o caminho da imagem e o nome da categoria para renderizar
interface Category {
    imagePath: string,
    categoryName: string,
    selectedCategory: any,
    setSelectedCategory: any
}

export default function Category({ imagePath, categoryName, selectedCategory, setSelectedCategory }: Category) {
    return (
        <div onClick={() => setSelectedCategory(categoryName)} className={`category ${selectedCategory == categoryName ? 'selectedCategory' : ''}`}>
            <div className="categoryBorder">
            <img src={imagePath} alt="" />
            </div>
            <h1>{categoryName}</h1>
        </div>
    )
}