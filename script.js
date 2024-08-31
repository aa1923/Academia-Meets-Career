document.getElementById('timetable-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const courseName = event.target.elements[0].value;
    const hours = event.target.elements[1].value;
    
    // Display generated timetable (basic example)
    const opportunityList = document.getElementById('opportunity-list');
    const newOpportunity = document.createElement('div');
    newOpportunity.innerText = `Course: ${courseName}, Hours: ${hours}`;
    opportunityList.appendChild(newOpportunity);
});
