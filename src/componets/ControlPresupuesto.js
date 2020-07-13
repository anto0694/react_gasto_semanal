import React, {Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, resto}) => {
    return (
        <Fragment>
            <div className= "alert alert-primary">
                Presupuesto Inicial: ${presupuesto}
            </div>
            
            <div className= {revisarPresupuesto(presupuesto,resto)}>
                Disponible: ${resto}
            </div>
        </Fragment>
      );
}
 ControlPresupuesto.propTypes={
     presupuesto: PropTypes.number.isRequired,
     resto: PropTypes.number.isRequired
 }
export default ControlPresupuesto;