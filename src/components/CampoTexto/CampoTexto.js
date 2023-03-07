
import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}...` 
  
  return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
  }

  export default CampoTexto


  //outra versão

  // import React from 'react'
  // import "./CampoTexto.css"
  // const CampoTexto = (props) => {
  //   // console.log(props)
  //   return (
  //     <div className="campo-texto">
  //         CampoTexto
      
  
  //     <label>{props.label}</label>
  //     <input placeholder={props.placeholder}/>
  //     </div>
  //   )
  // }
  
  // export default CampoTexto