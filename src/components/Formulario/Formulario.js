import React from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import "./Formulario.css"
function Formulario() {
  return (
    <section className='formulario'>

        <form>
      <CampoTexto label="Nome" placeholder="digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="digite o endereço da imagem"/>
     
        </form>
    </section>
  )
}

export default Formulario