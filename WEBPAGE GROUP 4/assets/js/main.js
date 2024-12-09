// Ensure DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
	// Sidebar toggle functionality
	const sidebar = document.getElementById('sidebar');
	const toggleButton = document.createElement('button');
	toggleButton.id = 'sidebar-toggle';
	toggleButton.innerText = '☰';
	toggleButton.style.position = 'fixed';
	toggleButton.style.top = '10px';
	toggleButton.style.right = '10px';
	toggleButton.style.zIndex = '10000';
	document.body.appendChild(toggleButton);
  
	// Toggle sidebar visibility on button click
	toggleButton.addEventListener('click', () => {
	  if (sidebar.classList.contains('inactive')) {
		sidebar.classList.remove('inactive');
		toggleButton.innerText = '✖'; // Change button to close icon
	  } else {
		sidebar.classList.add('inactive');
		toggleButton.innerText = '☰'; // Change button back to menu icon
	  }
	});
  
	// Smooth scrolling for internal links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function (e) {
		e.preventDefault();
  
		const targetId = this.getAttribute('href').substring(1);
		const target = document.getElementById(targetId);
  
		if (target) {
		  target.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		  });
		}
	  });
	});
  });
  