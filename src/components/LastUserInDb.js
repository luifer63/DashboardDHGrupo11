import React ,{ useState, useEffect, useRef } from 'react';
import image from '../assets/images/logo-DH.png';
import NotFound from './NotFound';
const ruta = './images/users/';



function LastUserInDb(){

  const [userSt, setUserSt] = useState();
  const dataFetchedRef = useRef(false);

  let fetchData = () => {
        console.log('llamando API');
        fetch('api/users/last',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("respuesta API");
                setUserSt(data.data)})
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


    
        let imagenes = userSt && userSt.profile_photo;
        let testImg = ruta + imagenes; 
        console.log("mi ruta user",testImg);
        
        
     try {
        return(
            <div  className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último Usuario</h5>
                    </div>
                    <div className="card-body">
                    
                    <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={testImg} alt=""/>
                        </div>
                    <div className="m-0 font-weight-bold text-gray-800">
                        <p>Nombre: {userSt.name}</p>
                        <p>Apellido: {userSt.description}</p>
                        <p>Teléfono: {userSt.phone}</p>
                        <p>Email: {userSt.phone}</p>                        
                        <p>Direccion: {userSt.address}</p>             
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
    
    
   
    

export default LastUserInDb;
