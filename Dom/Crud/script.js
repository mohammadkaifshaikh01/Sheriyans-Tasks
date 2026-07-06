let creatBtn = document.querySelector("#create");
let formDiv = document.querySelector(".form");
let closeBtn = document.querySelector("#close");
let form = document.querySelector("form");
let product = document.querySelector(".product");
let ProductsArray = [];
let updateIndex = null;

//Showing product in ui
let userInterFace = () => {
  product.innerHTML = "";
  ProductsArray.forEach((elem , index) => {
    console.log(elem);
    product.innerHTML += `
  <div class="product-card">
            <div class="img">
               <img
                  src= ${elem.imageUrl}
                  alt="">
            </div>

            <div class="text">
               <h3>${elem.productName}</h3>
               <p>${elem.description}</p>
               <p>${elem.price}</p>
            </div>

            <div class="btns">
               <button onClick="updateProduct('${elem.productName}')" id="update">Edit</button>
               <button onClick="deleteProduct(${index})" id="delete">Delete</button>
            </div>
         </div>
`;
  });
};

//Showing Form
creatBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

//Close Form
closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

//Submiting Dataa
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //You Can Use Both event.target & form[0]

  // let productName =  form[0].value
  // let description =  form[1].value
  // let price =  form[2].value
  // let imageUrl = form[4].value

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let imageUrl = event.target[3].value;
  // console.log(productName ,price , description , imageUrl)

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    imageUrl.trim() === ""
  ) {
    alert("Input Will Not Be Empty");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    imageUrl,
  };

  if (updateIndex !== null) {
    ProductsArray[updateIndex] = obj
    updateIndex = null
  } else {
    ProductsArray.push(obj);
  }

  userInterFace();
  console.log(ProductsArray);

  form.reset();

  formDiv.style.display = "none";
});

//Update Logic
const updateProduct = (data) => {
  // console.log("Updating" ,data);
  formDiv.style.display = "flex";
  const updateData = ProductsArray.find((e) => e.productName === data);
  updateIndex = ProductsArray.findIndex((e) => e.productName === data);
  // console.log(updateData)
  form[0].value = updateData.productName;
  form[1].value = updateData.description;
  form[2].value = updateData.price;
  form[3].value = updateData.imageUrl;
};


const deleteProduct =  (index) => {
  ProductsArray.splice(index , 1)
  console.log(index)
  userInterFace()
}