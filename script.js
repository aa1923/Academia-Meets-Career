document.getElementById('timetable-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const courseName = event.target.elements[0].value.trim();
    const hours = event.target.elements[1].value.trim();
    const opportunityName = event.target.elements[2].value.trim();
    const duration = event.target.elements[3].value.trim();

    // Validate input
    if (!courseName || !hours || !opportunityName || !duration) {
        alert('Please fill out all fields.');
        return;
    }

    // Display the generated timetable
    const opportunityList = document.getElementById('opportunity-list');
    
    // Create new entry
    const newOpportunity = document.createElement('div');
    newOpportunity.innerHTML = `
        <p><strong>Course:</strong> ${courseName}, <strong>Hours:</strong> ${hours}</p>
        <p><strong>Opportunity:</strong> ${opportunityName}, <strong>Duration:</strong> ${duration} hours</p>
    `;
    
    // Add the new entry to the list
    opportunityList.appendChild(newOpportunity);

    // Clear form fields after submission
    event.target.reset();
});
