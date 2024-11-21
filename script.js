// Toggle Sidebar Menu
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Smooth Scrolling and Sidebar Closing
  function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Scroll to the target section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
  
    // Close sidebar after selecting the section
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
  }
  
  // Sticky Navbar Logic
  window.onscroll = function() { stickyNavbar() };
  
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
    




  function handleNavigation(event, sectionId, pdfUrl) {
    // Cegah aksi default dari <a> untuk mencegah scroll ke anchor
    event.preventDefault();
  
    // Jika PDF URL tersedia, buka PDF di tab baru
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else if (sectionId) {
      // Jika section ID tersedia, scroll ke section target
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Sesuaikan dengan tinggi navbar
          behavior: 'smooth',
        });
      }
    }
  }
  

// Show 'Hello' button on scroll
const scrollButton = document.getElementById('scroll-button');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollButton.style.display = 'inline-block'; // Show the button
  } else {
    scrollButton.style.display = 'none'; // Hide the button
  }
});

