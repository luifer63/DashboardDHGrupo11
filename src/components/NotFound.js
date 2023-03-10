import React from 'react';
import imagenFondo from '../assets/images/darth-vader.jpg';

function LastMovieInDb(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">Not Found 404</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="Not Found 404"/>
                    </div>
                    <p>Error: {props.error}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
