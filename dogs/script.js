// Dog breeds data
const dogBreeds = [
    {
        name: 'Golden Retriever',
        description: 'Friendly, intelligent, and devoted. Excellent family dogs known for their loyalty and gentle temperament.',
        traits: ['Friendly', 'Intelligent', 'Loyal'],
        image: 'img/Golden Retriever.webp',
        featured: true
    },
    {
        name: 'Labrador Retriever',
        description: 'Outgoing, even-tempered, and energetic. Perfect companions for active families and excellent service dogs.',
        traits: ['Energetic', 'Friendly', 'Obedient'],
        image: 'img/Labrador Retriever.jpg',
        featured: true
    },
    {
        name: 'German Shepherd',
        description: 'Confident, courageous, and smart. Known for intelligence and versatility in police and military work.',
        traits: ['Intelligent', 'Brave', 'Loyal'],
        image: 'img/German Shepherd.webp',
        featured: true
    },
    {
        name: 'French Bulldog',
        description: 'Affectionate, playful, and adaptable. Compact size makes them perfect for apartment living.',
        traits: ['Affectionate', 'Playful', 'Compact'],
        image: 'img/Bulldog.jpg',
        featured: false
    },
    {
        name: 'Beagle',
        description: 'Curious, merry, and hunting-driven. Small but sturdy dogs with a great sense of smell.',
        traits: ['Curious', 'Energetic', 'Friendly'],
        image: 'img/Beagle.webp',
        featured: false
    },
    {
        name: 'Bulldog',
        description: 'Dignified, courageous, and affectionate. Stocky build with a distinctive appearance and gentle nature.',
        traits: ['Calm', 'Courageous', 'Loyal'],
        image: 'img/Bulldog.jpg',
        featured: false
    },
    {
        name: 'Poodle',
        description: 'Intelligent, athletic, and elegant. Highly trainable dogs available in multiple sizes.',
        traits: ['Intelligent', 'Elegant', 'Trainable'],
        image: 'img/Poodle.jpg',
        featured: false
    },
    {
        name: 'Siberian Husky',
        description: 'Energetic, outgoing, and loyal. Striking appearance with high energy levels requiring plenty of exercise.',
        traits: ['Energetic', 'Friendly', 'Loyal'],
        image: 'img/Golden Retriever.webp',
        featured: false
    },
    {
        name: 'Dachshund',
        description: 'Clever, spirited, and spunky. Long body and short legs make them distinctive and adaptable.',
        traits: ['Clever', 'Spirited', 'Brave'],
        image: 'img/Beagle.webp',
        featured: false
    },
    {
        name: 'Boxer',
        description: 'Playful, exuberant, and loyal. Muscular dogs with boundless energy and protective instincts.',
        traits: ['Playful', 'Protective', 'Energetic'],
        image: 'img/Labrador Retriever.jpg',
        featured: false
    },
    {
        name: 'Border Collie',
        description: 'Intelligent, energetic, and devoted. Highly trainable and often considered the smartest dog breed.',
        traits: ['Brilliant', 'Energetic', 'Loyal'],
        image: 'img/Poodle.jpg',
        featured: false
    },
    {
        name: 'Rottweiler',
        description: 'Confident, courageous, and good-natured. Often misunderstood but loyal family protectors.',
        traits: ['Confident', 'Loyal', 'Protective'],
        image: 'img/Labrador Retriever.jpg',
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
