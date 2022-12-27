import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import LastUserInDb from './LastUserInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(props){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            <LastUserInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />
           
            
        </div>
    )
}

export default ContentRowCenter;