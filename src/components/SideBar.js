import React from 'react';
//import image from '../assets/images/logo-DH.png';
import { Link , Routes, Route} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
//import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound'
import LastUserInDb from './LastUserInDb';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        {/* <img className="w-100" src={image} alt="Digital House"/> */}
                        <label className="fs-1 fw-bold">EntreCasa</label>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - EntreCasa</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastMovie">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Produto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastUser">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Último Usuario</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route path = "/" element={ <ContentWrapper/> } />
                <Route path = "/genres" element={ <GenresInDb/> } />
                <Route path = "/lastMovie" element={ <LastMovieInDb/> } />
                <Route path = "/lastUser" element={ <LastUserInDb/> } />
                <Route path = "*" element={ <NotFound/> } />
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;