import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({actualizarPresupuesto, actualizarResto,actualizarComponente}) => {

// Definir el state de presupuesto inicial
    const[cantidad,guardarCantidad]= useState(0);

// State para error
const[error,guardarError] = useState(false);

// Funcion que lee el presupuesto
    const definirPresupuesto= e=>{
    guardarCantidad(parseInt(e.target.value))
    }
// Subit para definir el presupuesto
const agregarPresupuesto = e =>{
    e.preventDefault();


//Validar campos
if(cantidad <1 || isNaN(cantidad)){
    guardarError(true);
    return;
}

//Si la validacion fue exitosa
guardarError(false);
actualizarPresupuesto(cantidad);
actualizarResto(cantidad);
actualizarComponente(false);

}
    

    return (
        <Fragment>
            <h2>Coloca tu presupuesto </h2>
            {error ? <Error mensaje="El valor ingresado no es válido"/> : null}

            <form onSubmit={agregarPresupuesto}> 
                <input
                type="number"
                className="u-full-width"
                placeholder= "Coloca tu presupuesto"
                onChange={definirPresupuesto}>
                    
                </input>

                <input
                type= "submit"
                className="button-primary u-full-width"
                value="Definir presupuesto">
                </input>
            </form>
        </Fragment>
      );
}
 Pregunta.propTypes={
    actualizarPresupuesto: PropTypes.func.isRequired,
    actualizarResto: PropTypes.func.isRequired,
    actualizarComponente: PropTypes.func.isRequired
 }
export default Pregunta;
