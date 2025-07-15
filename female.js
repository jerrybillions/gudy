
const products = [
    {
      name: "Floral Summer Dress",
      price: "$49",
      image: "https://via.placeholder.com/200x250?text=Summer+Dress",
      link: "#"
    },
    {
      name: "Elegant Blouse",
      price: "$35",
      image: "https://via.placeholder.com/200x250?text=Elegant+Blouse",
      link: "#"
    },
    {
      name: "Denim Skirt",
      price: "$40",
      image: "https://via.placeholder.com/200x250?text=Denim+Skirt",
      link: "#"
    },
    {
      name: "Women's Jacket",
      price: "$85",
      image: "https://via.placeholder.com/200x250?text=Women's+Jacket",
      link: "#"
    }
  ];
  
  const container = document.getElementById('product-list');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-title">${product.name}</div>
      <div class="product-price">${product.price}</div>
      <a class="product-link" href="${product.link}">Buy Now</a>
    `;
    container.appendChild(card);
  });
  