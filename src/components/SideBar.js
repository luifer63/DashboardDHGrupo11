import React from 'react';
//import image from '../assets/images/logo-DH.png';
import { Link, Routes, Route } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './CategoriesInDb';
import LastMovieInDb from './LastProductInDb';
//import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound'
import LastUserInDb from './LastUserInDb';
import ProductsInDb from './ProductsInDb';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';

function SideBar() {
    return (
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
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - EntreCasa</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                  {/*<!-- Nav Item - Pages -->*/}
                  <li className="nav-item">
                    <Link className="nav-link collapsed" to="/products">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastProduct">
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
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route path="/" element={<ContentWrapper />} />
                <Route path="/categories" element={<CategoriesInDb />} />
                <Route path="/products" element={<ProductsInDb />} />
                <Route path="/lastProduct" element={<LastProductInDb />} />
                <Route path="/lastUser" element={<LastUserInDb />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </React.Fragment>
    )
}
export default SideBar;