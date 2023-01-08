import React, { createContext, useEffect, useState } from 'react'
const Shopping = (props) => {


   const cartContext = createContext();

  const [data,setData] = useState([]);
  
  const getData = async () => {
    let response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    let parseData = await response.json();
      setData(parseData);
  }

  useEffect(()=>{
    getData();
  },[]);

  const cartItems = ((urlImg,price) => {
    <cartContext.Provider value={{slectcurItem}}>
    {props.children}
</cartContext.Provider>
    const slectcurItem = {
      urlImg:urlImg,
      price:price
     }
  });

  return (
    <div>
      <h1 className='text-center'>Shop Now</h1>
     <div className="container">
      <div className="row">
      {
        data.map((element)=>{
          return(
            <>
            <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
              <img src={element.image} className="card-img-top" style={{height:"200px"}} alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{element.category}</h5>
                <p className="card-text">{element.description.slice(0,50)}</p>
                <b>Price : ${element.price}</b><br /><br />
                <a href="#" className="btn btn-primary" onClick={()=>{cartItems(element.image, element.price)}}>Add to Cart</a>
              </div>
           </div>
            </div>
            </>
          )
        })
      }
      </div>
     </div>
    </div>
  )
}

export default Shopping