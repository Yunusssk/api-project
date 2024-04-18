const myContainer = document.querySelector('.post-container');


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
        data.forEach((item) => {
            console.log(item);
            console.log(item.category);
            console.log(item.id);
            const div = document.createElement('div');
            div.classList.add('post-item');
            div.innerHTML = `
                <img src="${item.image}" class="post-image"></img>
                <h2 class="post-title">${item.title}</h2>
                <p class="post-description">${item.description}</p>
                <button class="get-profile" onclick="fetchProduct()">Ürün Detayı</button>
                <label>Fiyat:</label>  <p class="post-price">${item.price}</p>
            `;
            myContainer.appendChild(div);
            div.addEventListener("click", function() {
       
                localStorage.setItem("product-id",item.id )
                window.location.href = "productDetail.html"
                
                })
        })
    
    }).catch(error => console.log(error));
    

    
    function filterProducts() {
        const categorySelect = document.getElementById('categorySelect');
        const selectedCategory = categorySelect.value;
    
        if (selectedCategory === 'all') {
            fetchProducts().then(displayProducts);
        } else {
            fetchProductsByCategory(selectedCategory).then(displayProducts);
        }
    }
    
    // Sayfa yüklendiğinde tüm ürünleri görüntüle
    window.onload = filterProducts;