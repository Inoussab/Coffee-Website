import "../css/main.css";

const shopContainer = document.querySelector("#shop");

async function fetchProducts() {
  const response = await fetch("../products.json");
  const products = await response.json();
  console.log(products);

  const productsHtml = products
    .map(
      (product) => `
      <figure class="produkt o-margin-big">
      <img
        src="../img/coffee-costa-rica.png"
        alt="coffee-bag"
        class="produkt__img gray-background"
      />
      <p class="produkt__name">${product.productName}</p>
      <p class="produkt__preis">${product.minPrice}€ – ${product.maxPrice}€</p>
      <img
        src="../img/Icon Kaffee Bohnen.svg"
        alt=""
        class="produkt__icon icon-black"
      />
      <img src="../img/Icon French Press.svg" alt="" class="produkt__icon icon-black" />
      <img
        src="../img/Icon Kaffee Schaufel.svg"
        alt=""
        class="produkt__icon icon-black"
      />
    </figure>
   `
    )
    .join("");

  console.log(productsHtml);
  shopContainer.innerHTML = productsHtml;
}
fetchProducts();
