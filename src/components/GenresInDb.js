import React ,{useState, useEffect, useRef} from "react";
import Chart from './Chart'


function GenresInDb({passCategory}) {

  const [categories, setCategories] = useState([]);
  const [catKey, setCatKey] = useState(0);
  let categoryRef = useRef([]);


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
    let option = event.target.dataset.key;
    let keySel = option;
    setCatKey(keySel);
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
              categories.map( (category)=> {
                return ( 
                      <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                              <button className="card-body hola" data-key = {category.id} ref={categoryRef} Key={category.id} onClick={passCategory}>{category.name}</button>
                             
                            </div>
                            
                      </div>
                      
                      )
              })
            }            
          </div>
        </div>
      </div>
      <Chart catKey = {catKey}/>
    </div>
  );
}

export default GenresInDb;
