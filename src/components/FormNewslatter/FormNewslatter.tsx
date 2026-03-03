export default function FormNewslatter() {

    return (
        <div className="formNewslatter">
            <div className="texts">
                <h1>Inscreva-se na nossa newsletter</h1>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <form className="form">
                <div className="inputs">
                <input type="text" placeholder="Digite seu nome"/>
                <input type="text" placeholder="Digite seu e-mail"/>
                <button type="submit">INSCREVER</button>
                </div>
                <div className="inputCheckbox">
                    <input type="checkbox" />
                    <label>Aceito os termos e condições</label>
                </div>
            </form>
        </div>
    )
}