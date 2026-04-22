// ======================================================
//  EIRA BAG STORE — script.js
// ======================================================

// ======= DATA PRODUK =======
// Ganti nilai "img" dengan path foto tasmu sendiri.
// Contoh: 'images/sling-mini-flap.jpg'
// Simpan semua foto di dalam folder "images/" yang ada di folder yang sama dengan index.html
const products = [
  { id:1,  cat:'slingbag', name:'Luna Sling Bag',           img:'images/slingbg1.png',      price:189000, stock:45, desc:'Sentuhan manis dengan detail bordir daun di sudut tas. Desain flap yang bersih dan siluet kaku memberikan kesan mahal. Cocok untuk acara formal maupun kencan santai.', discount:0  },
  { id:2,  cat:'slingbag', name:'Terra Sling Bag',   img:'images/slingbg2.png',      price:175000, stock:40,  desc:'Perpaduan unik antara material kanvas bertekstur dengan handle kulit berwarna kontras. Bentuknya yang kotak memberikan ruang penyimpanan yang maksimal untuk barang esensial Anda.', discount:15 },
  { id:3,  cat:'slingbag', name:'Hobo Sling Bag',       img:'images/slingbg3.png',      price:165000, stock:35, desc:'Tas model hobo yang sedang tren dengan bentuk melengkung yang ergonomis. Tersedia varian warna Cokelat Tua dengan tekstur bahan yang elegan. Ringan dan sangat nyaman untuk dipakai seharian.', discount:0  },
  { id:4,  cat:'slingbag', name:'Hobo Sling Bag',        img:'images/slingbg4.png',      price:165000, stock:35,  desc:'Tas model hobo yang sedang tren dengan bentuk melengkung yang ergonomis. Tersedia varian warna Hitam dengan tekstur bahan yang elegan. Ringan dan sangat nyaman untuk dipakai seharian.', discount:20 },
  { id:5,  cat:'slingbag', name:'Hobo Sling Bag',         img:'images/slingbg5.png',      price:165000, stock:35, desc:'Tas model hobo yang sedang tren dengan bentuk melengkung yang ergonomis. Tersedia varian warna Putih Gading dengan tekstur bahan yang elegan. Ringan dan sangat nyaman untuk dipakai seharian.', discount:0  },
  { id:6,  cat:'slingbag', name:'Sage Sling Bag',            img:'images/slingbg6.png',      price:195000, stock:30,  desc:'Tampil beda dengan warna sage green yang menenangkan dan handle rantai akrilik yang berani. Dilengkapi tali panjang tambahan, tas ini sangat multifungsi untuk gaya handbag maupun crossbody.', discount:10 },
  { id:7,  cat:'backpack', name:'Amethyst Backpack',     img:'images/backpack1.png',   price:210000, stock:40,  desc:'Perpaduan sempurna antara gaya feminin dan fungsionalitas. Tas ini hadir dengan warna dusty mauve yang unik, aksen zipper ganda, dan strap motif warna-warni yang memberikan kesan ceria namun tetap berkelas. Cocok untuk kuliah atau jalan-jalan santai.', discount:0  },
  { id:8,  cat:'backpack', name:'Slate Backpack',    img:'images/backpack2.png',   price:210000, stock:40, desc:'Tampil profesional dengan nuansa abu-abu yang maskulin sekaligus elegan. Material kulit sintetis berkualitas dengan tekstur halus membuat tas ini sangat awet. Pilihan tepat bagi Anda yang aktif di lingkungan perkotaan namun ingin tetap terlihat modis.', discount:25 },
  { id:9,  cat:'backpack', name:'Amber Backpack',  img:'images/backpack3.png',   price:210000, stock:40,  desc:'Memberikan kesan klasik dan timeless. Warna cokelat tan yang hangat sangat mudah dipadukan dengan berbagai outfit. Dilengkapi dengan kompartemen depan yang luas, tas ini adalah teman setia untuk petualangan harian Anda.', discount:0  },
  { id:10, cat:'backpack', name:'Sienna Mini Backpack',  img:'images/backpack4.png',   price:199000, stock:35, desc:'Desain yang lebih mungil dan ramping untuk Anda yang menyukai gaya minimalis. Dengan penutup flap yang ikonik dan siluet yang tegas, tas ini memberikan kesan vintage modern. Sangat praktis untuk membawa kebutuhan esensial dengan gaya maksimal.', discount:0  },
  { id:11, cat:'backpack', name:'Midnight Backpack',        img:'images/backpack5.png',   price:205000, stock:30, desc:'Definisi kemewahan dalam kesederhanaan. Menggunakan material hitam pekat dengan aksen emas pada logo dan gantungan kunci (ring), memberikan kesan premium yang kuat. Sangat pas untuk acara semi-formal maupun kantor.', discount:20 },
  { id:12, cat:'backpack', name:'Obsidian Backpack',      img:'images/backpack6.png',   price:215000, stock:45,  desc:'Menonjolkan detail tekstur woven (anyaman) yang artistik. Tas ini bukan sekadar alat angkut, melainkan sebuah pernyataan gaya. Teksturnya memberikan dimensi visual yang menarik, menjadikannya pilihan paling eksklusif di koleksi ini.', discount:0  },
  { id:13, cat:'handbag',  name:'Ruby Handbag',       img:'images/handbag1.png',    price:215000, stock:30, desc:'Tote bag canvas spacious dan ramah lingkungan. Kapasitas besar, tersedia berbagai warna cerah motif menarik.', discount:0  },
  { id:14, cat:'handbag',  name:'Aura Handbag',     img:'images/handbag2.png',    price:199000, stock:35,  desc:'Bahan PU kulit premium desain formal. Cocok ke kantor atau acara semi-formal. Inner pocket terorganisir.', discount:15 },
  { id:15, cat:'handbag',  name:'Aura Handbag',      img:'images/handbag3.png',    price:199000, stock:35, desc:'Satin berkualitas dengan detail kristal pada klasp. Ukuran 25×14 cm, muat HP, dompet, dan kosmetik esensial.', discount:30 },
  { id:16, cat:'handbag',  name:'Crescent Handbag',       img:'images/handbag4.png',    price:175000, stock:30,  desc:'Detail fringe yang edgy dari campuran kulit sintetik dan anyaman. Cocok untuk bohemian atau festival look.', discount:0  },
  { id:17, cat:'handbag',  name:'Vesta Handbag',       img:'images/handbag5.png',    price:249000, stock:40,  desc:'Model doctor bag klasik & timeless. Frame metal dengan kunci bukaan kokoh. Kulit sintetik premium mewah.', discount:20 },
  { id:18, cat:'handbag',  name:'Vesta Handbag',     img:'images/handbag6.png',    price:249000, stock:40,  desc:'Rattan alami dengan lapisan kain di dalam. Handle kulit nyaman. Cocok untuk beach atau casual outing.', discount:25 },
];

// ======= DATA PEMBAYARAN =======
const bankAcc = {
  bca:     'BCA — Rek. 1234567890 a.n. Eira Bag Store',
  mandiri: 'Mandiri — Rek. 1110009876543 a.n. Eira Bag Store',
  bri:     'BRI — Rek. 009801012345678 a.n. Eira Bag Store',
};

const ewalletAcc = {
  ovo:   'OVO — 081234567890',
  dana:  'DANA — 081234567890',
  gopay: 'GoPay — 081234567890',
};

// ======= STATE / VARIABEL =======
let cart         = [];
let currentCat   = 'all';
let modalProduct = null;
let modalQty     = 1;

let selKurir     = null;
let selKurirCost = 0;
let selKurirName = '';

let selPayType    = 'bank';
let selBank       = null;
let selEwallet    = null;
let selMinimarket = null;

// ======= HERO SLIDER =======
let heroIdx = 0;
const totalSlides = 3;

function buildHeroDots() {
  const el = document.getElementById('hero-dots');
  el.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const b = document.createElement('button');
    b.className = 'hero-dot' + (i === 0 ? ' active' : '');
    b.onclick = () => gotoSlide(i);
    el.appendChild(b);
  }
}

function gotoSlide(idx) {
  heroIdx = idx;
  document.getElementById('hero-slides').style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function slideHero(dir) {
  heroIdx = (heroIdx + dir + totalSlides) % totalSlides;
  gotoSlide(heroIdx);
}

// Auto-play slider setiap 4 detik
setInterval(() => slideHero(1), 4000);

// ======= UTILS =======
function fmt(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  if (id === 'page-shop') {
    // Halaman toko → scroll ke atas total (hero slider)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 20);
  } else {
    // Halaman order / payment / success → scroll ke posisi elemen agar langsung terlihat
    setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }, 20);
  }
}

// ======= PRODUCTS =======
function showCategory(cat, tabEl) {
  currentCat = cat;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (tabEl) {
    tabEl.classList.add('active');
  } else {
    document.querySelectorAll('.tab').forEach(t => {
      if (t.dataset.cat === cat) t.classList.add('active');
    });
  }
  renderProducts();
  showPage('page-shop');
}

function renderProducts() {
  const cat = currentCat;
  const filtered =
    cat === 'all'    ? products :
    cat === 'diskon' ? products.filter(p => p.discount > 0) :
                       products.filter(p => p.cat === cat);

  let html = '';

  // Banner diskon hanya di tab "semua"
  if (cat === 'all') {
    html += `
      <div class="disc-banner">
        <div class="disc-left">
          <div class="disc-title">Promo Spesial Hari Ini ✦</div>
          <div class="disc-sub">Penawaran terbatas untuk koleksi pilihan</div>
        </div>
        <div class="disc-right">
          <div class="disc-pct">30%</div>
          <div class="disc-off">OFF</div>
        </div>
      </div>
    `;
  }

  const titles = {
    all:      'Semua Produk',
    diskon:   '🔥 Produk Diskon',
    slingbag: 'Slingbag',
    backpack: 'Backpack',
    handbag:  'Handbag',
  };

  html += `<div class="section-title">${titles[cat] || ''} <span style="font-size:13px;font-weight:400;color:var(--gray);font-family:'DM Sans',sans-serif">(${filtered.length} produk)</span></div>`;
  html += '<div class="product-grid">';

  filtered.forEach(p => {
    const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
    html += `
      <div class="product-card" onclick="openModal(${p.id})">
        <div class="product-thumb">
          <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="product-thumb-fallback" style="display:none">🛍️</div>
          ${p.discount > 0 ? `<span class="disc-badge">−${p.discount}%</span>` : ''}
          <span class="stock-badge">Stok ${p.stock}</span>
          ${p.stock === 0 ? '<div class="soldout-layer">HABIS</div>' : ''}
        </div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-price-row">
            <span class="product-price">${fmt(dp)}</span>
            ${p.discount > 0 ? `<span class="product-orig">${fmt(p.price)}</span>` : ''}
          </div>
          <div class="product-stock">${p.stock > 0 ? `Stok: ${p.stock} pcs` : 'Habis'}</div>
        </div>
        <button class="add-btn" ${p.stock === 0 ? 'disabled' : ''} onclick="event.stopPropagation();quickAdd(${p.id})">+ Keranjang</button>
      </div>
    `;
  });

  html += '</div>';
  document.getElementById('shop-content').innerHTML = html;
}

// ======= MODAL PRODUK =======
function openModal(id) {
  const p = products.find(x => x.id === id);
  modalProduct = p;
  modalQty = 1;

  document.getElementById('modal-thumb').innerHTML = `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'" style="width:100%;height:100%;object-fit:contain;">`;
  document.getElementById('modal-name').textContent = p.name;

  const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
  let priceHtml = `<span class="modal-price">${fmt(dp)}</span>`;
  if (p.discount > 0) {
    priceHtml += `<span class="modal-orig">${fmt(p.price)}</span><span class="modal-disc-badge">−${p.discount}%</span>`;
  }
  document.getElementById('modal-price-row').innerHTML = priceHtml;
  document.getElementById('modal-desc').textContent = p.desc;

  const stkColor = p.stock > 5 ? 'var(--green)' : p.stock > 0 ? '#b7770d' : 'var(--red)';
  document.getElementById('modal-stock').innerHTML = `<span style="color:${stkColor};font-weight:700;font-size:13px">${p.stock > 0 ? `Stok tersedia: ${p.stock} pcs` : 'Stok habis'}</span>`;
  document.getElementById('modal-qty-val').textContent = 1;

  const btn = document.getElementById('modal-add-btn');
  btn.disabled = p.stock === 0;

  document.getElementById('product-modal').classList.add('open');
}

function closeModal(e) {
  if (e.target.id === 'product-modal') closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('product-modal').classList.remove('open');
}

function changeModalQty(d) {
  if (!modalProduct) return;
  modalQty = Math.max(1, Math.min(modalProduct.stock, modalQty + d));
  document.getElementById('modal-qty-val').textContent = modalQty;
}

function confirmAddToCart() {
  if (!modalProduct) return;
  addToCart(modalProduct.id, modalQty);
  closeModalDirect();
}

function quickAdd(id) {
  addToCart(id, 1);
}

// ======= CART =======
function addToCart(id, qty) {
  const p = products.find(x => x.id === id);
  if (!p || p.stock === 0) return;
  const existing = cart.find(x => x.id === id);
  const total = (existing ? existing.qty : 0) + qty;
  if (total > p.stock) { showToast('Stok tidak mencukupi!'); return; }
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  updateBadge();
  showToast(`${p.name} ditambahkan ✓`);
}

function updateBadge() {
  document.getElementById('cart-count').textContent = cart.reduce((s, x) => s + x.qty, 0);
}

function getSubtotal() {
  return cart.reduce((s, item) => {
    const p = products.find(x => x.id === item.id);
    const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
    return s + dp * item.qty;
  }, 0);
}

// ======= CART DRAWER =======
function openCartDrawer() {
  renderDrawer();
  document.getElementById('drawer-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('drawer-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
}

function renderDrawer() {
  const body   = document.getElementById('drawer-body');
  const footer = document.getElementById('drawer-footer');

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">🛍️</div>
        <div style="font-weight:600">Keranjang masih kosong</div>
        <div style="font-size:12px;color:var(--silver);margin-top:6px">Pilih tas favoritmu dulu yuk!</div>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  let html = '';

  cart.forEach(item => {
    const p  = products.find(x => x.id === item.id);
    const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
    html += `
      <div class="cart-row">
        <div class="cart-row-img"><img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" onerror="this.outerHTML='🛍️'"></div>
        <div class="cart-row-info">
          <div class="cart-row-name">${p.name}</div>
          <div class="cart-row-price">${fmt(dp)} × ${item.qty} = ${fmt(dp * item.qty)}</div>
          <div class="cart-row-qty">
            <button class="qty-btn2" onclick="updateDrawerQty(${p.id},-1)">−</button>
            <span class="qty-val2">${item.qty}</span>
            <button class="qty-btn2" onclick="updateDrawerQty(${p.id},1)">+</button>
          </div>
        </div>
        <button class="rm-btn2" onclick="removeFromCart(${p.id})">🗑</button>
      </div>`;
  });

  body.innerHTML = html;
  document.getElementById('drawer-subtotal').textContent = fmt(getSubtotal());
}

function updateDrawerQty(id, d) {
  const item = cart.find(x => x.id === id);
  const p    = products.find(x => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  else if (item.qty > p.stock) { item.qty = p.stock; showToast('Stok tidak mencukupi!'); }
  updateBadge();
  renderDrawer();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateBadge();
  renderDrawer();
}

// ======= ORDER FORM =======
function goToOrderForm() {
  if (cart.length === 0) { showToast('Keranjang masih kosong'); return; }
  closeCartDrawer();
  selKurir = null; selKurirCost = 0; selKurirName = '';
  document.querySelectorAll('.kurir-card').forEach(c => c.classList.remove('selected'));
  renderOrderMini('order-mini');
  showPage('page-order');
}

function selectKurir(id, cost, name) {
  selKurir = id; selKurirCost = cost; selKurirName = name;
  document.querySelectorAll('.kurir-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('kurir-' + id).classList.add('selected');
  renderOrderMini('order-mini');
}

function renderOrderMini(elId) {
  const sub   = getSubtotal();
  const total = sub + selKurirCost;
  let itemsHtml = cart.map(item => {
    const p  = products.find(x => x.id === item.id);
    const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
    return `<div class="r-item">🛍 ${p.name} ×${item.qty}<span style="float:right">${fmt(dp * item.qty)}</span></div>`;
  }).join('');

  document.getElementById(elId).innerHTML = `
    ${itemsHtml}
    <div class="r-row" style="margin-top:8px"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <div class="r-row"><span>Ongkir ${selKurirName ? '(' + selKurirName + ')' : ''}</span><span>${selKurirCost > 0 ? fmt(selKurirCost) : 'Pilih kurir'}</span></div>
    <div class="order-mini-total"><span>Total</span><span>${selKurir ? fmt(total) : '-'}</span></div>
  `;
}

function goToPayment() {
  const name  = document.getElementById('buyer-name').value.trim();
  const phone = document.getElementById('buyer-phone').value.trim();
  const addr  = document.getElementById('buyer-address').value.trim();
  if (!name)  { showToast('Masukkan nama pemesan'); return; }
  if (!phone) { showToast('Masukkan nomor telepon'); return; }
  if (!addr)  { showToast('Masukkan alamat lengkap'); return; }
  if (!selKurir) { showToast('Pilih kurir terlebih dahulu'); return; }
  resetPaymentState();
  renderOrderMini('order-mini-pay');
  showPage('page-payment');
}

function backToOrder() {
  showPage('page-order');
}

// ======= PAYMENT =======
function resetPaymentState() {
  selBank = null; selEwallet = null; selMinimarket = null;
  document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('bank-form-fields').style.display    = 'none';
  document.getElementById('ewallet-form-fields').style.display = 'none';
  document.getElementById('minimarket-code-wrap').style.display= 'none';
  document.getElementById('bank-norek').value   = '';
  document.getElementById('bank-nama').value    = '';
  document.getElementById('ewallet-phone').value= '';
  // Reset tabs ke default (Transfer Bank)
  document.querySelectorAll('.pay-type-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
  document.querySelectorAll('.method-block').forEach((b, i) => b.classList.toggle('active', i === 0));
  selPayType = 'bank';
}

function setPayType(type, el) {
  selPayType = type;
  document.querySelectorAll('.pay-type-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.method-block').forEach(b => b.classList.remove('active'));
  document.getElementById('block-' + type).classList.add('active');
}

function selectBank(b, el) {
  selBank = b;
  document.querySelectorAll('#block-bank .pay-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('bank-form-fields').style.display = 'block';
  document.getElementById('bank-rekening-tujuan').innerHTML = `<strong>Rekening Tujuan:</strong><br>${bankAcc[b]}`;
}

function selectEwallet(e, el) {
  selEwallet = e;
  document.querySelectorAll('#block-ewallet .pay-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('ewallet-form-fields').style.display = 'block';
  document.getElementById('ewallet-dest-info').innerHTML = `<strong>Kirim ke:</strong><br>${ewalletAcc[e]}`;
}

function selectMinimarket(m, el) {
  selMinimarket = m;
  document.querySelectorAll('#block-minimarket .pay-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const total = getSubtotal() + selKurirCost;
  const code  = generateMiniCode();
  document.getElementById('minimarket-code-wrap').style.display = 'block';
  document.getElementById('minimarket-info').innerHTML = `<strong>Bayar di ${m === 'indomaret' ? 'Indomaret' : 'Alfamart'}</strong> — Total: <strong>${fmt(total)}</strong>`;
  document.getElementById('minimarket-code').textContent = code;
  document.getElementById('mini-name-step').textContent  = m === 'indomaret' ? 'Indomaret' : 'Alfamart';
  document.getElementById('mini-total-step').textContent = fmt(total);
}

function generateMiniCode() {
  return 'EIRA' + Math.random().toString().slice(2, 7).toUpperCase();
}

function processPayment() {
  if (selPayType === 'bank') {
    if (!selBank) { showToast('Pilih bank terlebih dahulu'); return; }
    if (!document.getElementById('bank-norek').value.trim()) { showToast('Masukkan nomor rekening pengirim'); return; }
    if (!document.getElementById('bank-nama').value.trim())  { showToast('Masukkan nama pemilik rekening'); return; }
  } else if (selPayType === 'ewallet') {
    if (!selEwallet) { showToast('Pilih e-wallet terlebih dahulu'); return; }
    if (!document.getElementById('ewallet-phone').value.trim()) { showToast('Masukkan nomor HP e-wallet'); return; }
  } else if (selPayType === 'minimarket') {
    if (!selMinimarket) { showToast('Pilih minimarket terlebih dahulu'); return; }
  }
  showSuccess();
}

// ======= SUCCESS =======
function showSuccess() {
  const orderId  = 'EIR' + Date.now().toString().slice(-8);
  const now      = new Date();
  const dateStr  = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr  = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  const sub      = getSubtotal();
  const total    = sub + selKurirCost;

  let payDesc = '';
  if (selPayType === 'bank')        payDesc = `Transfer ${selBank.toUpperCase()}`;
  else if (selPayType === 'ewallet') payDesc = selEwallet.charAt(0).toUpperCase() + selEwallet.slice(1);
  else if (selPayType === 'minimarket') {
    payDesc = `${selMinimarket === 'indomaret' ? 'Indomaret' : 'Alfamart'} — Kode: ${document.getElementById('minimarket-code').textContent}`;
  }

  const name  = document.getElementById('buyer-name').value.trim();
  const phone = document.getElementById('buyer-phone').value.trim();
  const addr  = document.getElementById('buyer-address').value.trim();

  let itemsHtml = cart.map(item => {
    const p  = products.find(x => x.id === item.id);
    const dp = p.discount > 0 ? Math.round(p.price * (100 - p.discount) / 100) : p.price;
    return `<div class="r-item">🛍 ${p.name} ×${item.qty}<span style="float:right">${fmt(dp * item.qty)}</span></div>`;
  }).join('');

  const miniRow = selPayType === 'minimarket'
    ? `<div class="r-row" style="background:#fff8e8;padding:8px;border-radius:6px;margin-top:4px;">
         <span>Kode Bayar Minimarket</span>
         <span style="font-weight:900;color:var(--black);letter-spacing:2px">${document.getElementById('minimarket-code').textContent}</span>
       </div>` : '';

  document.getElementById('receipt-box').innerHTML = `
    <div class="receipt-hdr">📋 Rincian Transaksi</div>
    <div class="r-row"><span style="color:var(--gray)">No. Pesanan</span><span style="font-weight:700">${orderId}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Tanggal</span><span>${dateStr}, ${timeStr}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Nama</span><span>${name}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Telepon</span><span>${phone}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Alamat</span><span style="text-align:right;max-width:60%;font-size:12px">${addr}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Kurir</span><span>${selKurirName}</span></div>
    <div class="r-row"><span style="color:var(--gray)">Metode Bayar</span><span>${payDesc}</span></div>
    <div style="border-top:1px solid #e8e8e8;margin:10px 0 6px;"></div>
    ${itemsHtml}
    <div style="margin-top:8px;">
      <div class="r-row"><span>Subtotal</span><span>${fmt(sub)}</span></div>
      <div class="r-row"><span>Ongkir (${selKurirName})</span><span>${fmt(selKurirCost)}</span></div>
      <div class="r-row bold"><span>Total Dibayar</span><span style="color:var(--black)">${fmt(total)}</span></div>
    </div>
    ${miniRow}
    <div class="receipt-status">✓ PESANAN DITERIMA</div>
  `;

  // Reset semua data setelah transaksi selesai
  cart = [];
  updateBadge();
  resetBuyerForm();
  selKurir = null; selKurirCost = 0; selKurirName = '';

  showPage('page-success');
}

function resetBuyerForm() {
  document.getElementById('buyer-name').value    = '';
  document.getElementById('buyer-phone').value   = '';
  document.getElementById('buyer-address').value = '';
  document.querySelectorAll('.kurir-card').forEach(c => c.classList.remove('selected'));
}

// ======= KEMBALI KE TOKO =======
function backToShop() {
  selBank = null; selEwallet = null; selMinimarket = null;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-shop').classList.add('active');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[data-cat="all"]').classList.add('active');
  renderProducts();
  // Scroll ke paling atas (hero slider)
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 20);
}

// ======= INISIALISASI =======
buildHeroDots();
renderProducts();
