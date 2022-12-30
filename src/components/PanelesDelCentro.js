import React from 'react';
import LastMovieInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            <LastUserInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            
        </div>
    )
}

export default ContentRowCenter;