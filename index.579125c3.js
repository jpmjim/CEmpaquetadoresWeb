const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=5&limit=10";
const main = async ()=>{
    // llamando a la API
    const response = await fetch(API);
    const products = await response.json();
    const output = products?.map((product)=>{
        return `
      <article class="Card">
        <img src="${product.images}">
        <h2>
          ${product.title} <small>Precio $ ${product.price}</small>
        </h2>
      </article>
    `;
    }).join("");
    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;
    $app.appendChild(newItem);
};
main();

//# sourceMappingURL=index.579125c3.js.map
