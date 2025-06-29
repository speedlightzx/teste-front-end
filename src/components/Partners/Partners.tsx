import partnerImage from '../../assets/partners/partner.png'

export default function Partners() {
    return (
        <div className="partners">
            <div className='partner'>
                <img className='partnerImage' src={partnerImage} alt="" />
                <div className='effectPartner'></div>
                <div className='textPartner'>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>

                <button>CONFIRA</button>
                </div>
            </div>

            <div className='partner'>
                <img className='partnerImage' src={partnerImage} alt="" />
                <div className='effectPartner'></div>
                <div className='textPartner'>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>

                <button>CONFIRA</button>
                </div>
            </div>
        </div>
    )
}