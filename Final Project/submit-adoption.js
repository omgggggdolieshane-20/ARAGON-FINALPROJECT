document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-adoption');
    const modal = document.getElementById('adoption-form');
    const closeButton = modal.querySelector('.close');
    const adoptionForm = document.getElementById('adoption-application-form');

    // Show the modal when the button is clicked
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Handle form submission
    adoptionForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(adoptionForm);
        const name = formData.get('name');
        const pet = formData.get('pet');
        const message = formData.get('message');

        // Display a confirmation message
        alert(`Thank you, ${name}, for your interest in adopting a ${pet}. We will contact you soon!`);

        // Clear the form and close the modal
        adoptionForm.reset();
        modal.classList.add('hidden');
    });
});


