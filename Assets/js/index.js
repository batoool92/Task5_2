 const prev_arrow = document.querySelector('.left_button');
 const next_arrow = document.querySelector('.right_button');
 const cards = document.querySelector(".cards");
 const cards_array = document.querySelectorAll('.card');
 const card = 0;


fetch('https://dummyjson.com/products')
.then(response =>{
    return response.json();
}).then(response => {return response.products
}).then(data =>{
    var arrayOfProducts = getData(data);
       
        arrayOfProducts.forEach(item =>{   
        const img = document.createElement("img");
        img.classList = "w-100 h-100";
        img.src = item.images[0];
        const div_card = document.createElement("div")
        div_card.classList = "card m-4 p-2";

        const card_body = document.createElement("div");
        card_body.classList = "card-body p-0";
        const button = document.createElement("a");
        button.href = "#";
        button.innerText = "Add to Cart";
        button.classList = "w-100 text-light btn btn-dark";
        const div_card_desc = document.createElement("div");
        div_card_desc.classList = "p-1 d-flex flex-column align-items-center bg-light";
        const h5 = document.createElement("h5");
        h5.classList = "card-title";
        h5.innerText = item.title;
        const price = document.createElement("p");
        price.classList = "card-text text-danger";
        price.innerText = item.price;

        cards.append(div_card);
        div_card.append(img);
        div_card.append(card_body);
        card_body.append(button);
        card_body.append(div_card_desc);
        div_card_desc.append(h5);
        div_card_desc.append(price);
    

    });      
})

//function to get only 6 products
function getData(data) {
     let n = 6;
   var products = data.filter(item =>{
     return item.id <= n;
   })
   return products;
}

// prev_arrow.addEventListener('click', ()=>{
//  const cards_width = cards.clientWidth;
//  cards_width
 
// })

