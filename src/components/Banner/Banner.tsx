import banner from '../../assets/banner/banner.png'

export default function Banner() {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <div className='effectBanner'>
                <div>
            <h1>Venha conhecer nossas promoções</h1>
            <p><span>50% Off</span> nos produtos</p>

            <button>Ver produto</button>
                </div>
            </div>
        </div>
    )
}