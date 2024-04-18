
const productIdFromLocalStorage = localStorage.getItem('product-id');

const productDetailContainer = document.querySelector('#product-detail-container');
fetch(`https://fakestoreapi.com/products/${productIdFromLocalStorage}`)
    .then(response => response.json())
    .then((product) => {
        console.log("asdasdasdasd", product);
        const div = document.createElement('div');
        div.classList.add('detail-body');
        div.innerHTML = `
            <div class="user-infos">
                   <div class="user-avatar">
                       <img class="detail-image"src="${product.image}"></img>
                  </div>
                  <div class="user-name">${product.title}</div>
                  <p class="detail-description">${product.description}</p>
                  <button class="detail-btn">Sepete Ekle</button>
                 
          </div>`;
        productDetailContainer.appendChild(div);


    }).catch(error => console.log(error));