import Brand from "./Brand";

export default function BrandList() {
    return (
        <div className="brandList">
            <h1>Navegue por marcas</h1>
            <section className="brands">
                <Brand />
                <Brand />
                <Brand />
                <Brand />
                <Brand />
            </section>
        </div>
    )
}