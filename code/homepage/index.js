// Handle dropdown toggles
document.querySelectorAll('.menu-item.has-dropdown').forEach(function(item) {
  item.addEventListener('click', function() {
    // Toggle active class for arrow rotation
    this.classList.toggle('active');
    
    // Find and toggle next submenu if exists
    var submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.classList.toggle('active');
    }
  });
});

// Handle promo button click - redirect to /login
var promoBtn = document.querySelector('.promo-btn');
if (promoBtn) {
  promoBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = '/login';
  });
}

// Handle promotion menu item click - redirect to /promotion
var promoMenuItem = document.querySelector('.menu-item-promotion');
if (promoMenuItem) {
  promoMenuItem.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = '/promotion';
  });
}

// Handle leaderboard menu item click - redirect to /leaderboard
var leaderboardMenuItem = document.querySelector('.menu-item-leaderboard');
if (leaderboardMenuItem) {
  leaderboardMenuItem.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = '/leaderboard';
  });
}

// Handle check-in button click - redirect to /promotion
var checkinBtn = document.querySelector('.checkin-btn');
if (checkinBtn) {
  checkinBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = '/promotion';
  });
}

// Handle download button click
var downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Add your download action here
    console.log('Download App clicked');
    // window.location.href = 'YOUR_APP_DOWNLOAD_URL';
  });
}

// Handle menu item clicks (non-dropdown items)
document.querySelectorAll('.menu-item:not(.has-dropdown)').forEach(function(item) {
  item.addEventListener('click', function() {
    var menuText = this.querySelector('.menu-text').textContent;
    console.log('Menu clicked:', menuText);
    // Add your navigation logic here based on menu text
  });
});