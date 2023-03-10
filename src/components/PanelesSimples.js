import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- PRODUCTOS --> */

let productsQuantity = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- CATEGORIAS --> */

let categoriesQuantity = {
    title:' Total de Categorias', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- USUARIOS --> */

let usersQuantity = {
    title:'Total de Usuarios' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsQuantity, categoriesQuantity, usersQuantity];

function PanelesSimples(){
const [cuantityUsers, setCuantityUsers] = useState([]);
const [cuantityProducts, setCuantityProducts] = useState([]);
const [cuantityCategories, setCuantityCategories] = useState([]);

useEffect( () => {

    const usersFetch = async () => {
        
        const response = await fetch('api/users')
        const json = await response.json()
        if (response.ok) {
            
            setCuantityUsers(json.meta.total_users)
        }
        
    }
usersFetch()    

}, [cuantityUsers]);

useEffect( () => {

    const productsFetch = async () => {
        
        const response = await fetch('api/products/list')
        const json = await response.json()
        if (response.ok) {
            
            setCuantityProducts(json.meta.total)
        }
        
    }
productsFetch()    

}, [cuantityProducts]);

useEffect( () => {

    const categoriesFetch = async () => {
        
        const response = await fetch('api/products/categories')
        const json = await response.json()
        if (response.ok) {
            
            setCuantityCategories(json.meta.total)
        }
        
    }
categoriesFetch()    

}, [cuantityCategories]);


usersQuantity.cuantity = cuantityUsers;
productsQuantity.cuantity = cuantityProducts;
categoriesQuantity.cuantity = cuantityCategories;

    return (
    
        <div className="row">
            
            {cartProps.map( (producto, i) => {

                return <SmallCard {...producto} key={i}/>
            
            })}

        </div>
    )
}

export default PanelesSimples;