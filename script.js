const CATALOG = {
  masculino: {
    camisas: {
      label: 'Camisas',
      subs: {
        all: 'Todas as Camisas',
        oxford: 'Camisas Oxford',
        polo: 'Camisas Polo',
        tshirts: 'Camisetas',
        hoodies: 'Moletons'
      }
    },
    ternos: {
      label: 'Ternos',
      subs: {
        all: 'Todos os Ternos',
        business: 'Ternos de Negócios',
        blazers: 'Blazers'
      }
    },
    sapatos: {
      label: 'Calçados',
      subs: {
        all: 'Todos os Calçados',
        oxfords: 'Sapatos Sociais',
        sneakers: 'Tênis',
        boots: 'Botas'
      }
    },
    acessorios: {
      label: 'Acessórios',
      subs: {
        all: 'Todos',
        watches: 'Relógios',
        glasses: 'Óculos',
        belts: 'Cintos'
      }
    }
  },
  feminino: {
    vestidos: {
      label: 'Vestidos',
      subs: {
        all: 'Todos os Vestidos',
        evening: 'Festa & Formal',
        casual: 'Casuais',
        mini: 'Vestidos Curtos'
      }
    },
    bolsas: {
      label: 'Bolsas',
      subs: {
        all: 'Todas as Bolsas',
        handbag: 'Bolsas de Mão',
        crossbody: 'Transversais'
      }
    },
    sapatos: {
      label: 'Calçados',
      subs: {
        all: 'Todos os Calçados',
        heels: 'Saltos',
        sneakers: 'Tênis',
        sandals: 'Sandálias'
      }
    },
    acessorios: {
      label: 'Acessórios',
      subs: {
        all: 'Todos',
        watches: 'Relógios',
        jewelry: 'Joias',
        glasses: 'Óculos'
      }
    }
  }
};

const PRODUCTS = [
  // MASCULINO - CAMISAS
  { id: 1, gender: 'masculino', category: 'camisas', subcategory: 'oxford', title: 'Camisa Oxford Slim Fit', price: 250, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600', desc: '100% algodão egípcio.', sizes: ['P', 'M', 'G', 'GG'] },
  { id: 2, gender: 'masculino', category: 'camisas', subcategory: 'polo', title: 'Camisa Polo Piqué', price: 180, img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600', desc: 'Corte clássico em algodão piqué premium.', sizes: ['P', 'M', 'G', 'GG'] },
  { id: 3, gender: 'masculino', category: 'camisas', subcategory: 'tshirts', title: 'Camiseta Streetwear Branca', price: 120, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600', desc: 'Algodão orgânico com bordado minimalista.', sizes: ['P', 'M', 'G', 'GG'] },
  
  // MASCULINO - TERNOS
  { id: 4, gender: 'masculino', category: 'ternos', subcategory: 'business', title: 'Terno Italiano Cinza Chumbo', price: 1500, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600', desc: 'Corte alfaiataria feito com lã virgem.', sizes: ['46', '48', '50', '52'] },
  { id: 5, gender: 'masculino', category: 'ternos', subcategory: 'blazers', title: 'Blazer de Linho', price: 890, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600', desc: 'Respirável, ideal para looks casuais chiques.', sizes: ['46', '48', '50', '52'] },

  // MASCULINO - SAPATOS
  { id: 6, gender: 'masculino', category: 'sapatos', subcategory: 'oxfords', title: 'Sapato Social de Couro', price: 650, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600', desc: 'Couro italiano feito à mão.', sizes: ['39', '40', '41', '42', '43'] },
  { id: 7, gender: 'masculino', category: 'sapatos', subcategory: 'sneakers', title: 'Tênis Retro Minimalista', price: 400, img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600', desc: 'Tênis de couro branco para o dia a dia.', sizes: ['39', '40', '41', '42', '43'] },

  // MASCULINO - ACESSÓRIOS
  { id: 8, gender: 'masculino', category: 'acessorios', subcategory: 'watches', title: 'Relógio Cronógrafo Preto', price: 900, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', desc: 'Aço inoxidável de alta precisão.', sizes: ['Único'] },

  // FEMININO - VESTIDOS
  { id: 9, gender: 'feminino', category: 'vestidos', subcategory: 'evening', title: 'Vestido Midi de Seda', price: 720, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600', desc: 'Elegante vestido de seda pura.', sizes: ['PP', 'P', 'M', 'G'] },
  { id: 10, gender: 'feminino', category: 'vestidos', subcategory: 'casual', title: 'Vestido Floral de Verão', price: 350, img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600', desc: 'Leve e ideal para dias quentes.', sizes: ['PP', 'P', 'M', 'G'] },
  
  // FEMININO - BOLSAS
  { id: 11, gender: 'feminino', category: 'bolsas', subcategory: 'handbag', title: 'Bolsa de Couro Estruturada', price: 1200, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600', desc: 'Detalhes em ouro e shape icônico.', sizes: ['Único'] },
  { id: 12, gender: 'feminino', category: 'bolsas', subcategory: 'crossbody', title: 'Bolsa Transversal Minimalista', price: 580, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600', desc: 'Couro genuíno compacta.', sizes: ['Único'] },

  // FEMININO - SAPATOS
  { id: 13, gender: 'feminino', category: 'sapatos', subcategory: 'heels', title: 'Scarpin Clássico Stiletto', price: 600, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600', desc: 'Salto alto atemporal em camurça.', sizes: ['35', '36', '37', '38', '39'] },
  { id: 14, gender: 'feminino', category: 'sapatos', subcategory: 'sneakers', title: 'Tênis Plataforma Branco', price: 450, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600', desc: 'Tênis elevado em couro premium.', sizes: ['35', '36', '37', '38', '39'] },

  // FEMININO - ACESSÓRIOS
  { id: 15, gender: 'feminino', category: 'acessorios', subcategory: 'jewelry', title: 'Colar de Corrente em Ouro', price: 380, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600', desc: 'Banhado a ouro 18k.', sizes: ['Único'] },
  { id: 16, gender: 'feminino', category: 'acessorios', subcategory: 'watches', title: 'Relógio Rose Gold', price: 650, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', desc: 'Elegante perfil fino em ouro rosa.', sizes: ['Único'] }
];

const AUTH_STORAGE_KEY = 'aeterna_users';
const SESSION_KEY = 'aeterna_session';

function getUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || []; } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}
function getSession() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; }
}
function setSession(user) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id }));
}
function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}
function getCurrentUser() {
  const session = getSession();
  if (!session) return null;
  return getUsers().find(u => u.id === session.id) || null;
}
function updateUserInStorage(user) {
  const users = getUsers();
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
    saveUsers(users);
  }
}

function register(name, email, password) {
  const trimmedEmail = email.trim().toLowerCase();
  if (!name.trim() || !trimmedEmail || password.length < 6) {
    return { ok: false, message: 'Preencha todos os campos. Senha mín. de 6 caracteres.' };
  }
  const users = getUsers();
  if (users.some(u => u.email === trimmedEmail)) {
    return { ok: false, message: 'Já existe uma conta com este e-mail.' };
  }
  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: trimmedEmail,
    password,
    phone: '',
    avatar: '',
    addresses: [],
    cards: [],
    orders: [],
    createdAt: new Date().toISOString()
  };
  users.push(user);
  saveUsers(users);
  setSession(user);
  return { ok: true, user };
}

function login(email, password) {
  const trimmedEmail = email.trim().toLowerCase();
  const user = getUsers().find(u => u.email === trimmedEmail && u.password === password);
  if (!user) return { ok: false, message: 'E-mail ou senha incorretos.' };
  setSession(user);
  return { ok: true, user };
}
function logout() { clearSession(); }

function formatPrice(value) {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

// Variables & Core Logic
let currentGender = 'masculino';
let currentCategory = 'all';
let currentSubcategory = 'all';
let cart = [];
let selectedSize = null;

function selectGender(gender, btn) {
  currentGender = gender;
  currentCategory = 'all';
  currentSubcategory = 'all';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('hero-subtitle').innerText = gender === 'masculino' ? 'COLEÇÃO MASCULINA' : 'COLEÇÃO FEMININA';
  renderCategories();
  renderSubcategories();
  renderProducts();
}

function renderCategories() {
  const container = document.getElementById('category-nav');
  container.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = `sub-btn ${currentCategory === 'all' ? 'active' : ''}`;
  allBtn.innerText = currentGender === 'masculino' ? 'Tudo Masculino' : 'Tudo Feminino';
  allBtn.onclick = () => { currentCategory = 'all'; currentSubcategory = 'all'; renderCategories(); renderSubcategories(); renderProducts(); };
  container.appendChild(allBtn);

  Object.entries(CATALOG[currentGender]).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = `sub-btn ${currentCategory === key ? 'active' : ''}`;
    btn.innerText = cat.label;
    btn.onclick = () => { currentCategory = key; currentSubcategory = 'all'; renderCategories(); renderSubcategories(); renderProducts(); };
    container.appendChild(btn);
  });
}

function renderSubcategories() {
  const container = document.getElementById('sub-nav');
  container.innerHTML = '';
  if (currentCategory === 'all') { container.style.display = 'none'; return; }
  container.style.display = 'flex';
  const subs = CATALOG[currentGender][currentCategory].subs;
  Object.entries(subs).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = `sub-btn sub-btn-sm ${currentSubcategory === key ? 'active' : ''}`;
    btn.innerText = label;
    btn.onclick = () => { currentSubcategory = key; renderSubcategories(); renderProducts(); };
    container.appendChild(btn);
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    if (p.gender !== currentGender) return false;
    if (currentCategory !== 'all' && p.category !== currentCategory) return false;
    if (currentSubcategory !== 'all' && p.subcategory !== currentSubcategory) return false;
    return true;
  });
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const filtered = getFilteredProducts();
  document.getElementById('product-count').innerText = filtered.length + ' item(ns)';
  if (!filtered.length) { grid.innerHTML = '<p class="empty-msg">Nenhum produto nesta categoria.</p>'; return; }

  // Nota de Fix: Utilizando onerror para previnir imagens quebradas da internet
  grid.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <img src="${product.img}" alt="${product.title}" class="product-img" onerror="this.src='https://placehold.co/600x800/eeeeee/111111?text=Produto+Indisponível'" loading="lazy">
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  selectedSize = product.sizes[0];
  document.getElementById('modal-body').innerHTML = `
    <img src="${product.img}" alt="${product.title}" class="modal-img" onerror="this.src='https://placehold.co/600x800/eeeeee/111111?text=Produto+Indisponível'">
    <div class="modal-details">
      <h2>${product.title}</h2>
      <div class="product-price modal-price">${formatPrice(product.price)}</div>
      <p class="modal-desc">${product.desc}</p>
      <div class="size-selector">
        <label>Tamanho</label>
        <div class="size-options">
          ${product.sizes.map(size => `<button type="button" class="size-btn ${size === selectedSize ? 'active' : ''}" onclick="selectSize('${size}')">${size}</button>`).join('')}
        </div>
      </div>
      <button class="btn-primary" onclick="addToCart(${product.id})">Adicionar à Sacola</button>
    </div>
  `;
  document.getElementById('product-modal').style.display = 'flex';
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.toggle('active', btn.innerText === size));
}
function closeModal() { document.getElementById('product-modal').style.display = 'none'; }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  cart.push({ ...product, selectedSize: selectedSize || product.sizes[0] });
  updateCart();
  closeModal();
  toggleCart();
}

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  document.getElementById('cart-count').innerText = cart.length;
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart-msg">Sua sacola está vazia.</p>';
    document.getElementById('cart-total-price').innerText = formatPrice(0);
    return;
  }
  let total = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.title}" onerror="this.src='https://placehold.co/100x100'">
        <div class="cart-item-info">
          <div><b>${item.title}</b></div>
          <div class="cart-item-meta">Tamanho: ${item.selectedSize}</div>
          <div>${formatPrice(item.price)}</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>
      </div>
    `;
  }).join('');
  document.getElementById('cart-total-price').innerText = formatPrice(total);
}

function checkout() {
  if (!cart.length) return showToast('Sua sacola está vazia.');
  const user = getCurrentUser();
  if (!user) {
    toggleCart();
    openAuthModal('login');
    return showToast('Faça login para finalizar a compra.');
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const order = {
    id: 'PED-' + Date.now().toString(36).toUpperCase(),
    date: new Date().toISOString(),
    items: cart, total
  };
  user.orders.unshift(order);
  updateUserInStorage(user);
  cart = []; updateCart(); toggleCart();
  showToast('Pedido Confirmado! ID: ' + order.id);
}

/* Auth & Profile Dashboard Handlers */
function openAuthModal(tab = 'login') { document.getElementById('auth-modal').style.display = 'flex'; switchAuthTab(tab); }
function closeAuthModal() { document.getElementById('auth-modal').style.display = 'none'; }
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}

function handleLogin(event) {
  event.preventDefault();
  const res = login(document.getElementById('login-email').value, document.getElementById('login-password').value);
  if (!res.ok) return document.getElementById('login-error').innerText = res.message;
  closeAuthModal(); updateAuthUI(); showToast('Bem-vindo de volta!');
}

function handleRegister(event) {
  event.preventDefault();
  const res = register(document.getElementById('register-name').value, document.getElementById('register-email').value, document.getElementById('register-password').value);
  if (!res.ok) return document.getElementById('register-error').innerText = res.message;
  closeAuthModal(); updateAuthUI(); showToast('Conta criada com sucesso!');
}

function handleLogout() { logout(); updateAuthUI(); closeAccountPanel(); showToast('Você saiu da conta.'); }
function toggleAccountMenu() { document.getElementById('account-menu').classList.toggle('open'); }

function openAccountPanel(tab = 'profile') {
  const user = getCurrentUser();
  if (!user) return;
  document.getElementById('account-menu').classList.remove('open');
  document.getElementById('account-panel').style.display = 'flex';
  
  // Populando os campos da view global
  document.getElementById('dashboard-name').innerText = user.name;
  document.getElementById('dashboard-email').innerText = user.email;
  const avatarImg = document.getElementById('dashboard-avatar');
  const navAvatarImg = document.getElementById('nav-avatar');
  if (user.avatar) {
      avatarImg.src = user.avatar;
      if (navAvatarImg) navAvatarImg.src = user.avatar;
  }
  
  // Populando Formulários
  document.getElementById('prof-name').value = user.name;
  document.getElementById('prof-phone').value = user.phone || '';
  
  renderAddresses();
  renderCards();
  renderOrders();
  switchDashTab(tab);
}

function closeAccountPanel() { document.getElementById('account-panel').style.display = 'none'; }

function switchDashTab(tabId) {
  document.querySelectorAll('.dash-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.dash-section').forEach(s => s.style.display = 'none');
  document.getElementById('btn-tab-' + tabId).classList.add('active');
  document.getElementById('dash-' + tabId).style.display = 'block';
}

/* Dados Pessoais & Foto */
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64 = e.target.result;
      document.getElementById('dashboard-avatar').src = base64;
      document.getElementById('nav-avatar').src = base64;
      const user = getCurrentUser();
      if(user) { user.avatar = base64; updateUserInStorage(user); }
      showToast('Foto atualizada!');
    };
    reader.readAsDataURL(file);
  }
}

function saveProfile(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if(!user) return;
  user.name = document.getElementById('prof-name').value;
  user.phone = document.getElementById('prof-phone').value;
  updateUserInStorage(user);
  document.getElementById('dashboard-name').innerText = user.name;
  document.getElementById('user-name').innerText = user.name.split(' ')[0];
  showToast('Dados salvos com sucesso!');
}

/* ViaCEP & Endereços */
async function fetchCEP(cep) {
  const cleanCep = cep.replace(/\D/g, '');
  if (cleanCep.length === 8) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        document.getElementById('addr-street').value = data.logradouro;
        document.getElementById('addr-neighborhood').value = data.bairro;
        document.getElementById('addr-city').value = `${data.localidade} / ${data.uf}`;
        document.getElementById('addr-number').focus();
      }
    } catch(e) { console.error('CEP não encontrado'); }
  }
}

function saveAddress(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if(!user) return;
  const address = {
    cep: document.getElementById('addr-cep').value,
    street: document.getElementById('addr-street').value,
    number: document.getElementById('addr-number').value,
    comp: document.getElementById('addr-comp').value,
    neighborhood: document.getElementById('addr-neighborhood').value,
    city: document.getElementById('addr-city').value,
  };
  user.addresses = user.addresses || [];
  user.addresses.push(address);
  updateUserInStorage(user);
  event.target.reset();
  renderAddresses();
  showToast('Endereço adicionado!');
}

function renderAddresses() {
  const user = getCurrentUser();
  const list = document.getElementById('address-list');
  if(!user.addresses || !user.addresses.length) {
    list.innerHTML = '<p class="empty-msg" style="grid-column: 1/-1;">Nenhum endereço cadastrado.</p>'; return;
  }
  list.innerHTML = user.addresses.map((a, i) => `
    <div class="card-item">
      <h4>${a.street}, ${a.number} ${a.comp ? '- ' + a.comp : ''}</h4>
      <p>${a.neighborhood} - ${a.city}</p>
      <p>CEP: ${a.cep}</p>
      <button class="remove-btn" onclick="removeAddress(${i})"><i class="fa-solid fa-trash"></i> Remover</button>
    </div>
  `).join('');
}
function removeAddress(index) {
    const user = getCurrentUser();
    user.addresses.splice(index, 1);
    updateUserInStorage(user);
    renderAddresses();
}

/* Cartões de Crédito */
function savePaymentCard(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if(!user) return;
  const card = {
    num: document.getElementById('card-num').value,
    exp: document.getElementById('card-exp').value,
    name: document.getElementById('card-name').value
  };
  user.cards = user.cards || [];
  user.cards.push(card);
  updateUserInStorage(user);
  event.target.reset();
  renderCards();
  showToast('Cartão adicionado com sucesso!');
}

function renderCards() {
  const user = getCurrentUser();
  const list = document.getElementById('card-list');
  if(!user.cards || !user.cards.length) {
    list.innerHTML = '<p class="empty-msg" style="grid-column: 1/-1;">Nenhum cartão cadastrado.</p>'; return;
  }
  list.innerHTML = user.cards.map((c, i) => `
    <div class="card-item cc-card">
      <h4><i class="fa-regular fa-credit-card"></i> Fim ${c.num.slice(-4)}</h4>
      <p>${c.name.toUpperCase()}</p>
      <p>Validade: ${c.exp}</p>
      <button class="remove-btn" onclick="removeCard(${i})"><i class="fa-solid fa-trash"></i> Remover</button>
    </div>
  `).join('');
}
function removeCard(index) {
    const user = getCurrentUser();
    user.cards.splice(index, 1);
    updateUserInStorage(user);
    renderCards();
}

/* Histórico de Compras */
function renderOrders() {
  const user = getCurrentUser();
  const list = document.getElementById('account-orders');
  if (!user.orders || !user.orders.length) {
    list.innerHTML = '<p class="empty-msg">Nenhuma compra ainda.</p>'; return;
  }
  list.innerHTML = user.orders.map(order => `
    <div class="order-card">
      <div class="order-header">
        <span class="order-id">${order.id}</span>
        <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
      </div>
      <ul class="order-items">
        ${order.items.map(item => `
          <li>
            <img src="${item.img}" onerror="this.src='https://placehold.co/100x100'" alt="">
            <span>${item.title} (${item.selectedSize})</span>
            <span>${formatPrice(item.price)}</span>
          </li>
        `).join('')}
      </ul>
      <div class="order-total">Total: ${formatPrice(order.total)}</div>
    </div>
  `).join('');
}

function updateAuthUI() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('login-link');
  const userMenu = document.getElementById('user-menu-wrap');
  if (user) {
    loginLink.style.display = 'none';
    userMenu.style.display = 'flex';
    document.getElementById('user-name').innerText = user.name.split(' ')[0];
    if(user.avatar) document.getElementById('nav-avatar').src = user.avatar;
  } else {
    loginLink.style.display = 'flex';
    userMenu.style.display = 'none';
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();
  const grid = document.getElementById('products-grid');
  if (!query) return renderProducts();
  
  const results = PRODUCTS.filter(p => p.gender === currentGender && (p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)));
  document.getElementById('product-count').innerText = results.length + ' item(ns)';
  if (!results.length) { grid.innerHTML = '<p class="empty-msg">Nenhum produto encontrado.</p>'; return; }
  
  grid.innerHTML = results.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <img src="${product.img}" class="product-img" onerror="this.src='https://placehold.co/600x800/eeeeee/111111?text=Produto+Indisponível'" loading="lazy">
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('account-menu');
  const trigger = document.getElementById('user-menu-wrap');
  if (menu && trigger && !trigger.contains(e.target)) menu.classList.remove('open');
});

window.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderSubcategories();
  renderProducts();
  updateAuthUI();
});