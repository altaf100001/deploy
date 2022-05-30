import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra

  const [pro,newpro] = React.useState({
   
    title: "",
    category: "",
    gender: "",
    imageSrc: "https://picsum.photos/seed/picsum6/420/260",
    price: ""
  })


  const handleclick=(e) => {

    // console.log(e)
  
  let {name,value} = e.target

  newpro({
    ...pro,
    [name]:value
  })
  }
// console.log(pro)

const add_product_to_data =(e)=>{
e.preventDefault()

fetch("http://localhost:8080/products",{
  method:"POST",
  body:JSON.stringify({
    ...pro
  }),
  headers:{
    "content-type":"application/json"
  }
})



}



  return (
    <>
    <form  onSubmit={add_product_to_data}>
      <h1>Add NEW Product</h1>

<label htmlFor="">title</label>
<input type="text" placeholder="Title" name = "title" onChange={handleclick}  value={pro.title}/><br/><br/>

<select name="category" id="" onChange={handleclick} value={pro.category}>
<option value="">Category</option>
<option value="Shirt">Shirt</option>
<option value="Pant">Pant</option>
<option value="jeans">jeans</  option>


</select><br/><br/>

<label htmlFor="">Gender</label><br/>
<input type="radio" name = "gender" onChange={handleclick} value="male"/>Male     <input type="radio" name = "gender" onChange={handleclick} value="female"/>Female  <input type="radio" name = "gender" onChange={handleclick} value = "Unisex"/>Unisex <br/><br/>

<label htmlFor="">Price</label>
<input type="number" name="price"  placeholder="Price"  onChange={handleclick} value={pro.price}/>

<button type="submit" >Submit</button>
    </form>
    </>
  );
};

export default AddProduct;
