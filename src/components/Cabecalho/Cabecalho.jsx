import { Link } from "react-router-dom";

import style from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
            <Link to = "/">
            <h1>
                Lista de 
                <span> Tarefas</span>
            </h1>
            </Link>

            <Link to = "/sobre-nos">Sobre Nós </Link>
        </div>
    )
}

export {Cabecalho}
