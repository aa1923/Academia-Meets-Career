document.getElementById('careerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const interests = document.getElementById('interests').value;
  const skills = document.getElementById('skills').value;

  // Simulate prediction based on input (replace with actual API call in production)
  const predictedCareerPath = predictCareerPath(interests, skills);

  document.getElementById('result').classList.remove('hidden');
  document.getElementById('careerOutput').textContent = `${name}, your predicted career path is: ${predictedCareerPath}`;
});

// Simulated function to predict career path (to be replaced by actual machine learning model output)
function predictCareerPath(interests, skills) {
  // This is just a mockup logic for demonstration purposes
  if (interests.includes('data') || skills.includes('Python')) {
    return 'Data Scientist';
  } else if (interests.includes('web') || skills.includes('JavaScript')) {
    return 'Web Developer';
  } else if (interests.includes('security') || skills.includes('Network')) {
    return 'Cybersecurity Specialist';
  } else {
    return 'Software Engineer';
  }
}
