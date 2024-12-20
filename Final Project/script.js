document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('type');
    const dogTypeSelect = document.getElementById('dog-type');
    const catTypeSelect = document.getElementById('cat-type');
    const petGrid = document.getElementById('pet-grid');
    const donationFormApp = document.getElementById('donation-form');
    const volunteerFormApp = document.getElementById('volunteer-form');

    const pets = [
        { name: 'Buddy', type: 'dog', category: 'german shepherd', image: 'german shepherd.jpg', description: ' Meet our handsome 1-year-old German Shepherd! This loyal and active dog has a beautiful medium-sized frame and loves to play. Known for their intelligence and protective nature, theyre perfect for an active family who enjoys outdoor adventures. Health status: Fully vaccinated and in excellent health. Available for adoption!' },
        { name: 'Max', type: 'dog', category: 'poodle', image: 'poodle.jpg', description: 'Meet our adorable 3-month-old Poodle! This small, playful pup has a curly coat and a big heart. Full of energy and curiosity, they love to socialize and play. A perfect companion for families looking for a cheerful, affectionate pet! Health status: Healthy, vaccinated, and dewormed. Available for adoption!' },
        { name: 'Bella', type: 'dog', category: 'golden retriever', image: 'golden retriever.jpg', description: 'Meet our charming 2-month-old Golden Retriever! This sweet and loving pup is full of potential and charm. With a soft coat and gentle nature, they’re ideal for families seeking a playful and affectionate companion. Health status: Healthy and up-to-date on vaccinations. Not available at the moment.' },
        { name: 'Charlie', type: 'dog', category: 'siberian husky', image: 'siberian husky.jpg', description: 'Meet our energetic 10-month-old Siberian Husky! This beautiful dog has a striking coat and bright eyes. Full of energy and love for outdoor activities, they re perfect for an active family who enjoys adventure. Health status: Healthy, vaccinated, and well-socialized. Available for adoption!' },
        { name: 'Luna', type: 'cat', category: 'burmese cat', image: 'burmese cat.jpg', description: 'Meet our adorable 2-month-old Burmese kitten with stunning blue eyes! This playful and affectionate kitten has a sleek, shiny coat and loves cuddling up for naps or exploring new spaces. Their sweet nature and curiosity make them the perfect companion for families or anyone seeking a loving, playful pet! Health status: Healthy and up-to-date on vaccinations. Available for adoption!' },
        { name: 'Mittens', type: 'cat', category: 'persian cat', image: 'persian cat.jpg', description: 'Meet our gorgeous 6-month-old Persian cat! With a fluffy coat and calm personality, this cat loves lounging around and getting pampered. They’re perfect for a quiet home where they can enjoy plenty of attention. Health status: Healthy but not available for adoption at this time.' },
        { name: 'Simba', type: 'cat', category: 'ragamuffin', image: 'ragamuffin.jpg', description: ' Meet our sweet 2-month-old Ragamuffin kitten! With soft fur and a playful personality, they love snuggling up and exploring new places. They’re affectionate, curious, and ready to bring joy to any home. Health status: Healthy, vaccinated, and dewormed. Available for adoption!' },
        { name: 'Oliver', type: 'cat', category: 'siamese cat', image: 'siamese cat.jpg', description: 'Meet our charming 2-month-old Siamese kitten with mesmerizing gray eyes! This curious and playful kitten loves to explore and interact. With their striking looks and affectionate nature, they’re perfect for families or anyone looking for a loving companion. Health status: Healthy, vaccinated, and ready for a loving home. Available for adoption!' }
    ];

    function renderPets(filteredPets) {
        petGrid.innerHTML = '';
        filteredPets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.className = 'pet-card';
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.description}</p>
            `;
            petGrid.appendChild(petCard);
        });
    }

    function filterPets() {
        const type = typeSelect.value;
        const dogCategory = dogTypeSelect.value;
        const catCategory = catTypeSelect.value;

        let filteredPets = pets;

        if (type === 'dog') {
            dogTypeSelect.classList.remove('hidden');
            catTypeSelect.classList.add('hidden');
            filteredPets = pets.filter(pet => pet.type === 'dog' && (dogCategory === 'all' || pet.category === dogCategory));
        } else if (type === 'cat') {
            dogTypeSelect.classList.add('hidden');
            catTypeSelect.classList.remove('hidden');
            filteredPets = pets.filter(pet => pet.type === 'cat' && (catCategory === 'all' || pet.category === catCategory));
        } else {
            dogTypeSelect.classList.add('hidden');
            catTypeSelect.classList.add('hidden');
        }

        renderPets(filteredPets);
    }

    typeSelect.addEventListener('change', filterPets);
    dogTypeSelect.addEventListener('change', filterPets);
    catTypeSelect.addEventListener('change', filterPets);

    // Initial render
    renderPets(pets);

    // New code for adoption and donation interactivity
    const adoptionButton = document.querySelector('.btn[href="#adoption"]');
    const submitAdoptionButton = document.querySelector('.btn[href="#submit-adoption"]');
    const donationForm = document.querySelector('.donation-form');
    const eventRegisterButton = document.querySelector('.btn[href="#events"]');
    const volunteerForm = document.querySelector('.volunteer-form');

    // Adoption button interaction
    adoptionButton.addEventListener('click', () => {
        alert('Redirecting to the adoption section...');
    });

    // Submit adoption application
    submitAdoptionButton?.addEventListener('click', () => {
        alert('Thank you for your adoption application! Our team will contact you soon.');
    });

    // Handle donation form submission
    donationForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const frequency = document.getElementById('frequency').value;
        
        // Create and display the thank you message for donation
        const donationMessage = document.createElement('div');
        donationMessage.classList.add('thank-you-message');
        donationMessage.innerHTML = `
            <h3>Thank you for your donation!</h3>
            <p>We appreciate your support of $${amount} for a ${frequency} donation.</p>
        `;
        const donationSection = document.getElementById('donation');
        donationSection.appendChild(donationMessage);
    });

    // Handle event registration
    eventRegisterButton?.addEventListener('click', () => {
        alert('Thank you for registering for the event!');
    });

    // Handle volunteer signup
    volunteerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('volunteer-name').value;
        const email = document.getElementById('volunteer-email').value;
        alert(`Thank you, ${name}! We’ll reach out to you at ${email}.`);
    });


    donationForm.addEventListener('submit', (e) => {
        alert("Thank you for your generous donation!");
    });

    volunteerForm.addEventListener('submit', (e) => {
        alert("Thank you for signing up to volunteer! We will contact you soon.");
    });
});
