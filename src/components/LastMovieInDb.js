import React ,{ useState, useEffect, useRef } from 'react';

import NotFound from './NotFound';
const ruta = './images/product-images/'
const noImage = 'no_image.png'


function LastMovieInDb(){

  const [productSt, setProductSt] = useState();
  const dataFetchedRef = useRef(false);

  let fetchData = () => {
        console.log('llamando API');
        fetch('api/products/last',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("respuesta API", data);
                setProductSt(data.data)})
            .catch(err => console.log(err))
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=> {
    console.log(dataFetchedRef.current);
     if (dataFetchedRef.current) 
         return;
	
    dataFetchedRef.current = true;	
    fetchData();                
    },[])

    console.log("mi producto ", productSt);
    let testImg = '';

    try {
        let imagenes = productSt && productSt?.images.map(imagen => imagen);
        testImg = imagenes && ruta +  imagenes[0].name;
        console.log("mi ruta",testImg);
        
    } catch (error) {
        testImg = ruta + noImage        
    }
        
        
        
     try {
        return(
            <div  className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                    </div>
                    <div className="card-body">
                    
                    <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={testImg} alt=""/>
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
        
     } catch (error) {
         console.log('llego al catch', error);
         return(<NotFound />)         
     }
    
}
    
    
   
    


export default LastMovieInDb;
