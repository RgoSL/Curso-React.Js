import { useState } from 'react'
import { useAppContext } from '../../../hooks'
import { Botao, CampoTexto, TIPO_BOTAO } from '../../../components'
import style from './ListaTarefasItem.module.css'

const ListaTarefasItem = (props) => {
const { id, nome } = props

const [estaEditando, setEstaEditando] = useState(false)


  const {editarTarefa, removerTarefa} =  useAppContext()
  
  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value

    editarTarefa(id, nomeTarefa)

    setEstaEditando(false)

  }

    return (
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto 
                defaultValue ={nome}
                onBlur = {onBlurTarefa} autoFocus />
            )}
            {!estaEditando && (
               <p onDoubleClick = {() => setEstaEditando(true)}>{nome}</p>
            )}

            <Botao texto = "Resolvido" 
            tipo = {TIPO_BOTAO.SECUNDARIO}
            onClick = {() => removerTarefa(id)} 
            />
        </li>
    )
}

export {ListaTarefasItem}