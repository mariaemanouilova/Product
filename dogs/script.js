// Dog breeds data
const dogBreeds = [
    {
        name: 'Golden Retriever',
        description: 'Friendly, intelligent, and devoted. Excellent family dogs known for their loyalty and gentle temperament.',
        traits: ['Friendly', 'Intelligent', 'Loyal'],
        image: 'img/Golden Retriever.webp',
        featured: true,
        details: {
            origin: 'Scotland',
            size: '20-24 inches (51-61 cm)',
            weight: '55-75 lbs (25-34 kg)',
            lifespan: '10-12 years',
            temperament: 'Gentle, affectionate, and eager to please',
            exercise: '1-2 hours daily',
            grooming: 'Regular brushing needed, heavy shedding',
            health: 'Generally healthy, watch for hip dysplasia'
        }
    },
    {
        name: 'Labrador Retriever',
        description: 'Outgoing, even-tempered, and energetic. Perfect companions for active families and excellent service dogs.',
        traits: ['Energetic', 'Friendly', 'Obedient'],
        image: 'img/Labrador Retriever.jpg',
        featured: true,
        details: {
            origin: 'Canada (Newfoundland)',
            size: '21-24 inches (53-62 cm)',
            weight: '55-80 lbs (25-36 kg)',
            lifespan: '10-12 years',
            temperament: 'Outgoing, even-tempered, and energetic',
            exercise: '1-2 hours daily',
            grooming: 'Minimal grooming, moderate shedding',
            health: 'Prone to hip dysplasia and obesity'
        }
    },
    {
        name: 'German Shepherd',
        description: 'Confident, courageous, and smart. Known for intelligence and versatility in police and military work.',
        traits: ['Intelligent', 'Brave', 'Loyal'],
        image: 'img/German Shepherd.webp',
        featured: true,
        details: {
            origin: 'Germany',
            size: '22-26 inches (55-65 cm)',
            weight: '50-90 lbs (23-41 kg)',
            lifespan: '9-13 years',
            temperament: 'Confident, courageous, and extremely versatile',
            exercise: '1-2 hours daily',
            grooming: 'Regular brushing, heavy shedding',
            health: 'Watch for hip dysplasia and digestive issues'
        }
    },
    {
        name: 'French Bulldog',
        description: 'Affectionate, playful, and adaptable. Compact size makes them perfect for apartment living.',
        traits: ['Affectionate', 'Playful', 'Compact'],
        image: 'img/Bulldog.jpg',
        featured: false,
        details: {
            origin: 'France',
            size: '11-13 inches (28-33 cm)',
            weight: '22-28 lbs (10-13 kg)',
            lifespan: '10-12 years',
            temperament: 'Affectionate, playful, and adaptable',
            exercise: '30-60 minutes daily',
            grooming: 'Minimal grooming, minimal shedding',
            health: 'Prone to breathing issues, heat sensitive'
        }
    },
    {
        name: 'Beagle',
        description: 'Curious, merry, and hunting-driven. Small but sturdy dogs with a great sense of smell.',
        traits: ['Curious', 'Energetic', 'Friendly'],
        image: 'img/Beagle.webp',
        featured: false,
        details: {
            origin: 'Great Britain',
            size: '13-15 inches (33-38 cm)',
            weight: '24-30 lbs (11-14 kg)',
            lifespan: '12-15 years',
            temperament: 'Curious, merry, and hunting-driven',
            exercise: '1-1.5 hours daily',
            grooming: 'Minimal grooming, moderate shedding',
            health: 'Generally healthy, watch for ear infections'
        }
    },
    {
        name: 'Bulldog',
        description: 'Dignified, courageous, and affectionate. Stocky build with a distinctive appearance and gentle nature.',
        traits: ['Calm', 'Courageous', 'Loyal'],
        image: 'img/Bulldog.jpg',
        featured: false,
        details: {
            origin: 'Great Britain',
            size: '12-15 inches (31-38 cm)',
            weight: '40-50 lbs (18-23 kg)',
            lifespan: '8-10 years',
            temperament: 'Dignified, courageous, and affectionate',
            exercise: '30-40 minutes daily',
            grooming: 'Regular grooming, minimal shedding',
            health: 'Prone to breathing issues and joint problems'
        }
    },
    {
        name: 'Poodle',
        description: 'Intelligent, athletic, and elegant. Highly trainable dogs available in multiple sizes.',
        traits: ['Intelligent', 'Elegant', 'Trainable'],
        image: 'img/Poodle.jpg',
        featured: false,
        details: {
            origin: 'France/Germany',
            size: 'Varies (15-22 inches for Standard)',
            weight: 'Varies (45-70 lbs for Standard)',
            lifespan: '12-15 years',
            temperament: 'Intelligent, athletic, and elegant',
            exercise: '1-2 hours daily',
            grooming: 'Regular professional grooming needed',
            health: 'Generally healthy, hypoallergenic coat'
        }
    },
    {
        name: 'Siberian Husky',
        description: 'Energetic, outgoing, and loyal. Striking appearance with high energy levels requiring plenty of exercise.',
        traits: ['Energetic', 'Friendly', 'Loyal'],
        image: 'img/Golden Retriever.webp',
        featured: false,
        details: {
            origin: 'Russia (Siberia)',
            size: '20-23.5 inches (51-60 cm)',
            weight: '35-60 lbs (16-27 kg)',
            lifespan: '12-14 years',
            temperament: 'Energetic, outgoing, and loyal',
            exercise: '1-2 hours daily',
            grooming: 'Regular brushing, heavy shedding',
            health: 'Generally healthy, watch for eye issues'
        }
    },
    {
        name: 'Dachshund',
        description: 'Clever, spirited, and spunky. Long body and short legs make them distinctive and adaptable.',
        traits: ['Clever', 'Spirited', 'Brave'],
        image: 'img/Beagle.webp',
        featured: false,
        details: {
            origin: 'Germany',
            size: '8-9 inches (20-23 cm)',
            weight: '24-32 lbs (11-15 kg)',
            lifespan: '12-16 years',
            temperament: 'Clever, spirited, and spunky',
            exercise: '30-60 minutes daily',
            grooming: 'Minimal grooming, minimal shedding',
            health: 'Watch for back problems and obesity'
        }
    },
    {
        name: 'Boxer',
        description: 'Playful, exuberant, and loyal. Muscular dogs with boundless energy and protective instincts.',
        traits: ['Playful', 'Protective', 'Energetic'],
        image: 'img/Labrador Retriever.jpg',
        featured: false,
        details: {
            origin: 'Germany',
            size: '21-25 inches (53-64 cm)',
            weight: '60-70 lbs (27-32 kg)',
            lifespan: '8-10 years',
            temperament: 'Playful, exuberant, and loyal',
            exercise: '1-2 hours daily',
            grooming: 'Minimal grooming, minimal shedding',
            health: 'Prone to heart issues and cancer'
        }
    },
    {
        name: 'Border Collie',
        description: 'Intelligent, energetic, and devoted. Highly trainable and often considered the smartest dog breed.',
        traits: ['Brilliant', 'Energetic', 'Loyal'],
        image: 'img/Poodle.jpg',
        featured: false,
        details: {
            origin: 'Great Britain/Scotland',
            size: '18-22 inches (46-56 cm)',
            weight: '30-55 lbs (14-25 kg)',
            lifespan: '12-15 years',
            temperament: 'Intelligent, energetic, and devoted',
            exercise: '1.5-2 hours daily',
            grooming: 'Regular brushing, moderate shedding',
            health: 'Generally healthy, watch for hip dysplasia'
        }
    },
    {
        name: 'Rottweiler',
        description: 'Confident, courageous, and good-natured. Often misunderstood but loyal family protectors.',
        traits: ['Confident', 'Loyal', 'Protective'],
        image: 'img/Labrador Retriever.jpg',
        featured: false,
        details: {
            origin: 'Germany',
            size: '22-27 inches (56-69 cm)',
            weight: '80-135 lbs (36-61 kg)',
            lifespan: '8-11 years',
            temperament: 'Confident, courageous, and good-natured',
            exercise: '1-2 hours daily',
            grooming: 'Minimal grooming, moderate shedding',
            health: 'Watch for hip dysplasia and heart issues'
        }
    }
];

// Render breed cards
function renderBreedCards() {
    const container = document.getElementById('breedsContainer');
    container.innerHTML = '';
    
    dogBreeds.forEach((breed, index) => {
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
                    
                    <!-- Accordion for Details -->
                    <div class="accordion accordion-flush mb-3" id="accordion-${index}">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details-${index}">
                                    <small style="font-weight: 600;">More Details</small>
                                </button>
                            </h2>
                            <div id="details-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                                <div class="accordion-body p-2">
                                    <div style="font-size: 0.85rem; color: #555;">
                                        <p class="mb-2"><strong>Origin:</strong> ${breed.details.origin}</p>
                                        <p class="mb-2"><strong>Size:</strong> ${breed.details.size}</p>
                                        <p class="mb-2"><strong>Weight:</strong> ${breed.details.weight}</p>
                                        <p class="mb-2"><strong>Lifespan:</strong> ${breed.details.lifespan}</p>
                                        <p class="mb-2"><strong>Temperament:</strong> ${breed.details.temperament}</p>
                                        <p class="mb-2"><strong>Exercise:</strong> ${breed.details.exercise}</p>
                                        <p class="mb-2"><strong>Grooming:</strong> ${breed.details.grooming}</p>
                                        <p class="mb-0"><strong>Health:</strong> ${breed.details.health}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
