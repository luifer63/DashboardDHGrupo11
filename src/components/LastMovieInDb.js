import React ,{ useState, useEffect } from 'react';
import image from '../assets/images/logo-DH.png';
const ruta = '../../../grupo_11_tienda_online/public/images/product-images/';



function LastMovieInDb(){

  const [productSt, setProduct] = useState(async ()=> {
    try {
        const response = await fetch('api/products/detail/609' , 
        {
            method: 'GET',
            headers: {
            accept: 'application/json',
            }
        })
        const json = await response.json()
        if (response.ok) {                
            setProduct(json.data)
        }
   
    } catch (error) {
        console.log(error);            
    }
  });

  useEffect( () => {    
    console.log("Actualizando")          
   }, [productSt])

   let test = ruta + ruta + productSt.images;

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={image} alt=""/>
                    </div>
                <div className="m-0 font-weight-bold text-gray-800">
                    <p>Nombre: {productSt.product_name}</p>
                    <p>Descripción: {productSt.description}</p>
                    <p>Colores: {productSt.colors?.map(color => <li>{color.name}</li>)}</p>
                    <p>Talles: {productSt.sizes?.map(size => <li>{size.name}</li>)}</p>
                    <p>Precio: {productSt.price}</p>             
                </div>    
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
