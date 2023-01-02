import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import CategoriesInDb from './CategoriesInDb';

function PanelesDeDetalle(){
    return (
        <div className="row">            
            
            <LastProductInDb />
            <LastUserInDb />         
           

        </div>
    )
}

export default PanelesDeDetalle;