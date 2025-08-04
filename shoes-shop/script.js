// 商品資料
const products = [
    {
        id: 1,
        name: "Air Max 270",
        brand: "Nike",
        price: 4200,
        category: "運動鞋",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Nike Air Max 270 結合經典設計與現代科技，提供全天候的舒適穿著體驗。採用 Air Max 氣墊技術，為您的每一步提供卓越的緩震效果。",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: 2,
        name: "Ultraboost 22",
        brand: "Adidas",
        price: 5800,
        category: "運動鞋",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Adidas Ultraboost 22 採用 Boost 中底技術，提供無與倫比的能量回饋。Primeknit 鞋面設計，完美貼合腳型，適合跑步和日常穿著。",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"]
    },
    {
        id: 3,
        name: "Chuck Taylor All Star",
        brand: "Converse",
        price: 2200,
        category: "休閒鞋",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "經典不敗的 Converse Chuck Taylor All Star，簡約設計配上帆布材質，是街頭時尚的永恆選擇。適合各種穿搭風格。",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: 4,
        name: "Old Skool",
        brand: "Vans",
        price: 2800,
        category: "休閒鞋",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Vans Old Skool 經典滑板鞋，具標誌性的側邊條紋設計。耐用的麂皮和帆布鞋面，適合滑板運動和日常穿著。",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: 5,
        name: "Air Jordan 1",
        brand: "Nike",
        price: 5500,
        category: "運動鞋",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "傳奇的 Air Jordan 1，籃球鞋的經典之作。高品質皮革鞋面，經典的配色設計，是收藏家和球鞋愛好者的必備之選。",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"]
    },
    {
        id: 6,
        name: "Stan Smith",
        brand: "Adidas",
        price: 3200,
        category: "休閒鞋",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "Adidas Stan Smith 白色經典網球鞋，簡潔的設計風格適合各種場合。優質皮革材質，舒適的穿著感受，時尚百搭。",
        sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: 7,
        name: "Oxford 皮鞋",
        brand: "Classic",
        price: 4800,
        category: "正裝鞋",
        image: "https://images.unsplash.com/photo-1529955330-182421e7148b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "經典 Oxford 皮鞋，採用頂級牛皮製作，精緻的工藝和優雅的設計。適合商務場合和正式活動，展現專業形象。",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: 8,
        name: "Chelsea 靴",
        brand: "Premium",
        price: 6200,
        category: "靴子",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: "時尚的 Chelsea 靴，經典的彈性側邊設計，易於穿脫。高品質皮革材質，既適合正式場合也適合休閒穿著。",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
    }
];

// 購物車資料
let cart = [];
let currentFilters = {
    category: '',
    brand: '',
    price: ''
};

// DOM 元素
const productsGrid = document.getElementById('products-grid');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupEventListeners();
    updateCartDisplay();
});

// 設置事件監聽器
function setupEventListeners() {
    // 購物車側邊欄
    cartBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
    closeCart.addEventListener('click', () => cartSidebar.classList.remove('open'));

    // 彈窗
    closeModal.addEventListener('click', () => productModal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // 篩選器
    document.getElementById('category-filter').addEventListener('change', handleFilterChange);
    document.getElementById('brand-filter').addEventListener('change', handleFilterChange);
    document.getElementById('price-filter').addEventListener('change', handleFilterChange);

    // 響應式選單
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 平滑滾動
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            navMenu.classList.remove('active');
        });
    });

    // 結帳按鈕
    checkoutBtn.addEventListener('click', handleCheckout);

    // 聯絡表單
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
}

// 顯示商品
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// 創建商品卡片
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">NT$ ${product.price.toLocaleString()}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> 加入購物車
            </button>
        </div>
    `;

    // 點擊商品卡片顯示詳情
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
            showProductModal(product);
        }
    });

    return card;
}

// 顯示商品詳情彈窗
function showProductModal(product) {
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <div class="modal-product-brand">${product.brand}</div>
                <h2>${product.name}</h2>
                <div class="modal-product-price">NT$ ${product.price.toLocaleString()}</div>
                <div class="modal-product-description">${product.description}</div>
                <div class="size-selector">
                    <h4>選擇尺寸：</h4>
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <div class="size-option" onclick="selectSize(this)">${size}</div>
                        `).join('')}
                    </div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}); productModal.style.display='none';">
                    <i class="fas fa-cart-plus"></i> 加入購物車
                </button>
            </div>
        </div>
    `;
    productModal.style.display = 'block';
}

// 選擇尺寸
function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
}

// 加入購物車
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartDisplay();
    showNotification('商品已加入購物車！');
}

// 更新購物車顯示
function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = createCartItem(item);
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// 創建購物車商品
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
            <div class="cart-item-name">${item.brand} ${item.name}</div>
            <div class="cart-item-price">NT$ ${item.price.toLocaleString()}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #e74c3c; color: white;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return cartItem;
}

// 更新商品數量
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// 移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// 處理篩選變更
function handleFilterChange(e) {
    const filterType = e.target.id.replace('-filter', '');
    currentFilters[filterType] = e.target.value;
    
    let filteredProducts = products.filter(product => {
        let matchesCategory = !currentFilters.category || product.category === currentFilters.category;
        let matchesBrand = !currentFilters.brand || product.brand === currentFilters.brand;
        let matchesPrice = !currentFilters.price || checkPriceRange(product.price, currentFilters.price);
        
        return matchesCategory && matchesBrand && matchesPrice;
    });
    
    displayProducts(filteredProducts);
}

// 檢查價格範圍
function checkPriceRange(price, range) {
    switch(range) {
        case '0-2000': return price <= 2000;
        case '2000-4000': return price > 2000 && price <= 4000;
        case '4000-6000': return price > 4000 && price <= 6000;
        case '6000+': return price > 6000;
        default: return true;
    }
}

// 平滑滾動
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // 減去導航欄高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 結帳處理
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('購物車是空的！', 'error');
        return;
    }
    
    // 模擬結帳流程
    showNotification('感謝您的訂購！我們會盡快處理您的訂單。', 'success');
    cart = [];
    updateCartDisplay();
    cartSidebar.classList.remove('open');
}

// 處理聯絡表單
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // 模擬表單提交
    showNotification('感謝您的留言！我們會盡快回覆您。', 'success');
    e.target.reset();
}

// 顯示通知
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1003;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加動畫樣式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 滾動效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// 搜索功能
document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = prompt('請輸入搜索關鍵字：');
    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
            scrollToSection('products');
        } else {
            showNotification('沒有找到相關商品', 'error');
        }
    }
});
