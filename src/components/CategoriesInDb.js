import React ,{useState, useEffect} from "react";


function CategoriesInDb() {

  const [categories, setCategories] = useState([]);

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
              categories.map( category => {
                return ( 
                      <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                              <div className="card-body" key={category.id}>{category.name}</div>
                            </div>
                      </div>
                      )
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
