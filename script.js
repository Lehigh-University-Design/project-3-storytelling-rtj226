function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function goToSoldier() {
    window.location.href = "storyPages/soldier.html"
}

function goToWife() {
    window.location.href = "storyPages/wife.html"
}

function goToConscript() {
    window.location.href = "storyPages/conscript.html"
}

function goToMother() {
    window.location.href = "storyPages/mother.html"
}

function goToTeacher() {
    window.location.href = "storyPages/teacher.html"
}

function goToJournalist() {
    window.location.href = "storyPages/journalist.html"
}

function goToActivist() {
    window.location.href = "storyPages/activist.html"
}

// Timeline indicator scroll functionality
const sections = document.querySelectorAll('.history-section');
const timelineDots = document.querySelectorAll('.timeline-dot');

function updateTimeline() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const year = section.getAttribute('data-year');
            
            // Update active dot
            timelineDots.forEach(dot => dot.classList.remove('active'));
            const activeDot = document.querySelector(`.timeline-dot[data-year="${year}"]`);
            if (activeDot) {
                activeDot.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateTimeline);
window.addEventListener('load', updateTimeline);