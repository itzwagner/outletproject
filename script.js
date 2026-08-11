// Banco de dados de produtos gringos
const products = [
    {
        id: 1,
        title: "Tênis Streetwear Nike Dunk Low",
        category: "masculino",
        type: "Sapatos",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
        description: "Clássico do streetwear americano. Couro premium e conforto incomparável."
    },
    {
        id: 2,
        title: "Vestido de Seda Minimalista",
        category: "feminino",
        type: "Vestidos",
        price: 210.00,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
        description: "Modelagem fluida em seda natural italiana. Elegância atemporal."
    },
    {
        id: 3,
        title: "Terno Slim Fit Italiano",
        category: "masculino",
        type: "Ternos",
        price: 450.00,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
        description: "Corte impecável em lã fria. Ideal para eventos formais e negócios."
    },
    {
        id: 4,
        title: "Bolsa de Couro Luxury Handbag",
        category: "feminino",
        type: "Bolsas",
        price: 320.00,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        description: "Design moderno com acabamento artesanal em couro legítimo."
    },
    {
        id: 5,
        title: "Óculos de Sol Vintage Acetato",
        category: "masculino",
        type: "Óculos",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        description: "Lentes com proteção UV400 e armação em acetato polido à mão."
    },
    {
        id: 6,
        title: "Jaqueta Oversized Denim",
        category: "feminino",
        type: "Roupas",
        price: 135.00,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
        description: "Estilo urbano novaiorquino com lavagem vintage premium."
    },
    {
        id: 7,
        title: "Camisa Social Algodão Egípcio",
        category: "masculino",
        type: "Camisas",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        description: "Tecido respirável de alta durabilidade com ajuste tailored."
    },
    {
        id: 8,
        title: "SCARPING Leather High Heels",
        category: "feminino",
        type: "Sapatos",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
        description: "Salto alto clássico em couro, essencial no guarda-roupa."
    }
];

let cart = [];

// Renderizar Produtos no Catálogo
function renderProducts(items) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(product.id);

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <div class="product-category">${product.type}</div>
                <div class="product-title">${product.title}</div>
                <div class="product-price">$ ${product.price.toFixed(2)}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtrar Produtos
function filterProducts(category) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Modal do Produto
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <img src="${product.image}" class="modal-img">
        <div class="modal-details">
            <h2>${product.title}</h2>
            <div class="price">$ ${product.price.toFixed(2)}</div>
            <p>${product.description}</p>
            <button class="btn-primary" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Carrinho de Compras
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
    closeModal();
    toggleCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio.</p>';
        cartTotalPrice.innerText = '$ 0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$ ${item.price.toFixed(2)}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotalPrice.innerText = `$ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Redirecionando para o pagamento...');
}

// Inicializar
window.onload = () => {
    renderProducts(products);
};