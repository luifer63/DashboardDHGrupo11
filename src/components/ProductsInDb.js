import React ,{useState, useEffect} from "react";


function ProductsInDb() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('api/products/products',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            {
              products.map( product => {
                return ( 
                      <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                              <div className="card-body" key={product.id}>{product.name}</div>
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

export default ProductsInDb;
