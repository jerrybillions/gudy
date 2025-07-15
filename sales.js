const products = [
    { id: 1, name: 'T-Shirt', price: 19.99 },
    { id: 2, name: 'Jeans', price: 39.99 },
    { id: 3, name: 'Jacket', price: 59.99 }
  ];
  
  let cart = {};
  
  const productList = document.getElementById('product-list');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const cartSection = document.getElementById('cart-section');
  const checkoutMessage = document.getElementById('checkout-message');
  
  function renderProducts() {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    if (!cart[productId]) {
      cart[productId] = 1;
    } else {
      cart[productId]++;
    }
    updateCartDisplay();
  }
  
  function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;
  
    for (let id in cart) {
      const product = products.find(p => p.id == id);
      const qty = cart[id];
      const subtotal = qty * product.price;
      total += subtotal;
      count += qty;
  
      const li = document.createElement('li');
      li.textContent = `${product.name} x ${qty} = $${subtotal.toFixed(2)}`;
      cartItems.appendChild(li);
    }
  
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
  }
  
  document.getElementById('view-cart-btn').onclick = () => {
    cartSection.classList.toggle('hidden');
  };
  
  document.getElementById('checkout-btn').onclick = () => {
    cart = {};
    updateCartDisplay();
    cartSection.classList.add('hidden');
    checkoutMessage.classList.remove('hidden');
  };
  
  renderProducts();
  