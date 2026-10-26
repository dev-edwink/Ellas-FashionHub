// Search Toggle
const searchToggle = document.getElementById("searchToggle");
const searchDropdown = document.getElementById("searchDropdown");
const products = document.getElementById("products");

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
      "https://dummyjson.com/products?limit=4&skip=10&select=title,price,thumbnail,description",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let product = data.products;

        product.forEach((product) => {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = `<div
                                  class="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden h-157.5 flex flex-col justify-between">
                                  <div class="px-4 py-3 flex justify-between gap-4 flex-wrap sm:px-6">
                                      <h3 class="text-slate-900 text-base font-semibold">${product.title}</h3>
                                  </div>

                                  <div class="aspect-3/2 w-full bg-gray-50">
                                      <img src="${product.thumbnail}" class="w-full h-fit object-cover" alt="Card image" />
                                  </div>

                                  <div class="p-4 sm:p-6">
                                      <p class="text-sm text-slate-600 leading-relaxed">${product.description}</p>

                                      <div class="mt-6 flex justify-between items-center gap-4 flex-wrap">
                                        <span class="text-xl text-slate-900 font-bold">$${product.price}</span>
                                        <button id="cartButton"
                                            class="inline-block py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                            Add to Cart
                                        </button>
                                      </div>
                                  </div>
                                </div>`;
          products.append(newDiv);
        });
      });
  } catch (error) {
    console.error(error.message);
  }
}

getProducts();
