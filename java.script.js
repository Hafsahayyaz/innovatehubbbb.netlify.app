document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const dropdown = link.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.visibility = 'visible'; // Changed from display to visibility
                dropdown.style.opacity = '1'; // Added for smooth transition
            }
        });

        link.addEventListener('mouseleave', () => {
            const dropdown = link.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.visibility = 'hidden'; // Changed from display to visibility
                dropdown.style.opacity = '0'; // Added for smooth transition
            }
        });

        link.addEventListener('click', (event) => {
            const dropdown = link.querySelector('.dropdown');
            if (dropdown) {
                const isVisible = dropdown.style.visibility === 'visible';
                dropdown.style.visibility = isVisible ? 'hidden' : 'visible';
                dropdown.style.opacity = isVisible ? '0' : '1'; // Adjusting opacity
                event.stopPropagation();
            }
        });
    });

    document.addEventListener('click', () => {
        navLinks.forEach(link => {
            const dropdown = link.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.visibility = 'hidden';
                dropdown.style.opacity = '0';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});
function showSlide(index) {
    // Ensure the index wraps around
    if (index < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    carouselItems.forEach((item) => {
        item.classList.remove('active', 'fade-in', 'fade-out');
    });

    carouselItems[currentIndex].classList.add('fade-out');

    setTimeout(() => {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        carouselItems[currentIndex].classList.add('fade-in', 'active');
    }, 500);
}
const toggleButton = document.getElementById('dark-mode-toggle');
const themeStyle = document.getElementById('theme-style');

toggleButton.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === 'light-mode.css') {
        themeStyle.setAttribute('href', 'dark-mode.css');
    } else {
        themeStyle.setAttribute('href', 'light-mode.css');
    }
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
<section>
    <h2>For Business</h2>
    <div class="business-cards">
        <div class="card">
            <h3>Microsoft 365 Copilot</h3>
            <p>Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
            <a href="#">Learn more</a>
        </div>
        <div class="card">
            <h3>Get Microsoft Teams for your business</h3>
            <p>Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.</p>
            <a href="#">Find the right plan for your business</a>
        </div>
        <div class="card">
            <h3>Welcome to your Windows 365 Cloud PC</h3>
            <p>Securely stream your Windows experience from the Microsoft cloud to any device.</p>
            <a href="#">Get it today</a>
        </div>
        <div class="card">
            <h3>Visual Studio 2022</h3>
            <p>Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services, and games.</p>
            <a href="#">Download Visual Studio 2022</a>
        </div>
    </div>
</section>

