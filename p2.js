const products = [
  { id: 1, name: "p1", price: 500, description: "soap" },
  { id: 2, name: "p2", price: 1200, description: "machine" },
  { id: 3, name: "p3", price: 999, description: "body wash" },
];

const cart = [];
function renderProducts() {
  const list = document.getElementById('product-list');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="showDetails(${p.id})">Details</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cart-count').textContent = cart.length;
  updateCart();
}

function updateCart() {
  const items = document.getElementById('cart-items');
  items.innerHTML = '';
  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = {item_name} - {item_price};
    items.appendChild(li);
  });
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

function checkout() {
  alert("Order placed successfully!");
  cart.length = 0;
  updateCart();
  document.getElementById('cart-count').textContent = 0;
  toggleCart();
}