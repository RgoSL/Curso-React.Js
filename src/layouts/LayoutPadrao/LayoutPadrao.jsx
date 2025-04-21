import { Outlet } from "react-router-dom"

import { Cabecalho, Conteudo, Rodape } from "../../components"

import { useAppContext } from "../../hooks"

const LayoutPadrao = () => {
  const { nomeCriador} = useAppContext()

    return (
      <>
        <Cabecalho nomeUsuario = "Mariana" />
        <Conteudo>
          <Outlet />
        </Conteudo>
        <Rodape nomeCriador = {nomeCriador} />  
      </>
    )
}

export { LayoutPadrao }