// Search Toggle
const searchToggle = document.getElementById("searchToggle");
const searchDropdown = document.getElementById("searchDropdown");
const products = document.getElementById("products");
let prodPage = document.getElementById("allProducts");

if (searchToggle && searchDropdown) {
  searchToggle.addEventListener("click", function () {
    searchDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !searchToggle.contains(event.target) &&
      !searchDropdown.contains(event.target)
    ) {
      searchDropdown.classList.add("hidden");
    }
  });
}

async function getProducts() {
  try {
    fetch(
      "https://dummyjson.com/products?limit=4&select=title,price,images,description",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let prod = data.products;

        prod.forEach((prod) => {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `
         <img src="${prod.images[0]}">
         <p class="my-2 font-bold text-[24px]">Title: ${prod.title}</p>
         <p class="my-2 font-semibold text-[20px]">Price: $${prod.price}</p>
         <p class="my-2 font-medium">Description: ${prod.description}</p>

        `;
          products.appendChild(newDiv);
        });
      });
  } catch (error) {
    console.error(error.message);
  }
}

async function getAllProducts() {
  try {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let products = data.products;

        products.forEach((product) => {
          let newDiv = document.createElement("div");
          newDiv.style.border = "2px";
          newDiv.style.borderColor = "#000000";

          newDiv.innerHTML = `
        <img src="${product.images[0]}">
        <p class="my-2 font-bold text-[24px]">Title: ${product.title}</p>
        <p class="my-2 font-medium">Description: ${product.description}</p>
        <p class="my-2 font-medium">Category: ${product.category}</p>
      `;
          prodPage.appendChild(newDiv);
        });
      });
  } catch (error) {
    console.error(error.message);
  }
}

getProducts();
getAllProducts();
