document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.querySelector('.mobile-menu-icon');
        const navList = document.querySelector('nav ul');
        const icon = menuIcon.querySelector('i');

        menuIcon.addEventListener('click', () => {
          navList.classList.toggle('active');
          menuIcon.classList.toggle('active');

          // Toggle icon between hamburger and X
          if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); 
          } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });

        // Optional: close nav on link click
        document.querySelectorAll('nav ul li a').forEach(link => {
          link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuIcon.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          });
        });
      });