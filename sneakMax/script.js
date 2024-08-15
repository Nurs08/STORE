const produclist = document.getElementById("product-list");
const minprice = document.getElementById("min-price");
const maxprice = document.getElementById("max-price");
const applyButton = document.getElementById("apply-button");

const renderSneakers = (data) => {
for(let elem of data){
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<img src="img/${elem.img}" alt="${elem.name}" />
    <p>${elem.name}</p>
    <p>${elem.price} p</p>
    <button class="add-to-cart">add to cart</button>`
    
    produclist.append(div)
}
}

const filterSneakers = (data) => {
    let min = minprice.value;
    let max = maxprice.value;
    return data.filter((elem) => elem.price >= min && elem.price <= max);
}

fetch("https://85812cf4a9ce26da.mokky.dev/sneakers").then((res) =>{ return res.json()}).then((data) => {
    renderSneakers(data);
    applyButton.addEventListener("click", () => {
        produclist.innerHTML = "";
        let filteredData = filterSneakers(data);
        renderSneakers(filteredData);
    })
})
