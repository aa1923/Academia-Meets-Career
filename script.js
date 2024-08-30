// Handle timetable form submission
document.getElementById('timetable-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const courseName = event.target.elements[0].value;
    const hours = event.target.elements[1].value;
    
    const opportunityList = document.getElementById('opportunity-list');
    const newOpportunity = document.createElement('div');
    newOpportunity.innerText = `Course: ${courseName}, Hours: ${hours}`;
    opportunityList.appendChild(newOpportunity);
});

// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation here (e.g., check credentials)
    // For now, we just redirect to the home page
    window.location.href = 'index.html';
});

// Handle signup form submission
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform sign-up validation here (e.g., save user info)
    // For now, we just redirect to the home page
    window.location.href = 'index.html';
});
