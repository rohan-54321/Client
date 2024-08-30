const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

// Add event listener for the sign-up form
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'additional-details.html'; // Redirect to the additional details page
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
