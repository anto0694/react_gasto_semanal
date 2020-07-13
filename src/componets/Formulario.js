import React , {Fragment,useState}from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    //State para descripcion gasto
    const[nombregasto,guardarNombreGasto]=useState('');

    //State para monto gasto
    const [monto,guardarMonto]=useState(0);

    //State para error campos vacios
     const[error,guardarError] = useState(false);


    //Funcion que se ejecuta para agregar un gasto
    const agregarGasto = e =>{
        e.preventDefault();

        //Validar Campos
       
        if(monto<1 || isNaN(monto) || nombregasto.trim() === ''){
                guardarError(true);
                return;   
        }
    
        guardarError(false);
        //Construir un gasto
        const gasto ={
            nombregasto,
            monto,
            id: shortid.generate()         
        }   
        //Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear formulario (gasto y monto)
        guardarNombreGasto('');
        guardarMonto(0);
        
    }

    return (
        <Fragment>
        <h2>Agrega tus datos aquí</h2>
        {error? <Error mensaje ="Ambos campos son obligatorios ó el monto ingresado no es válido"/>:null}

        <form onSubmit={agregarGasto}> 
            <div className="campo">
            <label>Descripción gasto:</label>
            <input
            type= "text"
            className="u-full-width"
            placeholder="Ej. Supermercado"
            value={nombregasto}
            onChange={e=>guardarNombreGasto(e.target.value)}>
            

            </input>
            </div>

            <div className="campo">
            <label>Monto gasto:</label>
            <input
            type= "number"
            className="u-full-width"
            placeholder="Ej. 300" 
                   
            onChange={e=>guardarMonto(parseInt(e.target.value))}>

            </input>
            </div>
            <input
                type= "submit"
                className="button-primary u-full-width"
                value="Agregar gasto">
                </input>
           
        </form>
        </Fragment>
        

      );

}
Formulario.propTypes={
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;