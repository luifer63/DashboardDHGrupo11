import React ,{useState, useEffect, useRef} from "react";
import Chart from './Chart'


function GenresInDb({passCategory}) {

  const [categories, setCategories] = useState([]);
  const [catKey, setCatKey] = useState(1);
  const categoryRef = useRef([]);
 

 


  useEffect(() => {
    fetch('api/products/categories',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => setCategories(data.data))
      .catch(err => console.log(err))
  }, [])

  // current document.querySelector("#content > div > dnpiv:nth-child(3) > div:nth-child(3) > div > div.card-body > div > div:nth-child(2) > div > button")

  passCategory = (event) => {
   
    event.preventDefault()
    let option = event.nativeEvent.path[0].attributes.key.value
    console.log(event.nativeEvent.path[0].attributes.key.value);
    //let keySel = option;
    setCatKey(option);
  }



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            {
              categories.map( (category, index)=> {
                return ( 
                      <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                              <button className="card-body hola" ref={e => categoryRef.current[category.id]=e} Key={category.id} onClick={passCategory}>{category.name}</button>
                             
                            </div>
                            
                      </div>
                      
                      )
              })
            }            
          </div>
        </div>
      </div>
      {console.log("Categoria chart ", catKey)}
      <Chart catChart = {catKey}/>
    </div>
  );
}

export default GenresInDb;
