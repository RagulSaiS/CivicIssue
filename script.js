// Welcome to your HTML learning workspace!
// This is your main JavaScript file.
// Try changing the code below or adding your own functions!

console.log('Hello from script.js!');

// Example: Show an alert when the page loads

// SPA navigation logic for showing/hiding sections



function showSection(section) {
	// Hide all main sections
	document.getElementById('home-title').style.display = section === 'home' ? '' : 'none';
	document.getElementById('welcome-section').style.display = section === 'home' ? '' : 'none';
	document.getElementById('arrow-container').style.display = section === 'home' ? '' : 'none';
	document.getElementById('center-btn').style.display = section === 'home' ? '' : 'none';
	document.getElementById('dashboard-section').style.display = section === 'home' ? '' : 'none';
	document.getElementById('report-section').style.display = section === 'report' ? '' : 'none';
	document.getElementById('myrequests-section').style.display = section === 'myrequests' ? '' : 'none';
	document.getElementById('analytics-section').style.display = section === 'analytics' ? '' : 'none';
	document.getElementById('contact-section').style.display = section === 'contact' ? '' : 'none';

	// Update nav active state
	const navItems = document.querySelectorAll('.jharkhand-nav li');
	navItems.forEach(li => li.classList.remove('active'));
	if (section === 'home') navItems[0].classList.add('active');
	if (section === 'report') navItems[1].classList.add('active');
	if (section === 'myrequests') navItems[2].classList.add('active');
	if (section === 'analytics') navItems[3].classList.add('active');
	if (section === 'contact') navItems[4].classList.add('active');
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', function() {
	// Nav links
	const navLinks = document.querySelectorAll('.jharkhand-nav li a');

	navLinks[0].addEventListener('click', function(e) { e.preventDefault(); showSection('home'); });
	navLinks[1].addEventListener('click', function(e) { e.preventDefault(); showSection('report'); });
	navLinks[2].addEventListener('click', function(e) { e.preventDefault(); showSection('myrequests'); });
	navLinks[3].addEventListener('click', function(e) { e.preventDefault(); showSection('analytics'); });
	navLinks[4].addEventListener('click', function(e) { e.preventDefault(); showSection('contact'); });

	// Report button
	const reportBtn = document.getElementById('report-btn');
	if (reportBtn) {
		reportBtn.addEventListener('click', function(e) {
			e.preventDefault();
			showSection('report');
		});
	}

	// Show home by default
	showSection('home');
});
