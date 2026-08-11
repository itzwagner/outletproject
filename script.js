// Database with strictly segregated products for Men and Women
const products = [
    // --- MEN PRODUCTS ---
    { id: 1, gender: 'men', category: 'watches', title: 'Chronograph Black Steel Watch', price: 299.00, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', desc: 'Precision movement with luxury black stainless steel casing.' },
    { id: 2, gender: 'men', category: 'watches', title: 'Classic Leather Automatic Watch', price: 340.00, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600', desc: 'Swiss automatic movement with genuine brown leather strap.' },
    { id: 3, gender: 'men', category: 'glasses', title: 'Aviator Dark Sunglasses', price: 120.00, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600', desc: 'Polarized lenses with classic gold frame.' },
    { id: 4, gender: 'men', category: 'shirts', title: 'Slim Fit Oxford Cotton Shirt', price: 85.00, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600', desc: '100% Egyptian cotton breathable business shirt.' },
    { id: 5, gender: 'men', category: 'shirts', title: 'Streetwear Graphic Tee', price: 45.00, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600', desc: 'Heavyweight organic cotton shirt with minimal embroidery.' },
    { id: 6, gender: 'men', category: 'suits', title: 'Charcoal Grey Italian Suit', price: 490.00, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600', desc: 'Tailored fit suit made with fine virgin wool.' },
    { id: 7, gender: 'men', category: 'shoes', title: 'Leather Oxford Dress Shoes', price: 210.00, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600', desc: 'Handcrafted Italian leather dress shoes.' },
    { id: 8, gender: 'men', category: 'shoes', title: 'Retro Minimalist Sneakers', price: 130.00, img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600', desc: 'Clean white leather sneakers for daily wear.' },
    { id: 9, gender: 'men', category: 'shorts', title: 'Tailored Chino Shorts', price: 60.00, img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600', desc: 'Comfortable stretch cotton chino shorts.' },
    { id: 10, gender: 'men', category: 'perfumes', title: 'Woody Oak Eau de Parfum 100ml', price: 115.00, img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600', desc: 'Intense masculine notes of cedarwood and amber.' },

    // --- WOMEN PRODUCTS ---
    { id: 11, gender: 'women', category: 'dresses', title: 'Silk Slip Evening Dress', price: 240.00, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600', desc: '100% pure silk elegant midi dress.' },
    { id: 12, gender: 'women', category: 'dresses', title: 'Floral Summer Wrap Dress', price: 95.00, img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600', desc: 'Lightweight linen dress ideal for warm days.' },
    { id: 13, gender: 'women', category: 'bags', title: 'Structured Leather Handbag', price: 310.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600', desc: 'Iconic shape with gold hardware detail.' },
    { id: 14, gender: 'women', category: 'bags', title: 'Minimalist Crossbody Bag', price: 180.00, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600', desc: 'Compact genuine leather shoulder bag.' },
    { id: 15, gender: 'women', category: 'shoes', title: 'Classic Pointed Stiletto Pumps', price: 195.00, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600', desc: 'Timeless suede high heels.' },
    { id: 16, gender: 'women', category: 'shoes', title: 'Platform Leather Sandals', price: 110.00, img: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600', desc: 'Modern and ergonomic leather sandals.' },
    { id: 17, gender: 'women', category: 'glasses', title: 'Cat-Eye Acetate Sunglasses', price: 105.00, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600', desc: 'Chic cat-eye design with UV400 lenses.' },
    { id: 18, gender: 'women', category: 'watches', title: 'Rose Gold Mesh Watch', price: 210.00, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', desc: 'Elegant slim profile watch in rose gold.' },
    { id: 19, gender: 'women', category: 'shorts', title: 'High-Waisted Denim Shorts', price: 55.00, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600', desc: 'Vintage wash rigid denim shorts.' }
];

// Subcategories Configuration
const subcategories = {
    men: [
        { id: 'all', label: 'All Men' },
        { id: 'watches', label: 'Watches' },
        { id: 'glasses', label: 'Glasses' },
        { id: 'shirts', label: 'Shirts & Tees' },
        { id: 'suits', label: 'Suits' },
        { id: 'shoes', label: 'Shoes & Sneakers' },
        { id: 'shorts', label: 'Shorts' },
        { id: 'perfumes', label: 'Perfumes' }
    ],
    women: [
        { id: 'all', label: 'All Women' },
        { id: 'dresses', label: 'Dresses' },
        { id: 'bags', label: 'Bags & Purses' },
        { id: 'shoes', label: 'Shoes & Heels' },
        { id: 'glasses', label: 'Glasses' },
        { id: 'watches', label: 'Watches' },
        { id: 'shorts', label: 'Shorts' }
    ]
};

let currentGender = 'men';
let currentSubcategory = 'all';
let cart = [];

// Functions
function selectGender(gender) {
    currentGender = gender;
    currentSubcategory = 'all';

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('hero-subtitle').innerText = `${gender.toUpperCase()}SWEAR COLLECTION`;
    renderSubcategories();
    renderProducts();
}

function renderSubcategories() {
    const container = document.getElementById('sub-nav');
    container.innerHTML = '';

    subcategories[currentGender].forEach(sub => {
        const btn = document.createElement('button');
        btn.className = `sub-btn ${sub.id === currentSubcategory ? 'active' : ''}`;
        btn.innerText = sub.label;
        btn.onclick = (e) => {
            currentSubcategory = sub.id;
            document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts();
        };
        container.appendChild(btn);
    });
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let filtered = products.filter(p => p.gender === currentGender);
    if (currentSubcategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentSubcategory);
    }

    document.getElementById('catalog-title').innerText = currentSubcategory === 'all' 
        ? `All ${currentGender === 'men' ? "Men's" : "Women's"} Products`
        : subcategories[currentGender].find(s => s.id === currentSubcategory).label;

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(product.id);
        card.innerHTML = `
            <img src="${product.img}" class="product-img">
            <div class="product-info">
                <div class="product-tag">${product.category}</div>
                <div class="product-title">${product.title}</div>
                <div class="product-price">$ ${product.price.toFixed(2)}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openModal(id) {
    const product = products.find(p => p.id === id);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${product.img}" class="modal-img">
        <div class="modal-details">
            <h2>${product.title}</h2>
            <div class="product-price" style="margin: 15px 0;">$ ${product.price.toFixed(2)}</div>
            <p style="font-size: 13px; color: #666; margin-bottom: 20px;">${product.desc}</p>
            <button class="btn-primary" onclick="addToCart(${product.id})">Add to Bag</button>
        </div>
    `;
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() { document.getElementById('product-modal').style.display = 'none'; }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }

function addToCart(id) {
    cart.push(products.find(p => p.id === id));
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
    document.getElementById('cart-count').innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-msg">Your bag is empty.</p>';
        document.getElementById('cart-total-price').innerText = '$ 0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}">
            <div class="cart-item-info">
                <div><b>${item.title}</b></div>
                <div>$ ${item.price.toFixed(2)}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
    });
    document.getElementById('cart-total-price').innerText = `$ ${total.toFixed(2)}`;
}

function checkout() {
    if (!cart.length) return alert('Your bag is empty!');
    alert('Redirecting to secure checkout...');
}

window.onload = () => {
    renderSubcategories();
    renderProducts();
};