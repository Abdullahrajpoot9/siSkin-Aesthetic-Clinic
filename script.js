// Modal Treatment Details Data
const treatmentsData = {
    hydra: {
        title: "Hydra Facial Treatment",
        content: `
            <p>Our signature Hydra Facial uses patented clinical technology to cleanse, extract, and hydrate your skin deeply.</p>
            <ul>
                <li><i class="fa-solid fa-check"></i> Removes dead skin cells and deep impurities</li>
                <li><i class="fa-solid fa-check"></i> Infuses skin with intensive hydrating serums</li>
                <li><i class="fa-solid fa-check"></i> Leaves an immediate glowing and supple skin tone</li>
                <li><i class="fa-solid fa-check"></i> Zero downtime & suitable for all skin types</li>
            </ul>
        `
    },
    laser: {
        title: "Advanced Laser Therapy",
        content: `
            <p>High-precision laser technology targeted for various aesthetic solutions under doctor supervision.</p>
            <ul>
                <li><i class="fa-solid fa-check"></i> Permanent body laser hair reduction</li>
                <li><i class="fa-solid fa-check"></i> Laser skin tightening & rejuvenation</li>
                <li><i class="fa-solid fa-check"></i> Target pigmentation and vascular spots</li>
                <li><i class="fa-solid fa-check"></i> Safe, effective, and minimally invasive</li>
            </ul>
        `
    },
    peel: {
        title: "Acne Chemical Peels",
        content: `
            <p>Specialized medical peels designed by Dr. Nooray & Dr. Pakeeza to address active acne and scarring.</p>
            <ul>
                <li><i class="fa-solid fa-check"></i> Exfoliates damaged outer layers of skin</li>
                <li><i class="fa-solid fa-check"></i> Controls active acne flare-ups</li>
                <li><i class="fa-solid fa-check"></i> Fades hyperpigmentation and acne marks</li>
                <li><i class="fa-solid fa-check"></i> Smooths overall skin tone & texture</li>
            </ul>
        `
    },
    microneedling: {
        title: "Microneedling Collagen Therapy",
        content: `
            <p>Stimulate your body's natural collagen production to repair skin damage and restore youthful texture.</p>
            <ul>
                <li><i class="fa-solid fa-check"></i> Reduces appearance of acne scars & open pores</li>
                <li><i class="fa-solid fa-check"></i> Enhances skin firmness & elasticity</li>
                <li><i class="fa-solid fa-check"></i> Performed in comfortable, gentle medical environment</li>
            </ul>
        `
    }
};

function openModal(treatmentKey) {
    const data = treatmentsData[treatmentKey];
    if (data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalBody').innerHTML = data.content;
        document.getElementById('treatmentModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('treatmentModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('treatmentModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Automatic Review Carousel Animation
const slides = document.querySelectorAll('.review-card-slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;

// Build Navigation Dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dot');

function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = slideIndex;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function autoNextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

// Auto switch review slides every 4.5 seconds
setInterval(autoNextSlide, 4500);