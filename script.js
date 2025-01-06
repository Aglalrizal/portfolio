const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
document.querySelector('.buttons #cv').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/15vf_r83XA4U5bKdO5LIGl5AMDJB_wGY6/view?usp=sharing', '_blank');
});
document.querySelector('.buttons #certificates').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/175KhH6qw6l1XkFxMIefslzoWUhcmcdSV/view?usp=sharing', '_blank');
});


const projects = [
    {
        "title": "Bumi Kita [Landing Page Only]",
        "link": "http://aglalrizal.github.io/Bumi-Kita",
        "image": "img/bumi-kita.png",
        "alt": "Bumi Kita"
    },
    {
        "title": "Bumi Kita [Laravel]",
        "link": "http://github.com/aglalrizal/bumi-kita-fix",
        "image": "img/bumi-kita.png",
        "alt": "Bumi Kita"
    },
    {
        "title": "Dashboard Monitoring Kualitas Udara",
        "link": "http://aglalrizal.github.io/sic57",
        "image": "img/dashboard.png",
        "alt": "Dashboard Monitoring Kualitas Udara"
    },
    {
        "title": "SmartNote",
        "link": "https://www.figma.com/proto/fFeZr8puRjddbZxeKJrV5j/Smartnote-Apps-Project-(Ibu-Dian)?page-id=5%3A7&node-id=548-1272&viewport=0%2C0%2C1&t=x5AhItcu5AwSxs0R-1&scaling=scale-down&starting-point-node-id=548%3A1272",
        "image": "img/smartnote.png",
        "alt": "smartNote"
    },
    {
        "title": "Role Playing Games",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-role-playing-game/",
        "image": "img/roleplaying.png",
        "alt": "Role Playing Gamest"
    },
    {
        "title": "Statistic Calculator",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-statistics-calculator/",
        "image": "img/statistics-calculator.png",
        "alt": "Statistic Calculator"
    },
    {
        "title": "Calorie Counter",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-calorie-counter/",
        "image": "img/calorie-counter.png",
        "alt": "Calorie Counter"
    },
    {
        "title": "Todo App",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-todo-app/",
        "image": "img/todo-app.png",
        "alt": "Todo App"
    },
    {
        "title": "Football Team Cards",
        "link": "https://aglalrizal.github.io/fcc-jsads-football-team-cards/",
        "image": "img/football-team-cards.png",
        "alt": "Football Team Cards"
    },
    {
        "title": "Decimal to Binary",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-decimal-to-binary-converter",
        "image": "img/decimal-to-binary-converter.png",
        "alt": "Decimal to Binary"
    },
    {
        "title": "Spam Filter",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-spam-filter",
        "image": "img/spam-filter.png",
        "alt": "Spam Filter"
    },
    {
        "title": "Spreadsheet",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-spreadsheet/",
        "image": "img/spreadsheet.png",
        "alt": "Spreadsheet"
    },
    {
        "title": "Shopping Cart",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-shopping-cart/",
        "image": "img/shopping-cart.png",
        "alt": "Shopping Cart"
    },
    {
        "title": "Platformer Game",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-platformer-game/",
        "image": "img/platformer-game.png",
        "alt": "Platformer Game"
    },
    {
        "title": "Dice Game",
        "link": "https://aglalrizal.github.io/fcc-jsads-a-dice-game/",
        "image": "img/dice-game.png",
        "alt": "Dice Game"
    },
    {
        "title": "Git & Github Guide",
        "link": "http://aglalrizal.github.io/promnet",
        "image": "img/git.png",
        "alt": "Git and Github"
    },
    {
        "title": "Composer and Laravel Mini Guide",
        "link": "https://aglalrizal.github.io/hello-composer-hi-laravel/",
        "image": "img/composer-laravel.png",
        "alt": "Composer and Laravel Mini Guide Page"
    },
    {
        "title": "Magic Fest Page",
        "link": "https://aglalrizal.github.io/magic-fest-page/",
        "image": "img/magicfest.png",
        "alt": "Magic Fest"
    },
]

const showMoreButton = document.getElementById('showMoreButton');
const projectGrid = document.getElementById('projectGrid');

showMoreButton.addEventListener('click', () => {
projects.splice(0, 3).forEach(project => {
    const container = document.createElement('div');
    container.className = 'container';

    const link = document.createElement('a');
    link.href = project.link;
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.alt;

    const title = document.createElement('p');
    title.textContent = project.title;

    container.appendChild(link);
    link.appendChild(img);
    link.appendChild(title);
    projectGrid.appendChild(container);
});

if (projects.length === 0) {
    showMoreButton.style.display = 'none';
}
});
const textElement = document.querySelector('.hero p em');
    const textToType = 'a web developer'; // Teks yang akan ditampilkan
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Ketik satu karakter per 100ms
        } else {
            setTimeout(eraseEffect, 3000); // Tunggu sebelum menghapus teks
        }
    }

    function eraseEffect() {
        if (index > 1) {
            textElement.textContent = textToType.substring(0, index - 1);
            index--;
            setTimeout(eraseEffect, 100); // Hapus satu karakter per 100ms
        } else {
            setTimeout(typeEffect, 500); // Tunggu sebelum mulai mengetik lagi
        }
    }

    // Mulai animasi saat halaman dimuat
    typeEffect();