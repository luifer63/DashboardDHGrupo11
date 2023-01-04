import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';



let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },

]


function Chart(props) {

    const [dataRow, setDataRow] = useState();

    useEffect(() => {
        checkCategory(props.catChart)
    }, [props.catChart])

    let checkCategory = ((catKey) => {
        console.log("mi ID ", catKey)
        fetch(`api/products/category/${catKey}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => setDataRow(data.data))
            .catch(err => console.log(err))

    })
    console.log("mi data: ", dataRow);

    try {

        return (<div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                dataRow?.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
    } catch (error) {
        return <div className='card-body'>Cargando...</div>
    }
}
export default Chart;