import { useState } from 'react'
import { Botao, CampoTexto, Loading } from '../../components'

import style from './FormTarefa.module.css'
import { useAppContext } from '../../hooks'

const FormCriarTarefa = () => {
    const {addTarefa, loadingCriar} = useAppContext()

    const [nomeTarefa, setNomeTarefa] = useState('') 

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)

    }

    const enviarTarefa = (event) => {
        event.preventDefault()

        if(!nomeTarefa) {
            return
        }

        addTarefa(nomeTarefa)

        setNomeTarefa('')
    }

    return (
        <form className={style.FormTarefa} onSubmit={enviarTarefa}>
            <CampoTexto 
            value = {nomeTarefa} 
            onChange = {onChangeNomeTarefa}
             />
           <Botao texto = {loadingCriar ? <Loading /> : 'Criar' } />
        </form>
    )
}

export {FormCriarTarefa} 