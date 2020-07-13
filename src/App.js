import React,{Fragment, useState, useEffect}  from 'react';
import Pregunta from './componets/Pregunta';
import Formulario from './componets/Formulario';
import Listado from './componets/Listado';
import ControlPresupuesto from './componets/ControlPresupuesto';

function App() {

  //State presupuesto
  const[presupuesto,actualizarPresupuesto]= useState(0);

  //State Resto
  const [resto,actualizarResto]= useState(0);

  // State para carga de componentes
  const[mostrarComponente,actualizarComponente] =useState(true);

  //State para agregar gastos
  const[gastos,guardarGastos]=useState([]);

  //State para actualizar el resto (objeto que contiene info de gasto)

  const[gasto, guardarGasto]= useState({});

  //State para que se muestre gasto una vez que se haya oprimido el boton agregar gasto y no antes
  const[crearGasto, guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
useEffect(()=>{
  if(crearGasto){

    //Agrega el nuevo gasto 
    guardarGastos([...gastos,gasto]);

  //Actualiza el presupuesto
  const presupuestoNuevo= resto - gasto.monto;
  actualizarResto(presupuestoNuevo);

  // resetear el state
    guardarCrearGasto(false);

  
  } 
  
},[gasto,crearGasto,gastos,resto]);



  //Funcion que se ajecuta al guardar un gasto, COMENTAMOS ESTA FUNCION PORQUE AHORA NECESITAMOS QUE 
  // CADA QUE SE SE GUARDE UN GASTO SE ACTULICE EL RESTANTE
  // const agregarNuevoGasto = gasto =>{
  //   guardarGastos([...gastos,gasto]);
    
  // }

  return (
    <Fragment>
   <div>
            <header>
                  <h1>Gasto semanal</h1>
                  
                  <div className="contenido-principal contenido">

                    {/* Para mostra diferentes componentes */}
                  {mostrarComponente ?
                  (
                    <Pregunta
                    actualizarPresupuesto={actualizarPresupuesto}
                    actualizarResto={actualizarResto}
                    actualizarComponente={actualizarComponente}/> 
              
                  )
                  :
                  (
                    <div className="row">
                        <div className="one-half column">
                           <Formulario
                           guardarGasto={guardarGasto}
                           guardarCrearGasto={guardarCrearGasto}/>
                        </div>                 
                        <div className="one-half column">
                        <Listado
                        gastos={gastos}/>
                        
                         <ControlPresupuesto
                        presupuesto={presupuesto}
                        resto={resto}/>
                        </div>
                       
                    </div>                    
                  
                  )
                   }
                 </div>
               
            </header>
    </div>
   </Fragment>
  );
}

export default App;
