// Handle timetable form submission
document.getElementById('timetable-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const courseName = event.target.elements[0].value;
    const hours = event.target.elements[1].value;
    const opportunityName = event.target.elements[2].value;
    const duration = event.target.elements[3].value;

    const opportunityList = document.getElementById('opportunity-list');
    
    const newOpportunity = document.createElement('div');
    newOpportunity.innerHTML = `
        <p><strong>Course:</strong> ${courseName}, <strong>Hours:</strong> ${hours}</p>
        <p><strong>Opportunity:</strong> ${opportunityName}, <strong>Duration:</strong> ${duration} hours</p>
    `;
    
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
