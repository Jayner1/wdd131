document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');

    const products = [
        {
            id: 'fc-1888',
            name: "Flux Capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "Power Laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "Time Circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "Low Voltage Reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "Warp Equalizer",
            avgRating: 5.0
        }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

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
});

document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = reviewCount;
});