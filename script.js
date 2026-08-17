// --- 1. DATA: 60 Products (30 Men, 30 Women) ---
const PRODUCTS = [
    // --- MEN'S ---
    { id: 1, name: "Classic Oxford Shirt", cat: "men", sub: "Tops", price: 45.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Oxford+Shirt", rating: 4.8, reviews: 124 },
    { id: 2, name: "Premium Polo T-Shirt", cat: "men", sub: "Tops", price: 35.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Polo+T-Shirt", rating: 4.5, reviews: 89 },
    { id: 3, name: "Basic Crewneck Tee", cat: "men", sub: "Tops", price: 20.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Crewneck+Tee", rating: 4.6, reviews: 210 },
    { id: 4, name: "Casual Denim Jacket", cat: "men", sub: "Outerwear", price: 75.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Denim+Jacket", rating: 4.9, reviews: 340 },
    { id: 5, name: "Fleece Hoodie", cat: "men", sub: "Outerwear", price: 55.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Fleece+Hoodie", rating: 4.7, reviews: 150 },
    { id: 6, name: "Knit Sweater", cat: "men", sub: "Tops", price: 60.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Knit+Sweater", rating: 4.4, reviews: 67 },
    { id: 7, name: "Tailored Navy Blazer", cat: "men", sub: "Outerwear", price: 150.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Navy+Blazer", rating: 5.0, reviews: 45 },
    { id: 8, name: "Plaid Flannel Shirt", cat: "men", sub: "Tops", price: 40.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Flannel+Shirt", rating: 4.6, reviews: 112 },
    { id: 9, name: "Sleeveless Tank Top", cat: "men", sub: "Tops", price: 18.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Tank+Top", rating: 4.2, reviews: 54 },
    { id: 10, name: "Vintage Leather Jacket", cat: "men", sub: "Outerwear", price: 195.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Leather+Jacket", rating: 4.9, reviews: 205 },
    
    { id: 11, name: "Slim Fit Jeans", cat: "men", sub: "Bottoms", price: 65.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Slim+Jeans", rating: 4.7, reviews: 320 },
    { id: 12, name: "Classic Chinos", cat: "men", sub: "Bottoms", price: 50.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Chinos", rating: 4.5, reviews: 198 },
    { id: 13, name: "Cargo Pants", cat: "men", sub: "Bottoms", price: 55.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Cargo+Pants", rating: 4.4, reviews: 76 },
    { id: 14, name: "Athletic Joggers", cat: "men", sub: "Bottoms", price: 45.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Joggers", rating: 4.8, reviews: 145 },
    { id: 15, name: "Summer Shorts", cat: "men", sub: "Bottoms", price: 30.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Summer+Shorts", rating: 4.3, reviews: 88 },
    { id: 16, name: "Formal Dress Pants", cat: "men", sub: "Bottoms", price: 80.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Dress+Pants", rating: 4.9, reviews: 60 },
    { id: 17, name: "Swim Trunks", cat: "men", sub: "Bottoms", price: 25.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Swim+Trunks", rating: 4.6, reviews: 90 },
    { id: 18, name: "Track Pants", cat: "men", sub: "Bottoms", price: 40.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Track+Pants", rating: 4.5, reviews: 110 },
    { id: 19, name: "Straight Leg Khakis", cat: "men", sub: "Bottoms", price: 50.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Khakis", rating: 4.7, reviews: 130 },
    { id: 20, name: "Ripped Denim Jeans", cat: "men", sub: "Bottoms", price: 70.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Ripped+Jeans", rating: 4.8, reviews: 215 },
    
    { id: 21, name: "White Leather Sneakers", cat: "men", sub: "Shoes & Acc", price: 90.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Sneakers", rating: 4.9, reviews: 400 },
    { id: 22, name: "Chelsea Boots", cat: "men", sub: "Shoes & Acc", price: 120.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Chelsea+Boots", rating: 4.8, reviews: 155 },
    { id: 23, name: "Classic Oxfords", cat: "men", sub: "Shoes & Acc", price: 140.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Oxfords", rating: 4.9, reviews: 80 },
    { id: 24, name: "Suede Loafers", cat: "men", sub: "Shoes & Acc", price: 110.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Loafers", rating: 4.7, reviews: 95 },
    { id: 25, name: "Minimalist Watch", cat: "men", sub: "Shoes & Acc", price: 150.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Watch", rating: 4.8, reviews: 210 },
    { id: 26, name: "Leather Belt", cat: "men", sub: "Shoes & Acc", price: 35.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Leather+Belt", rating: 4.6, reviews: 140 },
    { id: 27, name: "Aviator Sunglasses", cat: "men", sub: "Shoes & Acc", price: 85.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Aviator+Glasses", rating: 4.9, reviews: 310 },
    { id: 28, name: "Bifold Wallet", cat: "men", sub: "Shoes & Acc", price: 40.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Wallet", rating: 4.7, reviews: 180 },
    { id: 29, name: "Silk Tie", cat: "men", sub: "Shoes & Acc", price: 25.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Silk+Tie", rating: 4.5, reviews: 60 },
    { id: 30, name: "Running Shoes", cat: "men", sub: "Shoes & Acc", price: 115.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Running+Shoes", rating: 4.8, reviews: 290 },

    // --- WOMEN'S ---
    { id: 31, name: "Floral Summer Dress", cat: "women", sub: "Dresses", price: 55.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Summer+Dress", rating: 4.7, reviews: 190 },
    { id: 32, name: "Elegant Evening Gown", cat: "women", sub: "Dresses", price: 180.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Evening+Gown", rating: 4.9, reviews: 115 },
    { id: 33, name: "Midi Slip Dress", cat: "women", sub: "Dresses", price: 65.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Slip+Dress", rating: 4.6, reviews: 140 },
    { id: 34, name: "Silk Blouse", cat: "women", sub: "Tops", price: 70.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Silk+Blouse", rating: 4.8, reviews: 90 },
    { id: 35, name: "Cotton V-Neck Tee", cat: "women", sub: "Tops", price: 25.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=V-Neck+Tee", rating: 4.5, reviews: 260 },
    { id: 36, name: "Ribbed Crop Top", cat: "women", sub: "Tops", price: 22.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Crop+Top", rating: 4.6, reviews: 180 },
    { id: 37, name: "Chunky Knit Cardigan", cat: "women", sub: "Outerwear", price: 65.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Cardigan", rating: 4.9, reviews: 220 },
    { id: 38, name: "Oversized Blazer", cat: "women", sub: "Outerwear", price: 95.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Oversized+Blazer", rating: 4.8, reviews: 175 },
    { id: 39, name: "Basic Camisole", cat: "women", sub: "Tops", price: 15.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Camisole", rating: 4.4, reviews: 110 },
    { id: 40, name: "Turtleneck Sweater", cat: "women", sub: "Tops", price: 50.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Turtleneck", rating: 4.7, reviews: 145 },
    
    { id: 41, name: "High-Waist Skinny Jeans", cat: "women", sub: "Bottoms", price: 60.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Skinny+Jeans", rating: 4.8, reviews: 340 },
    { id: 42, name: "Wide Leg Trousers", cat: "women", sub: "Bottoms", price: 75.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Trousers", rating: 4.9, reviews: 190 },
    { id: 43, name: "Pleated Midi Skirt", cat: "women", sub: "Bottoms", price: 45.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Midi+Skirt", rating: 4.6, reviews: 125 },
    { id: 44, name: "Denim Shorts", cat: "women", sub: "Bottoms", price: 35.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Denim+Shorts", rating: 4.5, reviews: 210 },
    { id: 45, name: "Seamless Leggings", cat: "women", sub: "Bottoms", price: 40.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Leggings", rating: 4.8, reviews: 400 },
    { id: 46, name: "Faux Leather Pants", cat: "women", sub: "Bottoms", price: 65.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Leather+Pants", rating: 4.7, reviews: 160 },
    { id: 47, name: "Maxi Skirt", cat: "women", sub: "Bottoms", price: 55.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Maxi+Skirt", rating: 4.6, reviews: 90 },
    { id: 48, name: "Linen Culottes", cat: "women", sub: "Bottoms", price: 50.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Culottes", rating: 4.5, reviews: 75 },
    { id: 49, name: "Comfy Joggers", cat: "women", sub: "Bottoms", price: 45.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Women+Joggers", rating: 4.9, reviews: 280 },
    { id: 50, name: "A-Line Mini Skirt", cat: "women", sub: "Bottoms", price: 35.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Mini+Skirt", rating: 4.7, reviews: 130 },
    
    { id: 51, name: "Stiletto Heels", cat: "women", sub: "Shoes & Acc", price: 85.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Heels", rating: 4.8, reviews: 180 },
    { id: 52, name: "Classic Ballet Flats", cat: "women", sub: "Shoes & Acc", price: 55.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Flats", rating: 4.6, reviews: 220 },
    { id: 53, name: "Platform Sneakers", cat: "women", sub: "Shoes & Acc", price: 95.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Platform+Sneakers", rating: 4.9, reviews: 310 },
    { id: 54, name: "Ankle Boots", cat: "women", sub: "Shoes & Acc", price: 110.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Ankle+Boots", rating: 4.8, reviews: 250 },
    { id: 55, name: "Strappy Sandals", cat: "women", sub: "Shoes & Acc", price: 45.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Sandals", rating: 4.5, reviews: 140 },
    { id: 56, name: "Leather Tote Bag", cat: "women", sub: "Shoes & Acc", price: 150.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Tote+Bag", rating: 4.9, reviews: 200 },
    { id: 57, name: "Cat-Eye Sunglasses", cat: "women", sub: "Shoes & Acc", price: 65.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Cat-Eye+Glasses", rating: 4.7, reviews: 165 },
    { id: 58, name: "Gold Pendant Necklace", cat: "women", sub: "Shoes & Acc", price: 40.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Necklace", rating: 4.8, reviews: 110 },
    { id: 59, name: "Hoop Earrings", cat: "women", sub: "Shoes & Acc", price: 25.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Earrings", rating: 4.6, reviews: 190 },
    { id: 60, name: "Crossbody Bag", cat: "women", sub: "Shoes & Acc", price: 85.00, img: "https://via.placeholder.com/300x400/eeeeee/333333?text=Crossbody+Bag", rating: 4.9, reviews: 230 }
];

// --- 2. GLOBAL STATE ---
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let promoDiscount = 0; // percentage

// Formatter (US Dollar)
const usdFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

// Setup on load
window.onload = () => {
    updateAuthUI();
    renderProducts(PRODUCTS);
    updateCartUI();
};

// --- 3. RENDERING & FILTERING ---
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    if(items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width: 100%; grid-column: 1/-1;">No products found.</p>';
        return;
    }

    items.forEach(product => {
        const isWished = currentUser?.wishlist?.includes(product.id) ? 'active' : '';
        const starsHtml = getStarsHtml(product.rating, product.reviews);

        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <i class="fa fa-heart heart-icon ${isWished}" onclick="toggleWishlist(${product.id}, event)"></i>
            <img src="${product.img}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400/fff/f00?text=Image+Not+Found';"
                 onclick="openProductModal(${product.id})">
            <h3>${product.name}</h3>
            <div class="stars">${starsHtml}</div>
            <p class="price">${usdFormat.format(product.price)}</p>
            <button class="btn-quick-add" onclick="addToCart(${product.id}, 'M')">Add to Cart</button>
        `;
        grid.appendChild(div);
    });
}

function getStarsHtml(rating, reviews) {
    let html = '';
    for(let i=1; i<=5; i++) {
        if(rating >= i) html += '<i class="fa fa-star"></i>';
        else if(rating >= i - 0.5) html += '<i class="fa fa-star-half-alt"></i>';
        else html += '<i class="far fa-star"></i>';
    }
    html += `<span class="review-count">(${reviews})</span>`;
    return html;
}

function filterCategory(cat) {
    currentCategory = cat;
    const nav = document.getElementById('sub-nav');
    if (cat === 'all') {
        nav.innerHTML = '';
        renderProducts(PRODUCTS);
    } else {
        const subs = [...new Set(PRODUCTS.filter(p => p.cat === cat).map(p => p.sub))];
        nav.innerHTML = `<span onclick="filterSub('all')" class="active">All ${cat}</span>` + 
                        subs.map(s => `<span onclick="filterSub('${s}')">${s}</span>`).join('');
        renderProducts(PRODUCTS.filter(p => p.cat === cat));
    }
}

function filterSub(sub) {
    if (sub === 'all') {
        renderProducts(PRODUCTS.filter(p => p.cat === currentCategory));
    } else {
        renderProducts(PRODUCTS.filter(p => p.cat === currentCategory && p.sub === sub));
    }
}

function searchProducts() {
    const q = document.getElementById('search-bar').value.toLowerCase();
    const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) && (currentCategory === 'all' || p.cat === currentCategory));
    renderProducts(filtered);
}

// --- 4. WISHLIST ---
function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    if (!currentUser) {
        alert("Please sign in to add items to your wishlist.");
        toggleAuthModal();
        return;
    }
    
    if(!currentUser.wishlist) currentUser.wishlist = [];
    
    const index = currentUser.wishlist.indexOf(id);
    if(index > -1) {
        currentUser.wishlist.splice(index, 1);
    } else {
        currentUser.wishlist.push(id);
    }
    
    saveUserContext();
    // Re-render only to update hearts if on main screen, or wishlist tab if inside dashboard
    if (document.getElementById('dashboard-modal').style.display === 'block') {
        showDashTab('wishlist');
    } else {
        searchProducts(); // refreshes current grid
    }
}

// --- 5. MODALS & SIZE GUIDE ---
let currentDetailId = null;
function openProductModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    currentDetailId = id;
    document.getElementById('detail-img').src = p.img;
    document.getElementById('detail-title').innerText = p.name;
    document.getElementById('detail-reviews').innerHTML = getStarsHtml(p.rating, p.reviews);
    document.getElementById('detail-price').innerText = usdFormat.format(p.price);
    
    document.getElementById('btn-add-cart').onclick = () => {
        const size = document.getElementById('detail-size').value;
        addToCart(id, size);
        closeProductModal();
    };
    
    document.getElementById('btn-add-wishlist').onclick = () => {
        toggleWishlist(id);
        closeProductModal();
    };

    document.getElementById('product-modal').style.display = 'block';
}

function closeProductModal() { document.getElementById('product-modal').style.display = 'none'; }
function openSizeGuide() { document.getElementById('size-guide-modal').style.display = 'block'; }
function closeSizeGuide() { document.getElementById('size-guide-modal').style.display = 'none'; }

// --- 6. CART & PROMO CODE ---
function addToCart(id, size) {
    const p = PRODUCTS.find(x => x.id === id);
    const existing = cart.find(x => x.id === id && x.size === size);
    if(existing) existing.qty++;
    else cart.push({ ...p, size, qty: 1 });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size} | ${usdFormat.format(item.price)}</p>
                    <p>Qty: ${item.qty} <i class="fa fa-trash" style="cursor:pointer; color:red; margin-left:10px;" onclick="removeFromCart(${index})"></i></p>
                </div>
            </div>
        `;
    });
    
    const discountAmount = subtotal * promoDiscount;
    const finalTotal = subtotal - discountAmount;
    
    document.getElementById('cart-subtotal').innerText = usdFormat.format(subtotal);
    document.getElementById('cart-discount').innerText = '-' + usdFormat.format(discountAmount);
    document.getElementById('cart-total').innerText = usdFormat.format(finalTotal);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function applyPromo() {
    const code = document.getElementById('promo-code-input').value.toUpperCase().trim();
    const msg = document.getElementById('promo-msg');
    
    if (code === 'WELCOME10') {
        promoDiscount = 0.10;
        msg.innerText = "10% off applied successfully!";
        msg.style.color = "green";
    } else if (code === 'VIP20') {
        promoDiscount = 0.20;
        msg.innerText = "20% off VIP discount applied!";
        msg.style.color = "green";
    } else {
        promoDiscount = 0;
        msg.innerText = "Invalid or expired promo code.";
        msg.style.color = "red";
    }
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}

// --- 7. AUTHENTICATION ---
let isLoginMode = true;
function toggleAuthModal() {
    document.getElementById('auth-modal').style.display = document.getElementById('auth-modal').style.display === 'block' ? 'none' : 'block';
}

function switchAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('auth-title').innerText = isLoginMode ? "Sign In" : "Register";
    document.getElementById('auth-switch').innerText = isLoginMode ? "Don't have an account? Register here." : "Already have an account? Sign In.";
}

function submitAuth() {
    const email = document.getElementById('auth-email').value;
    const pass = document.getElementById('auth-pass').value;
    
    if(!email || !pass) return alert("Please fill all fields.");

    if(isLoginMode) {
        const user = users.find(u => u.email === email && u.pass === pass);
        if(user) {
            currentUser = user;
            saveUserContext();
            updateAuthUI();
            toggleAuthModal();
        } else {
            alert("Invalid credentials.");
        }
    } else {
        if(users.find(u => u.email === email)) return alert("Email already registered.");
        const newUser = { email, pass, name: email.split('@')[0], wishlist: [], address: {}, card: {} };
        users.push(newUser);
        currentUser = newUser;
        saveUserContext();
        updateAuthUI();
        toggleAuthModal();
    }
}

function saveUserContext() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    if(currentUser) {
        const idx = users.findIndex(u => u.email === currentUser.email);
        if(idx > -1) users[idx] = currentUser;
    }
    localStorage.setItem('users', JSON.stringify(users));
}

function updateAuthUI() {
    if(currentUser) {
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('btn-account').style.display = 'block';
        document.getElementById('dash-name').innerText = currentUser.name || 'User';
        document.getElementById('dash-avatar').src = currentUser.avatar || "https://via.placeholder.com/100";
    } else {
        document.getElementById('btn-login').style.display = 'block';
        document.getElementById('btn-account').style.display = 'none';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    toggleDashboard();
    renderProducts(PRODUCTS); // resets heart states
}

// --- 8. PREMIUM DASHBOARD & US ZIP API ---
function toggleDashboard() {
    const modal = document.getElementById('dashboard-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        showDashTab('profile');
    }
}

function showDashTab(tab) {
    const panel = document.getElementById('dashboard-panel');
    if(tab === 'profile') {
        panel.innerHTML = `
            <h2>Personal Information</h2><br>
            <div class="dash-form-group">
                <label>Full Name</label>
                <input type="text" id="prof-name" value="${currentUser.name || ''}">
            </div>
            <div class="dash-form-group">
                <label>Avatar URL</label>
                <input type="text" id="prof-avatar" value="${currentUser.avatar || ''}" placeholder="https://...">
            </div>
            <button class="primary-btn" onclick="saveProfile()">Save Changes</button>
        `;
    } else if(tab === 'addresses') {
        const addr = currentUser.address || {};
        panel.innerHTML = `
            <h2>Shipping Address</h2><br>
            <div class="dash-form-group">
                <label>ZIP Code (US Only - e.g., 90210)</label>
                <input type="text" id="addr-zip" value="${addr.zip || ''}" onkeyup="fetchUSZip(this.value)" maxlength="5">
            </div>
            <div class="dash-form-group">
                <label>Street Address</label>
                <input type="text" id="addr-street" value="${addr.street || ''}">
            </div>
            <div class="dash-form-group">
                <label>City</label>
                <input type="text" id="addr-city" value="${addr.city || ''}" readonly style="background:#eee;">
            </div>
            <div class="dash-form-group">
                <label>State Abbreviation</label>
                <input type="text" id="addr-state" value="${addr.state || ''}" readonly style="background:#eee;">
            </div>
            <button class="primary-btn" onclick="saveAddress()">Save Address</button>
        `;
    } else if(tab === 'cards') {
        const card = currentUser.card || {};
        panel.innerHTML = `
            <h2>Payment Methods</h2><br>
            <div class="dash-form-group">
                <label>Cardholder Name</label>
                <input type="text" id="card-name" value="${card.name || ''}">
            </div>
            <div class="dash-form-group">
                <label>Card Number</label>
                <input type="text" id="card-num" value="${card.num || ''}" placeholder="XXXX XXXX XXXX XXXX" maxlength="19">
            </div>
            <button class="primary-btn" onclick="saveCard()">Save Card</button>
        `;
    } else if(tab === 'wishlist') {
        let html = `<h2>Your Wishlist</h2><br><div class="wishlist-grid">`;
        const wishedItems = PRODUCTS.filter(p => currentUser.wishlist?.includes(p.id));
        
        if(wishedItems.length === 0) {
            html += `<p>Your wishlist is empty.</p>`;
        } else {
            wishedItems.forEach(item => {
                html += `
                    <div class="wishlist-item">
                        <i class="fa fa-trash" onclick="toggleWishlist(${item.id})"></i>
                        <img src="${item.img}" alt="${item.name}">
                        <h4 style="font-size:0.9rem; margin:5px 0;">${item.name}</h4>
                        <p>${usdFormat.format(item.price)}</p>
                        <button class="primary-btn" style="width:100%; padding:5px; margin-top:5px; font-size:0.8rem;" onclick="addToCart(${item.id}, 'M'); toggleCart();">To Cart</button>
                    </div>
                `;
            });
        }
        html += `</div>`;
        panel.innerHTML = html;
    } else if(tab === 'orders') {
        panel.innerHTML = `<h2>Order History</h2><br><p>No previous orders found.</p>`;
    }
}

// US ZIP Code Fetcher (Zippopotam API)
async function fetchUSZip(zip) {
    if(zip.length === 5) {
        try {
            const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
            if(res.ok) {
                const data = await res.json();
                document.getElementById('addr-city').value = data.places[0]['place name'];
                document.getElementById('addr-state').value = data.places[0]['state abbreviation'];
            }
        } catch(e) { console.error("Zip code fetch failed", e); }
    }
}

function saveProfile() {
    currentUser.name = document.getElementById('prof-name').value;
    currentUser.avatar = document.getElementById('prof-avatar').value;
    saveUserContext();
    updateAuthUI();
    alert("Profile saved!");
}

function saveAddress() {
    currentUser.address = {
        zip: document.getElementById('addr-zip').value,
        street: document.getElementById('addr-street').value,
        city: document.getElementById('addr-city').value,
        state: document.getElementById('addr-state').value
    };
    saveUserContext();
    alert("Address saved!");
}

function saveCard() {
    currentUser.card = {
        name: document.getElementById('card-name').value,
        num: document.getElementById('card-num').value
    };
    saveUserContext();
    alert("Card details saved!");
}