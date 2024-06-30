document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightYearSpan = document.getElementById("copyrightYear");
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = currentYear;
    }

    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedLastModified = lastModifiedDate.toLocaleDateString('en-US', options);

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${formattedLastModified}`;
    }

    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    };

    const updateTitle = (title) => {
        document.getElementById('page-title').textContent = title;
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    };

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateTitle(link.textContent);
        });
    
    });
});

const temples = [
    {
        name: "Columbia River",
        location: "Washington, USA",
        dedicated: "2001-11-18",
        area: 16000,
        imageUrl: "images/temple1.jpg"
    },
    {
        name: "Salt Lake",
        location: "Utah, USA",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "images/temple2.jpg"
    },
    {
        name: "Provo",
        location: "Utah, USA",
        dedicated: "1972-02-09",
        area: 128325,
        imageUrl: "images/temple3.jpg"
    },
    {
        name: "Sao Paulo",
        location: "São Paulo, Brazil",
        dedicated: "1978-10-30",
        area: 103215,
        imageUrl: "images/temple4.jpg"
    },
    {
        name: "Tokyo",
        location: "Tokyo, Japan",
        dedicated: "1980-10-27",
        area: 52549,
        imageUrl: "images/temple5.jpg"
    },
    {
        name: "Spokane",
        location: "Washington, USA",
        dedicated: "1999-08-21",
        area: 10842,
        imageUrl: "images/temple6.jpg"
    },
    {
        name: "Rexburg",
        location: "Idaho, USA",
        dedicated: "2008-02-10",
        area: 57330,
        imageUrl: "images/temple7.jpg"
    },
    {
        name: "Jordan River",
        location: "Utah, USA",
        dedicated: "1981-11-16",
        area: 148236,
        imageUrl: "images/temple8.jpg"
    },
    {
        name: "Seattle",
        location: "Washington, USA",
        dedicated: "1980-11-17",
        area: 110000,
        imageUrl: "images/temple9.jpg"
    },
    
    {
        name: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "images/temple13.jpg"
    },
    {
        name: "Rome",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 377000,
        imageUrl: "images/temple11.jpg"
    },
    {
        name: "Paris",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44425,
        imageUrl: "images/temple12.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('temple-cards-container');
    
    const displayTemples = (filterFn) => {
        container.innerHTML = '';
        const filteredTemples = filterFn ? temples.filter(filterFn) : temples;
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('figure');
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
                <figcaption>
                    <h2>${temple.name}</h2>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
                    <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            container.appendChild(templeCard);
        });
    };

    const updateTitle = (title) => {
        document.getElementById('page-title').innerText = title;
        let filterFn;
        switch (title) {
            case 'Old':
                filterFn = temple => new Date(temple.dedicated).getFullYear() < 1900;
                break;
            case 'New':
                filterFn = temple => new Date(temple.dedicated).getFullYear() > 2000;
                break;
            case 'Large':
                filterFn = temple => temple.area > 90000;
                break;
            case 'Small':
                filterFn = temple => temple.area < 10000;
                break;
            default:
                filterFn = null;
        }
        displayTemples(filterFn);
    };

    displayTemples();
    window.updateTitle = updateTitle;
});
