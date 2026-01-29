// Dog breeds data
const dogBreeds = [
    {
        name: 'Golden Retriever',
        description: 'Friendly, intelligent, and devoted. Excellent family dogs known for their loyalty and gentle temperament.',
        traits: ['Friendly', 'Intelligent', 'Loyal'],
        image: 'https://images.unsplash.com/photo-1633722715463-d30628cff4a9?w=500&h=400&fit=crop',
        featured: true
    },
    {
        name: 'Labrador Retriever',
        description: 'Outgoing, even-tempered, and energetic. Perfect companions for active families and excellent service dogs.',
        traits: ['Energetic', 'Friendly', 'Obedient'],
        image: 'https://images.unsplash.com/photo-1633722715463-d30628cff4a9?w=500&h=400&fit=crop',
        featured: true
    },
    {
        name: 'German Shepherd',
        description: 'Confident, courageous, and smart. Known for intelligence and versatility in police and military work.',
        traits: ['Intelligent', 'Brave', 'Loyal'],
        image: 'https://images.unsplash.com/photo-1568152950566-c1bf43f0a86d?w=500&h=400&fit=crop',
        featured: true
    },
    {
        name: 'French Bulldog',
        description: 'Affectionate, playful, and adaptable. Compact size makes them perfect for apartment living.',
        traits: ['Affectionate', 'Playful', 'Compact'],
        image: 'https://images.unsplash.com/photo-1583511655857-d19db992cb74?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Beagle',
        description: 'Curious, merry, and hunting-driven. Small but sturdy dogs with a great sense of smell.',
        traits: ['Curious', 'Energetic', 'Friendly'],
        image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Bulldog',
        description: 'Dignified, courageous, and affectionate. Stocky build with a distinctive appearance and gentle nature.',
        traits: ['Calm', 'Courageous', 'Loyal'],
        image: 'https://images.unsplash.com/photo-1583511655857-d19db992cb74?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Poodle',
        description: 'Intelligent, athletic, and elegant. Highly trainable dogs available in multiple sizes.',
        traits: ['Intelligent', 'Elegant', 'Trainable'],
        image: 'https://images.unsplash.com/photo-1546527868-ccb7ee566dba?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Siberian Husky',
        description: 'Energetic, outgoing, and loyal. Striking appearance with high energy levels requiring plenty of exercise.',
        traits: ['Energetic', 'Friendly', 'Loyal'],
        image: 'https://images.unsplash.com/photo-1558370508-6c4ee3a66153?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Dachshund',
        description: 'Clever, spirited, and spunky. Long body and short legs make them distinctive and adaptable.',
        traits: ['Clever', 'Spirited', 'Brave'],
        image: 'https://images.unsplash.com/photo-1601758228658-3bbb62cd0c45?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Boxer',
        description: 'Playful, exuberant, and loyal. Muscular dogs with boundless energy and protective instincts.',
        traits: ['Playful', 'Protective', 'Energetic'],
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Border Collie',
        description: 'Intelligent, energetic, and devoted. Highly trainable and often considered the smartest dog breed.',
        traits: ['Brilliant', 'Energetic', 'Loyal'],
        image: 'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=500&h=400&fit=crop',
        featured: false
    },
    {
        name: 'Rottweiler',
        description: 'Confident, courageous, and good-natured. Often misunderstood but loyal family protectors.',
        traits: ['Confident', 'Loyal', 'Protective'],
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=400&fit=crop',
        featured: false
    }
];

// Render breed cards
function renderBreedCards() {
    const container = document.getElementById('breedsContainer');
    container.innerHTML = '';
    
    dogBreeds.forEach(breed => {
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-lg-4';
        card.innerHTML = `
            <div class="breed-card">
                <img src="${breed.image}" alt="${breed.name}" class="breed-card-image">
                <div class="breed-card-body">
                    <h5 class="breed-card-title">${breed.name}</h5>
                    <p class="breed-card-description">${breed.description}</p>
                    <div class="breed-card-traits">
                        ${breed.traits.map(trait => `<span class="breed-trait">${trait}</span>`).join('')}
                    </div>
                    <button class="breed-btn w-100">Learn More</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render carousel
function renderCarousel() {
    const featuredBreeds = dogBreeds.filter(breed => breed.featured);
    const carouselContent = document.getElementById('carouselContent');
    carouselContent.innerHTML = '';
    
    featuredBreeds.forEach((breed, index) => {
        const isActive = index === 0 ? 'active' : '';
        const slide = document.createElement('div');
        slide.className = `carousel-item ${isActive}`;
        slide.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="${breed.image}" alt="${breed.name}" class="img-fluid rounded" style="object-fit: cover; height: 400px; width: 100%;">
                </div>
                <div class="col-md-6 p-4">
                    <h3 style="color: var(--primary-color); font-weight: bold; margin-bottom: 1rem;">${breed.name}</h3>
                    <p style="font-size: 1.1rem; color: #666; margin-bottom: 1.5rem;">${breed.description}</p>
                    <div class="breed-card-traits mb-3">
                        ${breed.traits.map(trait => `<span class="breed-trait">${trait}</span>`).join('')}
                    </div>
                    <button class="breed-btn">Discover More</button>
                </div>
            </div>
        `;
        carouselContent.appendChild(slide);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderBreedCards();
    renderCarousel();
});

// Add event listeners to Learn More buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('breed-btn')) {
        alert('More information about this breed would be displayed here!');
    }
});
