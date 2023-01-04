import React from 'react';


function ChartRow(props){
    console.log("mi props:", props);
    try {
        return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>                                
            </tr>
        )

        
    } catch (error) {
        console.log("mi error:", error);
        return <div className='card-body'>Cargando...</div>
    }
}
export default ChartRow;