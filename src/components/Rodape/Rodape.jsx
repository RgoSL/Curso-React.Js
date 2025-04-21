import style from './Rodape.module.css'

const Rodape = (props) => {
    const{ nomeCriador } = props

    return(
        <div className= {style.Rodape}>
            React Básico - 2025 - <span> {nomeCriador} </span> 
        </div>
    )
}

export { Rodape}