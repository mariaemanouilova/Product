// ========== STATE MANAGEMENT ==========
let cars = [];
let tires = [];
let currentMode = 'add'; // add, edit, delete
let currentEditId = null;
let currentEditType = null;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
    renderCars();
    renderTires();
    updateStats();
    setupEventListeners();
});

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('[data-tab]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update navigation
    document.querySelectorAll('.admin-sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    if (tabName === 'cars') {
        document.getElementById('carsTab').style.display = 'block';
    } else if (tabName === 'tires') {
        document.getElementById('tiresTab').style.display = 'block';
    }
}

// ========== LOCAL STORAGE MANAGEMENT ==========
function loadDataFromStorage() {
    const storedCars = localStorage.getItem('cars');
    const storedTires = localStorage.getItem('tires');

    if (storedCars) {
        cars = JSON.parse(storedCars);
    }

    if (storedTires) {
        tires = JSON.parse(storedTires);
    }
}

function saveDataToStorage() {
    localStorage.setItem('cars', JSON.stringify(cars));
    localStorage.setItem('tires', JSON.stringify(tires));
}

// ========== RENDER CARS ==========
function renderCars() {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';

    if (cars.length === 0) {
        grid.innerHTML = '<div class="col-12"><p class="text-center text-muted">No cars available. Add one to get started!</p></div>';
        return;
    }

    cars.forEach(car => {
        const card = createCarCard(car);
        grid.appendChild(card);
    });
}

function createCarCard(car) {
    const div = document.createElement('div');
    div.className = 'admin-card';
    div.innerHTML = `
        <div class="admin-card-image">
            <img src="${car.image}" alt="${car.brand} ${car.model}" onerror="this.style.display='none'">
        </div>
        <div class="admin-card-body">
            <h5 class="admin-card-title">${car.brand} ${car.model}</h5>
            <div class="admin-card-info">
                <div class="admin-card-info-row">
                    <span>Year:</span>
                    <strong>${car.year}</strong>
                </div>
                <div class="admin-card-info-row">
                    <span>Mileage:</span>
                    <strong>${car.km} KM</strong>
                </div>
                <div class="admin-card-info-row">
                    <span>Fuel:</span>
                    <strong>${car.fuel}</strong>
                </div>
            </div>
            <div class="admin-card-price">$${car.price.toLocaleString()}</div>
            <div class="admin-card-actions">
                <button class="admin-card-btn btn-view" onclick="viewCarDetails(${car.id})" title="View Details">
                    <i class="bi bi-eye"></i> View
                </button>
                <button class="admin-card-btn btn-edit" onclick="openCarModal('edit', ${car.id})" title="Edit Car">
                    <i class="bi bi-pencil"></i> Edit
                </button>
                <button class="admin-card-btn btn-delete" onclick="openCarModal('delete', ${car.id})" title="Delete Car">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </div>
        </div>
    `;
    return div;
}

function viewCarDetails(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;

    const discount = ((car.originalPrice - car.price) / car.originalPrice * 100).toFixed(0);

    const content = `
        <div class="row">
            <div class="col-md-6">
                <img src="${car.image}" alt="${car.brand} ${car.model}" style="width: 100%; border-radius: 0.5rem; margin-bottom: 1rem;" onerror="this.style.display='none'">
            </div>
            <div class="col-md-6">
                <h4>${car.brand} ${car.model}</h4>
                <p class="text-muted">${car.year} • ${car.condition}</p>
                <h5 class="text-primary">$${car.price.toLocaleString()}</h5>
                <small class="text-success">Save ${discount}%</small>
                <hr>
                <div class="details-list">
                    <p><strong>Mileage:</strong> ${car.km.toLocaleString()} KM</p>
                    <p><strong>Color:</strong> ${car.color}</p>
                    <p><strong>Fuel Type:</strong> ${car.fuel}</p>
                    <p><strong>Transmission:</strong> ${car.transmission}</p>
                    <p><strong>Owner:</strong> ${car.owner}</p>
                    <p><strong>Rating:</strong> ${car.rating} ⭐</p>
                    <p><strong>Featured:</strong> ${car.featured ? '✓ Yes' : '✗ No'}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('detailsTitle').textContent = `${car.brand} ${car.model} Details`;
    document.getElementById('detailsContent').innerHTML = content;
    new bootstrap.Modal(document.getElementById('detailsModal')).show();
}

// ========== RENDER TIRES ==========
function renderTires() {
    const grid = document.getElementById('tiresGrid');
    grid.innerHTML = '';

    if (tires.length === 0) {
        grid.innerHTML = '<div class="col-12"><p class="text-center text-muted">No tires available. Add one to get started!</p></div>';
        return;
    }

    tires.forEach(tire => {
        const card = createTireCard(tire);
        grid.appendChild(card);
    });
}

function createTireCard(tire) {
    const div = document.createElement('div');
    div.className = 'admin-card';
    div.innerHTML = `
        <div class="admin-card-image" style="background: linear-gradient(135deg, #f3f4f6, #e5e7eb);">
            <i class="bi bi-circle" style="font-size: 4rem; color: #9ca3af;"></i>
        </div>
        <div class="admin-card-body">
            <h5 class="admin-card-title">${tire.brand} ${tire.type}</h5>
            <div class="admin-card-info">
                <div class="admin-card-info-row">
                    <span>Size:</span>
                    <strong>${tire.width}/${tire.height}R${tire.wheel}</strong>
                </div>
                <div class="admin-card-info-row">
                    <span>Warranty:</span>
                    <strong>${tire.warranty}</strong>
                </div>
                <div class="admin-card-info-row">
                    <span>Lifespan:</span>
                    <strong>${tire.lifespan}</strong>
                </div>
            </div>
            <div class="admin-card-price">$${tire.price.toLocaleString()}</div>
            <div class="admin-card-actions">
                <button class="admin-card-btn btn-view" onclick="viewTireDetails(${tire.id})" title="View Details">
                    <i class="bi bi-eye"></i> View
                </button>
                <button class="admin-card-btn btn-edit" onclick="openTireModal('edit', ${tire.id})" title="Edit Tire">
                    <i class="bi bi-pencil"></i> Edit
                </button>
                <button class="admin-card-btn btn-delete" onclick="openTireModal('delete', ${tire.id})" title="Delete Tire">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </div>
        </div>
    `;
    return div;
}

function viewTireDetails(id) {
    const tire = tires.find(t => t.id === id);
    if (!tire) return;

    const content = `
        <div class="details-list">
            <h5 class="mb-3">${tire.brand} ${tire.type}</h5>
            <p><strong>Size:</strong> ${tire.width}/${tire.height}R${tire.wheel}</p>
            <p><strong>Price:</strong> $${tire.price.toLocaleString()}</p>
            <p><strong>Original Price:</strong> $${tire.originalPrice.toLocaleString()}</p>
            <p><strong>Warranty:</strong> ${tire.warranty}</p>
            <p><strong>Lifespan:</strong> ${tire.lifespan}</p>
            <p><strong>Rating:</strong> ${tire.rating} ⭐</p>
            <p><strong>Featured:</strong> ${tire.featured ? '✓ Yes' : '✗ No'}</p>
        </div>
    `;

    document.getElementById('detailsTitle').textContent = `${tire.brand} ${tire.type} Details`;
    document.getElementById('detailsContent').innerHTML = content;
    new bootstrap.Modal(document.getElementById('detailsModal')).show();
}

// ========== CAR MODAL MANAGEMENT ==========
function openCarModal(mode, id = null) {
    currentMode = mode;
    currentEditId = id;
    currentEditType = 'car';

    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    const form = document.getElementById('carForm');

    // Reset form
    form.reset();

    if (mode === 'add') {
        document.getElementById('carModalTitle').textContent = 'Add New Car';
    } else if (mode === 'edit') {
        const car = cars.find(c => c.id === id);
        if (car) {
            document.getElementById('carModalTitle').textContent = 'Edit Car';
            document.getElementById('carBrand').value = car.brand;
            document.getElementById('carModel').value = car.model;
            document.getElementById('carYear').value = car.year;
            document.getElementById('carPrice').value = car.price;
            document.getElementById('carOriginalPrice').value = car.originalPrice;
            document.getElementById('carKm').value = car.km;
            document.getElementById('carColor').value = car.color;
            document.getElementById('carFuel').value = car.fuel;
            document.getElementById('carTransmission').value = car.transmission;
            document.getElementById('carFeatured').checked = car.featured;
        }
    } else if (mode === 'delete') {
        const car = cars.find(c => c.id === id);
        if (car) {
            document.getElementById('carModalTitle').textContent = 'Delete Car - Confirm?';
            document.getElementById('carForm').style.display = 'none';
            document.querySelector('#carModal .modal-footer .btn-primary').textContent = '🗑️ Delete Permanently';
        }
    }

    modal.show();
}

function confirmCarAction() {
    if (currentMode === 'delete') {
        cars = cars.filter(c => c.id !== currentEditId);
        showAlert('Car deleted successfully!', 'success');
        renderCars();
        updateStats();
        document.getElementById('carForm').style.display = 'block';
        bootstrap.Modal.getInstance(document.getElementById('carModal')).hide();
    } else {
        // Validate form
        if (!document.getElementById('carForm').checkValidity()) {
            document.getElementById('carForm').reportValidity();
            return;
        }

        const carData = {
            brand: document.getElementById('carBrand').value,
            model: document.getElementById('carModel').value,
            year: parseInt(document.getElementById('carYear').value),
            price: parseInt(document.getElementById('carPrice').value),
            originalPrice: parseInt(document.getElementById('carOriginalPrice').value),
            km: parseInt(document.getElementById('carKm').value),
            color: document.getElementById('carColor').value,
            fuel: document.getElementById('carFuel').value,
            transmission: document.getElementById('carTransmission').value,
            featured: document.getElementById('carFeatured').checked
        };

        if (currentMode === 'add') {
            const newCar = {
                id: Math.max(...cars.map(c => c.id || 0), 0) + 1,
                ...carData,
                condition: 'Used',
                owner: 'Private',
                rating: (Math.random() * 2 + 3).toFixed(1),
                image: `https://source.unsplash.com/400x300/?${carData.brand},${carData.model},car`
            };
            cars.push(newCar);
            showAlert('Car added successfully!', 'success');
        } else if (currentMode === 'edit') {
            const carIndex = cars.findIndex(c => c.id === currentEditId);
            if (carIndex !== -1) {
                cars[carIndex] = { ...cars[carIndex], ...carData };
                showAlert('Car updated successfully!', 'success');
            }
        }

        saveDataToStorage();
        renderCars();
        updateStats();
        bootstrap.Modal.getInstance(document.getElementById('carModal')).hide();
    }
}

// ========== TIRE MODAL MANAGEMENT ==========
function openTireModal(mode, id = null) {
    currentMode = mode;
    currentEditId = id;
    currentEditType = 'tire';

    const modal = new bootstrap.Modal(document.getElementById('tireModal'));
    const form = document.getElementById('tireForm');

    // Reset form
    form.reset();

    if (mode === 'add') {
        document.getElementById('tireModalTitle').textContent = 'Add New Tire';
    } else if (mode === 'edit') {
        const tire = tires.find(t => t.id === id);
        if (tire) {
            document.getElementById('tireModalTitle').textContent = 'Edit Tire';
            document.getElementById('tireBrand').value = tire.brand;
            document.getElementById('tireType').value = tire.type;
            document.getElementById('tireWidth').value = tire.width;
            document.getElementById('tireHeight').value = tire.height;
            document.getElementById('tireWheel').value = tire.wheel;
            document.getElementById('tirePrice').value = tire.price;
            document.getElementById('tireOriginalPrice').value = tire.originalPrice;
            document.getElementById('tireWarranty').value = tire.warranty;
            document.getElementById('tireLifespan').value = tire.lifespan;
            document.getElementById('tireFeatured').checked = tire.featured;
        }
    } else if (mode === 'delete') {
        const tire = tires.find(t => t.id === id);
        if (tire) {
            document.getElementById('tireModalTitle').textContent = 'Delete Tire - Confirm?';
            document.getElementById('tireForm').style.display = 'none';
            document.querySelector('#tireModal .modal-footer .btn-primary').textContent = '🗑️ Delete Permanently';
        }
    }

    modal.show();
}

function confirmTireAction() {
    if (currentMode === 'delete') {
        tires = tires.filter(t => t.id !== currentEditId);
        showAlert('Tire deleted successfully!', 'success');
        renderTires();
        updateStats();
        document.getElementById('tireForm').style.display = 'block';
        bootstrap.Modal.getInstance(document.getElementById('tireModal')).hide();
    } else {
        // Validate form
        if (!document.getElementById('tireForm').checkValidity()) {
            document.getElementById('tireForm').reportValidity();
            return;
        }

        const tireData = {
            brand: document.getElementById('tireBrand').value,
            type: document.getElementById('tireType').value,
            width: parseInt(document.getElementById('tireWidth').value),
            height: parseInt(document.getElementById('tireHeight').value),
            wheel: parseInt(document.getElementById('tireWheel').value),
            price: parseInt(document.getElementById('tirePrice').value),
            originalPrice: parseInt(document.getElementById('tireOriginalPrice').value),
            warranty: document.getElementById('tireWarranty').value,
            lifespan: document.getElementById('tireLifespan').value,
            featured: document.getElementById('tireFeatured').checked
        };

        if (currentMode === 'add') {
            const newTire = {
                id: Math.max(...tires.map(t => t.id || 0), 0) + 1,
                ...tireData,
                rating: (Math.random() * 2 + 3).toFixed(1)
            };
            tires.push(newTire);
            showAlert('Tire added successfully!', 'success');
        } else if (currentMode === 'edit') {
            const tireIndex = tires.findIndex(t => t.id === currentEditId);
            if (tireIndex !== -1) {
                tires[tireIndex] = { ...tires[tireIndex], ...tireData };
                showAlert('Tire updated successfully!', 'success');
            }
        }

        saveDataToStorage();
        renderTires();
        updateStats();
        bootstrap.Modal.getInstance(document.getElementById('tireModal')).hide();
    }
}

// ========== STATISTICS ==========
function updateStats() {
    document.getElementById('carCount').textContent = cars.length;
    document.getElementById('tireCount').textContent = tires.length;
}

// ========== ALERT NOTIFICATIONS ==========
function showAlert(message, type = 'info') {
    const container = document.getElementById('alertContainer');
    const alertDiv = document.createElement('div');
    alertDiv.className = `admin-alert admin-alert-${type}`;
    
    const iconClass = {
        'success': 'bi-check-circle-fill',
        'error': 'bi-exclamation-circle-fill',
        'info': 'bi-info-circle-fill'
    };

    alertDiv.innerHTML = `
        <i class="bi ${iconClass[type]}"></i>
        <span>${message}</span>
    `;

    container.appendChild(alertDiv);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        alertDiv.classList.add('removing');
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 3000);
}
