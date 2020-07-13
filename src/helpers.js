export const revisarPresupuesto = (presupuesto, resto) =>{
    let clase;

    if ((presupuesto/4) > resto){
        clase="alert alert-danger";
            } else if ((presupuesto/2)> resto){
                clase="alert alert-warning";
            }else{
                clase= "alert alert-success";
            }

        return clase;

    
}