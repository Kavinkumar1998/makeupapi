async function makeUp(){
    try{
        let url="https://makeup-api.herokuapp.com/api/v1/products.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
       for( var i=0;i<100;i++) {
                var box= document.querySelector(".row");
                   box.innerHTML += `
                   <div class="col-sm-6 col-md-3 col-lg-5 col-xl-4">
                   <div class="card">
                   <img src="${data[i].image_link}" class="card-img-top" alt="${data[i].name}"/>
                   <div class="card-text"> 
                   <div class="brand">Brand Name:<span>${data[i].brand}</span></div>
                    <div class="Name">Product:<span>${data[i].name}</span><div>
                    <div class="productType">Type:<b>${data[i].product_type}</b></div>
                    <div class="price"><span>Price</span> ${data[i].price}${data[i].price_sign}</div><br>
                    <div class="productlink">Link :<a> ${data[i].product_link}</a></div><br>
                    <div class="description">Description :<p> ${data[i].description}</p></div><br>
                    </div>
                    </div>
                `
        }
    }
    catch(error){
        console.log(error)
    }

}

var search= ()=>{
var searching= document.querySelector(".input").value.toUpperCase();
var allboxes= document.querySelectorAll(".row");
var ProductTypes= document.getElementsByTagName("b");
for(var i=0;i<ProductTypes.length;i++){
    var matchingProduct= ProductTypes[i].outerText;
    if(matchingProduct.toUpperCase().indexOf(searching)>-1){
        allboxes[i].style.display="";

}
else{
    allboxes[i].style.display="none";

}
}
}

makeUp();