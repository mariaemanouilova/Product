// ============================================
// DATA & INITIALIZATION
// ============================================

// Sample car data generator
function generateSampleCars() {
    const brands = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Nissan', 'Chevrolet', 'Hyundai'];
    const models = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Truck', 'Van', 'Convertible', 'Wagon'];
    const cars = [];

    for (let i = 0; i < 20; i++) {
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const model = models[Math.floor(Math.random() * models.length)];
        const year = 2015 + Math.floor(Math.random() * 10);
        const price = 15000 + Math.floor(Math.random() * 85000);
        const originalPrice = price + Math.floor(Math.random() * 15000);
        const km = Math.floor(Math.random() * 150000);
        const color = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Gray', 'Green'][Math.floor(Math.random() * 7)];
        const fuel = ['Petrol', 'Diesel', 'Hybrid', 'Electric'][Math.floor(Math.random() * 4)];
        const transmission = Math.random() > 0.5 ? 'Automatic' : 'Manual';
        const featured = i < 3;
        
        // Generate image URL based on brand and model
        const imageUrl = `https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop&q=80&${encodeURIComponent(brand + ' ' + model)}`;
        const searchImageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(brand)},${encodeURIComponent(model)},car`;

        cars.push({
            id: i + 1,
            brand,
            model,
            year,
            price,
            originalPrice,
            km,
            color,
            fuel,
            transmission,
            featured,
            image: searchImageUrl,
            condition: 'Excellent',
            owner: `Owner ${i + 1}`,
            rating: (3 + Math.random() * 2).toFixed(1)
        });
    }
    return cars;
}

// Sample tire data generator
function generateSampleTires() {
    const types = ['All-Season', 'Winter', 'Summer', 'Performance', 'Off-Road', 'Highway'];
    const widths = [195, 205, 215, 225, 235, 245];
    const heights = [50, 55, 60, 65];
    const tires = [];

    for (let i = 0; i < 20; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const width = widths[Math.floor(Math.random() * widths.length)];
        const height = heights[Math.floor(Math.random() * heights.length)];
        const wheel = 14 + Math.floor(Math.random() * 6);
        const price = 80 + Math.floor(Math.random() * 420);
        const originalPrice = price + Math.floor(Math.random() * 100);
        const brand = ['Michelin', 'Bridgestone', 'Continental', 'Goodyear', 'Pirelli', 'Dunlop'][Math.floor(Math.random() * 6)];
        const featured = i < 3;

        tires.push({
            id: i + 1,
            type,
            brand,
            width,
            height,
            wheel,
            price,
            originalPrice,
            featured,
            lifespan: '3-5 years',
            warranty: '3 years',
            rating: (3.5 + Math.random() * 1.5).toFixed(1)
        });
    }
    return tires;
}

// Initialize localStorage
function initializeLocalStorage() {
    if (!localStorage.getItem('cars')) {
        localStorage.setItem('cars', JSON.stringify(generateSampleCars()));
    }
    if (!localStorage.getItem('tires')) {
        localStorage.setItem('tires', JSON.stringify(generateSampleTires()));
    }
}

// Get data from localStorage
function getCars() {
    return JSON.parse(localStorage.getItem('cars')) || [];
}

function getTires() {
    return JSON.parse(localStorage.getItem('tires')) || [];
}

// ============================================
// CAROUSEL RENDERING
// ============================================

function renderHotCarsCarousel() {
    const cars = getCars().filter(car => car.featured);
    const container = document.getElementById('hotCarsContent');
    container.innerHTML = '';

    cars.forEach((car, index) => {
        const isActive = index === 0 ? 'active' : '';
        const item = document.createElement('div');
        item.className = `carousel-item ${isActive}`;
        item.innerHTML = `
            <div class="row g-4 align-items-center p-4">
                <div class="col-md-6">
                    <div class="product-image" style="height: 300px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); background-image: url('${car.image}'); background-size: cover; background-position: center;">
                    </div>
                </div>
                <div class="col-md-6">
                    <h4 style="color: var(--primary-color); font-weight: bold;">${car.brand} ${car.model}</h4>
                    <div class="mb-3">
                        <span style="font-size: 0.9rem; color: #6b7280;">Year: ${car.year} | Fuel: ${car.fuel}</span>
                    </div>
                    <div class="product-price">
                        $${car.price.toLocaleString()}
                        <span class="original">$${car.originalPrice.toLocaleString()}</span>
                    </div>
                    <div class="mb-3">
                        <span style="color: var(--success-color); font-weight: bold;"><i class="bi bi-star-fill"></i> ${car.rating} Rating</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #6b7280; margin-bottom: 1rem;">
                        <p><strong>Mileage:</strong> ${car.km.toLocaleString()} km</p>
                        <p><strong>Condition:</strong> ${car.condition}</p>
                        <p><strong>Color:</strong> ${car.color}</p>
                    </div>
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderHotTiresCarousel() {
    const tires = getTires().filter(tire => tire.featured);
    const container = document.getElementById('hotTiresContent');
    container.innerHTML = '';

    tires.forEach((tire, index) => {
        const isActive = index === 0 ? 'active' : '';
        const item = document.createElement('div');
        item.className = `carousel-item ${isActive}`;
        item.innerHTML = `
            <div class="row g-4 align-items-center p-4">
                <div class="col-md-6">
                    <div class="product-image" style="height: 300px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);">
                        <span style="font-size: 4rem; color: #9ca3af;"><i class="bi bi-circle"></i></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <h4 style="color: var(--primary-color); font-weight: bold;">${tire.brand} ${tire.type}</h4>
                    <div class="mb-3">
                        <span style="font-size: 0.9rem; color: #6b7280;">Size: ${tire.width}/${tire.height}R${tire.wheel}</span>
                    </div>
                    <div class="product-price">
                        $${tire.price.toLocaleString()}
                        <span class="original">$${tire.originalPrice.toLocaleString()}</span>
                    </div>
                    <div class="mb-3">
                        <span style="color: var(--success-color); font-weight: bold;"><i class="bi bi-star-fill"></i> ${tire.rating} Rating</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #6b7280; margin-bottom: 1rem;">
                        <p><strong>Type:</strong> ${tire.type}</p>
                        <p><strong>Warranty:</strong> ${tire.warranty}</p>
                        <p><strong>Lifespan:</strong> ${tire.lifespan}</p>
                    </div>
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

// ============================================
// SEARCH & FILTER
// ============================================

let currentCarsPage = 1;
let currentTiresPage = 1;
const itemsPerPage = 6;

function filterCars(filters) {
    const cars = getCars();
    return cars.filter(car => {
        const matchBrand = !filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase());
        const matchModel = !filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase());
        const matchYear = !filters.year || car.year >= parseInt(filters.year);
        const matchPrice = !filters.price || car.price <= parseInt(filters.price);
        const matchKm = !filters.km || car.km <= parseInt(filters.km);
        return matchBrand && matchModel && matchYear && matchPrice && matchKm;
    });
}

function filterTires(filters) {
    const tires = getTires();
    return tires.filter(tire => {
        const matchType = !filters.type || tire.type.toLowerCase().includes(filters.type.toLowerCase());
        const matchWidth = !filters.width || tire.width == parseInt(filters.width);
        const matchHeight = !filters.height || tire.height == parseInt(filters.height);
        const matchWheel = !filters.wheel || tire.wheel == parseInt(filters.wheel);
        return matchType && matchWidth && matchHeight && matchWheel;
    });
}

// ============================================
// RENDERING
// ============================================

function renderCarCards(cars, page = 1) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = cars.slice(start, end);
    const container = document.getElementById('carsResults');
    container.innerHTML = '';

    if (paginated.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-info">No cars found matching your criteria.</div></div>';
        return;
    }

    paginated.forEach(car => {
        const discount = Math.round(((car.originalPrice - car.price) / car.originalPrice) * 100);
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-lg-4';
        card.innerHTML = `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${car.image}'); background-size: cover; background-position: center;">
                    ${discount > 0 ? `<span class="product-badge">-${discount}%</span>` : ''}
                </div>
                <div class="product-body">
                    <div class="product-title">${car.brand} ${car.model}</div>
                    <div class="product-subtitle">${car.year} | ${car.fuel} | ${car.transmission}</div>
                    <div class="product-info">
                        <div class="product-info-item">
                            <span class="product-info-label">Mileage:</span>
                            <span>${car.km.toLocaleString()} km</span>
                        </div>
                        <div class="product-info-item">
                            <span class="product-info-label">Color:</span>
                            <span>${car.color}</span>
                        </div>
                    </div>
                    <div class="product-price">
                        $${car.price.toLocaleString()}
                        ${car.originalPrice > car.price ? `<span class="original">$${car.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="accordion accordion-flush mb-3">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#car-${car.id}">
                                    <small>View Details</small>
                                </button>
                            </h2>
                            <div id="car-${car.id}" class="accordion-collapse collapse">
                                <div class="accordion-body p-2 small">
                                    <p><strong>Condition:</strong> ${car.condition}</p>
                                    <p><strong>Rating:</strong> <span style="color: var(--success-color);"><i class="bi bi-star-fill"></i> ${car.rating}</span></p>
                                    <p><strong>Owner:</strong> ${car.owner}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100">
                        <i class="bi bi-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderTireCards(tires, page = 1) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = tires.slice(start, end);
    const container = document.getElementById('tiresResults');
    container.innerHTML = '';

    if (paginated.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-info">No tires found matching your criteria.</div></div>';
        return;
    }

    paginated.forEach(tire => {
        const discount = Math.round(((tire.originalPrice - tire.price) / tire.originalPrice) * 100);
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-lg-4';
        card.innerHTML = `
            <div class="product-card">
                <div class="product-image">
                    <span><i class="bi bi-circle"></i></span>
                    ${discount > 0 ? `<span class="product-badge">-${discount}%</span>` : ''}
                </div>
                <div class="product-body">
                    <div class="product-title">${tire.brand} ${tire.type}</div>
                    <div class="product-subtitle">${tire.width}/${tire.height}R${tire.wheel}</div>
                    <div class="product-info">
                        <div class="product-info-item">
                            <span class="product-info-label">Type:</span>
                            <span>${tire.type}</span>
                        </div>
                        <div class="product-info-item">
                            <span class="product-info-label">Wheel:</span>
                            <span>${tire.wheel} inch</span>
                        </div>
                    </div>
                    <div class="product-price">
                        $${tire.price.toLocaleString()}
                        ${tire.originalPrice > tire.price ? `<span class="original">$${tire.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="accordion accordion-flush mb-3">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tire-${tire.id}">
                                    <small>View Details</small>
                                </button>
                            </h2>
                            <div id="tire-${tire.id}" class="accordion-collapse collapse">
                                <div class="accordion-body p-2 small">
                                    <p><strong>Warranty:</strong> ${tire.warranty}</p>
                                    <p><strong>Lifespan:</strong> ${tire.lifespan}</p>
                                    <p><strong>Rating:</strong> <span style="color: var(--success-color);"><i class="bi bi-star-fill"></i> ${tire.rating}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100">
                        <i class="bi bi-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderPagination(totalItems, currentPage, pageType) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const container = document.getElementById(pageType === 'cars' ? 'carsPagination' : 'tiresPagination');
    container.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = 'pagination justify-content-center';

    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>`;
    ul.appendChild(prevLi);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
        ul.appendChild(li);
    }

    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>`;
    ul.appendChild(nextLi);

    container.appendChild(ul);

    // Add click handlers
    ul.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = parseInt(link.dataset.page);
            if (pageType === 'cars') {
                currentCarsPage = page;
                handleCarsSearch();
            } else {
                currentTiresPage = page;
                handleTiresSearch();
            }
        });
    });
}

// ============================================
// EVENT HANDLERS
// ============================================

function handleCarsSearch() {
    const filters = {
        brand: document.getElementById('filterBrand').value,
        model: document.getElementById('filterModel').value,
        year: document.getElementById('filterYear').value,
        price: document.getElementById('filterPrice').value,
        km: document.getElementById('filterKm').value
    };

    const filteredCars = filterCars(filters);
    document.getElementById('carsResultCount').textContent = `(${filteredCars.length} results)`;
    renderCarCards(filteredCars, currentCarsPage);
    renderPagination(filteredCars.length, currentCarsPage, 'cars');
}

function handleTiresSearch() {
    const filters = {
        type: document.getElementById('filterTireType').value,
        width: document.getElementById('filterTireWidth').value,
        height: document.getElementById('filterTireHeight').value,
        wheel: document.getElementById('filterTireHeight').value
    };

    const filteredTires = filterTires(filters);
    document.getElementById('tiresResultCount').textContent = `(${filteredTires.length} results)`;
    renderTireCards(filteredTires, currentTiresPage);
    renderPagination(filteredTires.length, currentTiresPage, 'tires');
}

// ============================================
// NAVIGATION & TABS
// ============================================

function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    document.getElementById('home').style.display = 'none';

    // Show selected section
    if (sectionId === 'home') {
        document.getElementById('home').style.display = 'block';
        document.getElementById('breadcrumb-target').textContent = 'Home';
    } else if (sectionId === 'cars') {
        document.getElementById('cars-section').style.display = 'block';
        document.getElementById('breadcrumb-target').innerHTML = '<a href="#cars-section">Cars</a>';
    } else if (sectionId === 'tires') {
        document.getElementById('tires-section').style.display = 'block';
        document.getElementById('breadcrumb-target').innerHTML = '<a href="#tires-section">Tires</a>';
    } else {
        document.getElementById(sectionId).style.display = 'block';
        document.getElementById('breadcrumb-target').textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize localStorage
    initializeLocalStorage();

    // Render carousels
    renderHotCarsCarousel();
    renderHotTiresCarousel();

    // Initial search
    handleCarsSearch();
    handleTiresSearch();

    // Navigation click handlers
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.section);
        });
    });

    // Search button handlers
    document.getElementById('searchCarsBtn').addEventListener('click', () => {
        currentCarsPage = 1;
        handleCarsSearch();
    });

    document.getElementById('searchTiresBtn').addEventListener('click', () => {
        currentTiresPage = 1;
        handleTiresSearch();
    });

    // Real-time search as user types
    ['filterBrand', 'filterModel', 'filterYear', 'filterPrice', 'filterKm'].forEach(id => {
        document.getElementById(id).addEventListener('keyup', () => {
            currentCarsPage = 1;
            handleCarsSearch();
        });
    });

    ['filterTireType', 'filterTireWidth', 'filterTireHeight'].forEach(id => {
        document.getElementById(id).addEventListener('keyup', () => {
            currentTiresPage = 1;
            handleTiresSearch();
        });
    });

    // Show home section by default
    switchSection('home');
});
