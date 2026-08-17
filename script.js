const CATALOG = {
  men: {
    watches: { label: 'Watches', subs: { all: 'All Watches', dress: 'Dress Watches', sport: 'Sport Watches', chronograph: 'Chronographs', smart: 'Smart Watches' } },
    glasses: { label: 'Glasses', subs: { all: 'All Glasses', sunglasses: 'Sunglasses', optical: 'Optical Frames', 'blue-light': 'Blue Light' } },
    shirts: { label: 'Shirts & Tops', subs: { all: 'All Shirts', oxford: 'Oxford Shirts', polo: 'Polo Shirts', tshirts: 'T-Shirts', hoodies: 'Hoodies' } },
    suits: { label: 'Suits', subs: { all: 'All Suits', business: 'Business Suits', tuxedo: 'Tuxedos', blazers: 'Blazers' } },
    shoes: { label: 'Shoes', subs: { all: 'All Shoes', oxfords: 'Oxford & Derby', sneakers: 'Sneakers', boots: 'Boots', loafers: 'Loafers' } },
    shorts: { label: 'Shorts', subs: { all: 'All Shorts', chino: 'Chino Shorts', denim: 'Denim Shorts', athletic: 'Athletic Shorts', swim: 'Swim Shorts' } },
    pants: { label: 'Pants', subs: { all: 'All Pants', chinos: 'Chino Pants', jeans: 'Jeans', dress: 'Dress Trousers' } },
    jackets: { label: 'Jackets', subs: { all: 'All Jackets', leather: 'Leather Jackets', bomber: 'Bomber Jackets' } },
    accessories: { label: 'Accessories', subs: { all: 'All Accessories', belts: 'Belts', wallets: 'Wallets' } }
  },
  women: {
    dresses: { label: 'Dresses', subs: { all: 'All Dresses', evening: 'Evening & Formal', casual: 'Casual Day Dresses', maxi: 'Maxi Dresses', mini: 'Mini & Cocktail' } },
    bags: { label: 'Bags', subs: { all: 'All Bags', handbag: 'Handbags', crossbody: 'Crossbody', tote: 'Totes', clutch: 'Clutches' } },
    shoes: { label: 'Shoes', subs: { all: 'All Shoes', heels: 'Heels & Pumps', flats: 'Flats & Ballets', sneakers: 'Sneakers', sandals: 'Sandals' } },
    tops: { label: 'Tops', subs: { all: 'All Tops', blouses: 'Blouses', tshirts: 'T-Shirts & Tanks', sweaters: 'Sweaters & Knits' } },
    skirts: { label: 'Skirts', subs: { all: 'All Skirts', midi: 'Midi Skirts', mini: 'Mini Skirts', pencil: 'Pencil Skirts' } },
    glasses: { label: 'Glasses', subs: { all: 'All Glasses', sunglasses: 'Sunglasses', 'cat-eye': 'Cat-Eye', optical: 'Optical Frames' } },
    watches: { label: 'Watches', subs: { all: 'All Watches', dress: 'Dress Watches', sport: 'Sport Watches', smart: 'Smart Watches' } },
    shorts: { label: 'Shorts', subs: { all: 'All Shorts', denim: 'Denim Shorts', 'high-waist': 'High-Waisted', athletic: 'Athletic Shorts' } },
    jewelry: { label: 'Jewelry', subs: { all: 'All Jewelry', necklaces: 'Necklaces', earrings: 'Earrings', bracelets: 'Bracelets' } }
  }
};

const PRODUCTS = [
  // MEN - 30 ITEMS
  { id: 1, gender: 'men', category: 'watches', subcategory: 'chronograph', title: 'Chronograph Black Steel Watch', price: 299, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80', desc: 'Precision movement with luxury black stainless steel casing.', sizes: ['One Size'] },
  { id: 2, gender: 'men', category: 'watches', subcategory: 'dress', title: 'Classic Leather Automatic Watch', price: 340, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80', desc: 'Swiss automatic movement with genuine brown leather strap.', sizes: ['One Size'] },
  { id: 3, gender: 'men', category: 'watches', subcategory: 'sport', title: 'Diver Pro 200m Sport Watch', price: 275, img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&auto=format&fit=crop&q=80', desc: 'Water-resistant sport watch with luminous dial.', sizes: ['One Size'] },
  { id: 4, gender: 'men', category: 'watches', subcategory: 'smart', title: 'Titanium Smart Hybrid Watch', price: 420, img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=80', desc: 'Hybrid smartwatch with activity tracking and classic design.', sizes: ['One Size'] },
  { id: 5, gender: 'men', category: 'glasses', subcategory: 'sunglasses', title: 'Aviator Dark Sunglasses', price: 120, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80', desc: 'Polarized lenses with classic gold frame.', sizes: ['One Size'] },
  { id: 6, gender: 'men', category: 'glasses', subcategory: 'sunglasses', title: 'Wayfarer Matte Black Shades', price: 95, img: 'https://images.unsplash.com/photo-1572635196233-15912a23b9b0?w=600&auto=format&fit=crop&q=80', desc: 'UV400 protection with acetate frame.', sizes: ['One Size'] },
  { id: 7, gender: 'men', category: 'glasses', subcategory: 'optical', title: 'Round Metal Optical Frames', price: 145, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5361?w=600&auto=format&fit=crop&q=80', desc: 'Lightweight titanium frames for prescription lenses.', sizes: ['One Size'] },
  { id: 8, gender: 'men', category: 'shirts', subcategory: 'oxford', title: 'Slim Fit Oxford Cotton Shirt', price: 85, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80', desc: '100% Egyptian cotton breathable business shirt.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 9, gender: 'men', category: 'shirts', subcategory: 'oxford', title: 'Striped French Cuff Dress Shirt', price: 98, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b23?w=600&auto=format&fit=crop&q=80', desc: 'Elegant striped shirt with French cuffs.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 10, gender: 'men', category: 'shirts', subcategory: 'polo', title: 'Piqué Cotton Polo Shirt', price: 72, img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80', desc: 'Classic fit polo in premium piqué cotton.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 11, gender: 'men', category: 'shirts', subcategory: 'tshirts', title: 'Streetwear Graphic Tee', price: 45, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80', desc: 'Heavyweight organic cotton with minimal embroidery.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 12, gender: 'men', category: 'suits', subcategory: 'business', title: 'Charcoal Grey Italian Suit', price: 490, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80', desc: 'Tailored fit suit made with fine virgin wool.', sizes: ['46', '48', '50', '52'] },
  { id: 13, gender: 'men', category: 'suits', subcategory: 'business', title: 'Navy Slim Fit Two-Piece Suit', price: 520, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80', desc: 'Modern slim silhouette in wrinkle-resistant wool blend.', sizes: ['46', '48', '50', '52'] },
  { id: 14, gender: 'men', category: 'suits', subcategory: 'tuxedo', title: 'Midnight Black Peak Lapel Tuxedo', price: 680, img: 'https://images.unsplash.com/photo-1593030761757-71faebb6216f?w=600&auto=format&fit=crop&q=80', desc: 'Formal satin lapel tuxedo for black-tie events.', sizes: ['46', '48', '50', '52'] },
  { id: 15, gender: 'men', category: 'suits', subcategory: 'blazers', title: 'Unstructured Linen Blazer', price: 320, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80', desc: 'Breathable linen blazer for smart-casual looks.', sizes: ['46', '48', '50', '52'] },
  { id: 16, gender: 'men', category: 'shoes', subcategory: 'oxfords', title: 'Leather Oxford Dress Shoes', price: 210, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80', desc: 'Handcrafted Italian leather dress shoes.', sizes: ['40', '41', '42', '43', '44'] },
  { id: 17, gender: 'men', category: 'shoes', subcategory: 'sneakers', title: 'Retro Minimalist Sneakers', price: 130, img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80', desc: 'Clean white leather sneakers for daily wear.', sizes: ['40', '41', '42', '43', '44'] },
  { id: 18, gender: 'men', category: 'shoes', subcategory: 'boots', title: 'Chelsea Suede Boots', price: 245, img: 'https://images.unsplash.com/photo-1638247025967-f4d4cba7580a?w=600&auto=format&fit=crop&q=80', desc: 'Elastic side panel boots in soft suede.', sizes: ['40', '41', '42', '43', '44'] },
  { id: 19, gender: 'men', category: 'shoes', subcategory: 'loafers', title: 'Penny Leather Loafers', price: 185, img: 'https://images.unsplash.com/photo-1533867617858-e7b107e8693f?w=600&auto=format&fit=crop&q=80', desc: 'Classic penny slot loafers in polished calf leather.', sizes: ['40', '41', '42', '43', '44'] },
  { id: 20, gender: 'men', category: 'shorts', subcategory: 'chino', title: 'Tailored Chino Shorts', price: 60, img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80', desc: 'Comfortable stretch cotton chino shorts.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 21, gender: 'men', category: 'shorts', subcategory: 'denim', title: 'Raw Denim Cut-Off Shorts', price: 55, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b23?w=600&auto=format&fit=crop&q=80', desc: 'Vintage wash rigid denim with raw hem.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 22, gender: 'men', category: 'shorts', subcategory: 'athletic', title: 'Performance Training Shorts', price: 48, img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80', desc: 'Moisture-wicking fabric with zip pocket.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 23, gender: 'men', category: 'shorts', subcategory: 'swim', title: 'Quick-Dry Swim Shorts', price: 65, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80', desc: 'Resort-ready swim shorts with mesh lining.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 24, gender: 'men', category: 'pants', subcategory: 'chinos', title: 'Slim Stretch Chino Pants', price: 88, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a51?w=600&auto=format&fit=crop&q=80', desc: 'Everyday chinos with 2-way stretch comfort.', sizes: ['30', '32', '34', '36'] },
  { id: 25, gender: 'men', category: 'pants', subcategory: 'jeans', title: 'Dark Wash Slim Jeans', price: 95, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80', desc: 'Premium denim with tapered leg fit.', sizes: ['30', '32', '34', '36'] },
  { id: 26, gender: 'men', category: 'pants', subcategory: 'dress', title: 'Wool Blend Dress Trousers', price: 125, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80', desc: 'Flat-front trousers for formal occasions.', sizes: ['30', '32', '34', '36'] },
  { id: 27, gender: 'men', category: 'jackets', subcategory: 'leather', title: 'Classic Biker Leather Jacket', price: 450, img: 'https://images.unsplash.com/photo-1551028711-00167b16eac5?w=600&auto=format&fit=crop&q=80', desc: 'Full-grain leather with asymmetric zip.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 28, gender: 'men', category: 'jackets', subcategory: 'bomber', title: 'Nylon Bomber Jacket', price: 195, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80', desc: 'Lightweight bomber with ribbed cuffs.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 29, gender: 'men', category: 'accessories', subcategory: 'belts', title: 'Reversible Leather Belt', price: 68, img: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=600&auto=format&fit=crop&q=80', desc: 'Black and brown reversible buckle belt.', sizes: ['32', '34', '36', '38'] },
  { id: 30, gender: 'men', category: 'accessories', subcategory: 'wallets', title: 'Slim Card Holder Wallet', price: 55, img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80', desc: 'Minimalist leather wallet with RFID blocking.', sizes: ['One Size'] },

  // WOMEN - 30 ITEMS
  { id: 31, gender: 'women', category: 'dresses', subcategory: 'evening', title: 'Silk Slip Evening Dress', price: 240, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80', desc: '100% pure silk elegant midi dress.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 32, gender: 'women', category: 'dresses', subcategory: 'casual', title: 'Floral Summer Wrap Dress', price: 95, img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=80', desc: 'Lightweight linen dress ideal for warm days.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 33, gender: 'women', category: 'dresses', subcategory: 'maxi', title: 'Flowing Bohemian Maxi Dress', price: 130, img: 'https://images.unsplash.com/photo-1496747611176-843222e1ad57?w=600&auto=format&fit=crop&q=80', desc: 'Tiered maxi dress with adjustable straps.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 34, gender: 'women', category: 'dresses', subcategory: 'mini', title: 'Sequin Cocktail Mini Dress', price: 185, img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80', desc: 'Statement sequin mini for evening events.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 35, gender: 'women', category: 'bags', subcategory: 'handbag', title: 'Structured Leather Handbag', price: 310, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80', desc: 'Iconic shape with gold hardware detail.', sizes: ['One Size'] },
  { id: 36, gender: 'women', category: 'bags', subcategory: 'crossbody', title: 'Minimalist Crossbody Bag', price: 180, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80', desc: 'Compact genuine leather shoulder bag.', sizes: ['One Size'] },
  { id: 37, gender: 'women', category: 'bags', subcategory: 'tote', title: 'Canvas & Leather Tote Bag', price: 220, img: 'https://images.unsplash.com/photo-1591561954557-2694110b7722?w=600&auto=format&fit=crop&q=80', desc: 'Spacious tote with leather trim handles.', sizes: ['One Size'] },
  { id: 38, gender: 'women', category: 'bags', subcategory: 'clutch', title: 'Evening Satin Clutch', price: 95, img: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=600&auto=format&fit=crop&q=80', desc: 'Elegant satin clutch with chain strap.', sizes: ['One Size'] },
  { id: 39, gender: 'women', category: 'shoes', subcategory: 'heels', title: 'Classic Pointed Stiletto Pumps', price: 195, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80', desc: 'Timeless suede high heels.', sizes: ['36', '37', '38', '39', '40'] },
  { id: 40, gender: 'women', category: 'shoes', subcategory: 'sandals', title: 'Platform Leather Sandals', price: 110, img: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&auto=format&fit=crop&q=80', desc: 'Modern and ergonomic leather sandals.', sizes: ['36', '37', '38', '39', '40'] },
  { id: 41, gender: 'women', category: 'shoes', subcategory: 'flats', title: 'Cap-Toe Ballet Flats', price: 88, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80', desc: 'Comfortable leather ballet flats for all-day wear.', sizes: ['36', '37', '38', '39', '40'] },
  { id: 42, gender: 'women', category: 'shoes', subcategory: 'sneakers', title: 'White Leather Platform Sneakers', price: 145, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80', desc: 'Elevated sole sneakers in premium leather.', sizes: ['36', '37', '38', '39', '40'] },
  { id: 43, gender: 'women', category: 'tops', subcategory: 'blouses', title: 'Silk Button-Down Blouse', price: 98, img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=80', desc: 'Flowing silk blouse with hidden buttons.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 44, gender: 'women', category: 'tops', subcategory: 'tshirts', title: 'Organic Cotton Basic Tee', price: 42, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80', desc: 'Soft organic cotton crew neck tee.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 45, gender: 'women', category: 'tops', subcategory: 'sweaters', title: 'Cashmere Blend Crew Sweater', price: 165, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80', desc: 'Luxurious cashmere blend knit sweater.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 46, gender: 'women', category: 'skirts', subcategory: 'midi', title: 'Pleated Satin Midi Skirt', price: 115, img: 'https://images.unsplash.com/photo-1583496664526-fcd265a32836?w=600&auto=format&fit=crop&q=80', desc: 'Elegant pleated midi in lustrous satin.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 47, gender: 'women', category: 'skirts', subcategory: 'mini', title: 'A-Line Denim Mini Skirt', price: 68, img: 'https://images.unsplash.com/photo-1583496664526-fcd265a32836?w=600&auto=format&fit=crop&q=80', desc: 'Classic A-line denim mini with button front.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 48, gender: 'women', category: 'skirts', subcategory: 'pencil', title: 'High-Waist Pencil Skirt', price: 92, img: 'https://images.unsplash.com/photo-1583496664526-fcd265a32836?w=600&auto=format&fit=crop&q=80', desc: 'Office-ready pencil skirt in stretch wool.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 49, gender: 'women', category: 'glasses', subcategory: 'cat-eye', title: 'Cat-Eye Acetate Sunglasses', price: 105, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop&q=80', desc: 'Chic cat-eye design with UV400 lenses.', sizes: ['One Size'] },
  { id: 50, gender: 'women', category: 'glasses', subcategory: 'sunglasses', title: 'Oversized Gradient Sunglasses', price: 98, img: 'https://images.unsplash.com/photo-1577803645803-964895d93eaa?w=600&auto=format&fit=crop&q=80', desc: 'Bold oversized frames with gradient lenses.', sizes: ['One Size'] },
  { id: 51, gender: 'women', category: 'glasses', subcategory: 'optical', title: 'Thin Rim Round Optical Frames', price: 135, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5361?w=600&auto=format&fit=crop&q=80', desc: 'Delicate round frames for prescription use.', sizes: ['One Size'] },
  { id: 52, gender: 'women', category: 'watches', subcategory: 'dress', title: 'Rose Gold Mesh Watch', price: 210, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80', desc: 'Elegant slim profile watch in rose gold.', sizes: ['One Size'] },
  { id: 53, gender: 'women', category: 'watches', subcategory: 'sport', title: 'Ceramic Sport Chronograph', price: 265, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=80', desc: 'Lightweight ceramic case with mother-of-pearl dial.', sizes: ['One Size'] },
  { id: 54, gender: 'women', category: 'watches', subcategory: 'smart', title: 'Rose Gold Smart Watch', price: 350, img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=80', desc: 'Fitness tracking with interchangeable straps.', sizes: ['One Size'] },
  { id: 55, gender: 'women', category: 'shorts', subcategory: 'denim', title: 'High-Waisted Denim Shorts', price: 55, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80', desc: 'Vintage wash rigid denim shorts.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 56, gender: 'women', category: 'shorts', subcategory: 'high-waist', title: 'Linen Paperbag Shorts', price: 62, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80', desc: 'High-waist linen shorts with tie belt.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 57, gender: 'women', category: 'shorts', subcategory: 'athletic', title: 'High-Rise Bike Shorts', price: 48, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80', desc: 'Compression bike shorts for training.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: 58, gender: 'women', category: 'jewelry', subcategory: 'necklaces', title: 'Gold Layered Chain Necklace', price: 125, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80', desc: '18k gold-plated layered chain set.', sizes: ['One Size'] },
  { id: 59, gender: 'women', category: 'jewelry', subcategory: 'earrings', title: 'Pearl Drop Earrings', price: 88, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80', desc: 'Freshwater pearl drops with gold hooks.', sizes: ['One Size'] },
  { id: 60, gender: 'women', category: 'jewelry', subcategory: 'bracelets', title: 'Tennis Bracelet', price: 195, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80', desc: 'Crystal tennis bracelet in rhodium plating.', sizes: ['One Size'] }
];

const AUTH_STORAGE_KEY = 'aeterna_users';
const SESSION_KEY = 'aeterna_session';
let currentGender = 'men';
let currentCategory = 'all';
let currentSubcategory = 'all';
let cart = [];
let selectedSize = null;
let favorites = JSON.parse(localStorage.getItem('aeterna_favs')) || [];

function getUsers() { try { return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || []; } catch { return []; } }
function saveUsers(users) { localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users)); }
function getSession() { try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; } }
function setSession(user) { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, name: user.name, email: user.email })); }
function clearSession() { sessionStorage.removeItem(SESSION_KEY); }

function getCurrentUser() {
  const session = getSession();
  if (!session) return null;
  return getUsers().find(u => u.id === session.id) || null;
}

function register(name, email, password) {
  const trimmedEmail = email.trim().toLowerCase();
  if (!name.trim() || !trimmedEmail || password.length < 6) return { ok: false, message: 'Fill all fields. Password min 6 chars.' };
  const users = getUsers();
  if (users.some(u => u.email === trimmedEmail)) return { ok: false, message: 'Email already exists.' };

  const user = { 
    id: crypto.randomUUID(), 
    name: name.trim(), 
    email: trimmedEmail, 
    password, 
    orders: [], 
    address: { cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '' },
    card: { number: '', expiry: '', cvv: '' },
    createdAt: new Date().toISOString() 
  };
  users.push(user); saveUsers(users); setSession(user);
  return { ok: true, user };
}

function login(email, password) {
  const user = getUsers().find(u => u.email === email.trim().toLowerCase() && u.password === password);
  if (!user) return { ok: false, message: 'Invalid email or password.' };
  setSession(user); return { ok: true, user };
}

function logout() { clearSession(); }

function formatPrice(value) { return '$ ' + value.toFixed(2); }

function selectGender(gender, btn) {
  currentGender = gender;
  currentCategory = 'all';
  currentSubcategory = 'all';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('hero-subtitle').innerText = gender === 'men' ? 'MENSWEAR COLLECTION' : 'WOMENSWEAR COLLECTION';
  renderCategories(); renderSubcategories(); renderProducts();
}

function renderCategories() {
  const container = document.getElementById('category-nav'); container.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = `sub-btn ${currentCategory === 'all' ? 'active' : ''}`;
  allBtn.innerText = currentGender === 'men' ? 'All Men' : 'All Women';
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
  const container = document.getElementById('sub-nav'); container.innerHTML = '';
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

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const filtered = PRODUCTS.filter(p => {
    if (p.gender !== currentGender) return false;
    if (currentCategory !== 'all' && p.category !== currentCategory) return false;
    if (currentSubcategory !== 'all' && p.subcategory !== currentSubcategory) return false;
    return true;
  });

  document.getElementById('catalog-title').innerText = currentCategory === 'all' ? (currentGender === 'men' ? "All Men's" : "All Women's") : CATALOG[currentGender][currentCategory].label;
  document.getElementById('product-count').innerText = filtered.length + ' item(s)';

  if (!filtered.length) { grid.innerHTML = '<p class="empty-msg">No products found.</p>'; return; }

  const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <div class="favorite-btn" onclick="toggleFavorite(${product.id}, event)" title="Toggle Favorite">
        <i class="${favorites.includes(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </div>
      <img src="${product.img}" onerror="this.src='${fallbackImg}'" alt="${product.title}" class="product-img" loading="lazy">
      <div class="product-info">
        <div class="product-tag">${CATALOG[product.gender][product.category].subs[product.subcategory] || product.category}</div>
        <div class="product-title">${product.title}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
      </div>
    </div>
  `).join('');
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    if(favorites.includes(id)) { favorites = favorites.filter(f => f !== id); } 
    else { favorites.push(id); }
    localStorage.setItem('aeterna_favs', JSON.stringify(favorites));
    updateFavCount(); renderProducts();
    if (document.getElementById('account-panel').style.display === 'flex') renderFavoritesList();
}

function updateFavCount() { document.getElementById('fav-count').innerText = favorites.length; }

function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id); if (!product) return;
  selectedSize = product.sizes[0];
  const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";

  document.getElementById('modal-body').innerHTML = `
    <img src="${product.img}" onerror="this.src='${fallbackImg}'" alt="${product.title}" class="modal-img">
    <div class="modal-details">
      <h2>${product.title}</h2>
      <div class="product-price modal-price">${formatPrice(product.price)}</div>
      <p class="modal-desc">${product.desc}</p>
      <div class="size-selector">
        <label>Size</label>
        <div class="size-options" id="size-options">
          ${product.sizes.map(size => `<button type="button" class="size-btn ${size === selectedSize ? 'active' : ''}" onclick="selectSize('${size}')">${size}</button>`).join('')}
        </div>
      </div>
      <button class="btn-primary" onclick="addToCart(${product.id})">Add to Bag</button>
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
  const product = PRODUCTS.find(p => p.id === id); if (!product) return;
  cart.push({ ...product, selectedSize: selectedSize || product.sizes[0] });
  updateCart(); closeModal(); toggleCart();
}

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  document.getElementById('cart-count').innerText = cart.length;
  if (!cart.length) { cartItems.innerHTML = '<p class="empty-cart-msg">Your bag is empty.</p>'; document.getElementById('cart-total-price').innerText = formatPrice(0); return; }

  let total = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    total += item.price;
    const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";
    return `<div class="cart-item"><img src="${item.img}" onerror="this.src='${fallbackImg}'" alt="${item.title}"><div class="cart-item-info"><div><b>${item.title}</b></div><div class="cart-item-meta">Size: ${item.selectedSize}</div><div>${formatPrice(item.price)}</div></div><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></div>`;
  }).join('');
  document.getElementById('cart-total-price').innerText = formatPrice(total);
}

function checkout() {
  if (!cart.length) return showToast('Your bag is empty.');
  const user = getCurrentUser();
  if (!user) { toggleCart(); openAuthModal('login'); return showToast('Please sign in to complete your order.'); }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const users = getUsers(); const index = users.findIndex(u => u.id === user.id);
  
  const order = { id: 'ORD-' + Date.now().toString(36).toUpperCase(), date: new Date().toISOString(), items: cart.map(i => ({ title: i.title, price: i.price, size: i.selectedSize, img: i.img })), total };
  users[index].orders.unshift(order); saveUsers(users); setSession(users[index]);
  cart = []; updateCart(); toggleCart(); showToast('Order placed! Confirmation: ' + order.id); updateAuthUI();
}

function openAuthModal(tab = 'login') { document.getElementById('auth-modal').style.display = 'flex'; switchAuthTab(tab); }
function closeAuthModal() { document.getElementById('auth-modal').style.display = 'none'; document.getElementById('login-error').innerText = ''; document.getElementById('register-error').innerText = ''; }

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}

function handleLogin(event) {
  event.preventDefault();
  const res = login(document.getElementById('login-email').value, document.getElementById('login-password').value);
  if (!res.ok) return document.getElementById('login-error').innerText = res.message;
  closeAuthModal(); updateAuthUI(); showToast('Welcome back, ' + res.user.name + '!');
}

function handleRegister(event) {
  event.preventDefault();
  const res = register(document.getElementById('register-name').value, document.getElementById('register-email').value, document.getElementById('register-password').value);
  if (!res.ok) return document.getElementById('register-error').innerText = res.message;
  closeAuthModal(); updateAuthUI(); showToast('Account created! Welcome to AETERNA.');
}

function handleLogout() { logout(); updateAuthUI(); closeAccountPanel(); showToast('You have been signed out.'); }

function toggleAccountMenu() { document.getElementById('account-menu').classList.toggle('open'); }

function openAccountPanel(tab = 'orders') {
  const user = getCurrentUser();
  if (!user) return openAuthModal('login');
  document.getElementById('account-menu').classList.remove('open');
  document.getElementById('account-panel').style.display = 'flex';
  document.getElementById('account-name').innerText = user.name;
  document.getElementById('account-email').innerText = user.email;
  
  // Set form default profile values
  document.getElementById('edit-name').value = user.name;
  document.getElementById('edit-password').value = '';

  // Set address defaults if available
  if (user.address) {
    document.getElementById('edit-cep').value = user.address.cep || '';
    document.getElementById('edit-rua').value = user.address.rua || '';
    document.getElementById('edit-numero').value = user.address.numero || '';
    document.getElementById('edit-bairro').value = user.address.bairro || '';
    document.getElementById('edit-cidade').value = user.address.cidade || '';
    document.getElementById('edit-estado').value = user.address.estado || '';
  }

  // Set card defaults if available
  if (user.card) {
    document.getElementById('edit-card-number').value = user.card.number || '';
    document.getElementById('edit-card-expiry').value = user.card.expiry || '';
    document.getElementById('edit-card-cvv').value = user.card.cvv || '';
  }

  switchAccTab(tab);
}

function switchAccTab(tab) {
  document.querySelectorAll('.account-tab').forEach(t => t.classList.toggle('active', t.dataset.actab === tab));
  document.querySelectorAll('.acc-section').forEach(s => s.style.display = 'none');
  document.getElementById(`acc-${tab}`).style.display = 'block';

  if (tab === 'orders') renderOrders();
  if (tab === 'favorites') renderFavoritesList();
}

function renderOrders() {
    const user = getCurrentUser();
    const ordersEl = document.getElementById('acc-orders');
    if (!user.orders.length) return ordersEl.innerHTML = '<p class="empty-msg">No orders yet. Start shopping!</p>';
    const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";
    ordersEl.innerHTML = user.orders.map(order => `
      <div class="order-card"><div class="order-header"><span class="order-id">${order.id}</span><span class="order-date">${new Date(order.date).toLocaleDateString()}</span></div>
      <ul class="order-items">${order.items.map(item => `<li><img src="${item.img}" onerror="this.src='${fallbackImg}'" alt=""><span>${item.title} (${item.size})</span><span>${formatPrice(item.price)}</span></li>`).join('')}</ul>
      <div class="order-total">Total: ${formatPrice(order.total)}</div></div>
    `).join('');
}

function renderFavoritesList() {
    const grid = document.getElementById('favorites-grid');
    const favProducts = PRODUCTS.filter(p => favorites.includes(p.id));
    if (!favProducts.length) { grid.innerHTML = '<p class="empty-msg" style="grid-column: 1/-1;">No favorites yet.</p>'; return; }
    const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";

    grid.innerHTML = favProducts.map(product => `
      <div class="product-card" onclick="openModal(${product.id})">
        <div class="favorite-btn" onclick="toggleFavorite(${product.id}, event)"><i class="fa-solid fa-heart"></i></div>
        <img src="${product.img}" onerror="this.src='${fallbackImg}'" alt="${product.title}" class="product-img" loading="lazy">
        <div class="product-info"><div class="product-title">${product.title}</div><div class="product-price">${formatPrice(product.price)}</div></div>
      </div>
    `).join('');
}

// ViaCEP Integration Function
async function consultarCep(cep) {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) return;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
        if (!data.erro) {
            document.getElementById('edit-rua').value = data.logradouro || '';
            document.getElementById('edit-bairro').value = data.bairro || '';
            document.getElementById('edit-cidade').value = data.localidade || '';
            document.getElementById('edit-estado').value = data.uf || '';
            showToast('CEP encontrado com sucesso!');
        } else {
            showToast('CEP não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
    }
}

function updateProfile(event) {
    event.preventDefault();
    const newName = document.getElementById('edit-name').value.trim();
    const newPass = document.getElementById('edit-password').value;
    
    const address = {
        cep: document.getElementById('edit-cep').value.trim(),
        rua: document.getElementById('edit-rua').value.trim(),
        numero: document.getElementById('edit-numero').value.trim(),
        bairro: document.getElementById('edit-bairro').value.trim(),
        cidade: document.getElementById('edit-cidade').value.trim(),
        estado: document.getElementById('edit-estado').value.trim()
    };

    const card = {
        number: document.getElementById('edit-card-number').value.trim(),
        expiry: document.getElementById('edit-card-expiry').value.trim(),
        cvv: document.getElementById('edit-card-cvv').value.trim()
    };

    const user = getCurrentUser(); if(!user) return;
    const users = getUsers(); const index = users.findIndex(u => u.id === user.id);
    
    users[index].name = newName;
    if(newPass.length >= 6) { users[index].password = newPass; }
    users[index].address = address;
    users[index].card = card;
    
    saveUsers(users); setSession(users[index]);
    document.getElementById('account-name').innerText = newName;
    showToast('Profile updated successfully!');
}

function closeAccountPanel() { document.getElementById('account-panel').style.display = 'none'; }

function updateAuthUI() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('login-link');
  const userMenu = document.getElementById('user-menu-wrap');
  if (user) { loginLink.style.display = 'none'; userMenu.style.display = 'flex'; document.getElementById('user-name').innerText = user.name.split(' ')[0]; } 
  else { loginLink.style.display = 'flex'; userMenu.style.display = 'none'; }
}

function showToast(message) {
  const toast = document.getElementById('toast'); toast.innerText = message; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();
  const grid = document.getElementById('products-grid');
  if (!query) return renderProducts();
  
  const results = PRODUCTS.filter(p => p.gender === currentGender && (p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)));
  document.getElementById('catalog-title').innerText = 'Search Results';
  document.getElementById('product-count').innerText = results.length + ' item(s)';
  if (!results.length) { grid.innerHTML = '<p class="empty-msg">No products match your search.</p>'; return; }

  const fallbackImg = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80";
  grid.innerHTML = results.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <div class="favorite-btn" onclick="toggleFavorite(${product.id}, event)"><i class="${favorites.includes(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i></div>
      <img src="${product.img}" onerror="this.src='${fallbackImg}'" alt="${product.title}" class="product-img" loading="lazy">
      <div class="product-info"><div class="product-tag">${CATALOG[product.gender][product.category].label}</div><div class="product-title">${product.title}</div><div class="product-price">${formatPrice(product.price)}</div></div>
    </div>
  `).join('');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('account-menu');
  const trigger = document.getElementById('user-menu-wrap');
  if (menu && trigger && !trigger.contains(e.target)) menu.classList.remove('open');
});

window.addEventListener('DOMContentLoaded', () => {
  const users = getUsers();
  if (!users.some(u => u.email === 'demo@aeterna.com')) {
    users.push({ 
      id: 'demo-user', 
      name: 'Demo Customer', 
      email: 'demo@aeterna.com', 
      password: 'demo123', 
      orders: [], 
      address: { cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '' },
      card: { number: '', expiry: '', cvv: '' },
      createdAt: new Date().toISOString() 
    });
    saveUsers(users);
  }
  updateFavCount(); renderCategories(); renderSubcategories(); renderProducts(); updateAuthUI();
});