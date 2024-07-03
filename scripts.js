document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            const arrowIcon = dropdown.querySelector('.arrow-icon');

            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            arrowIcon.src = dropdownMenu.style.display === 'block' ? 'images/icon-arrow-down.svg' : 'images/icon-arrow-down.svg';
        });
    });

    
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown, .dropdown *')) {
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                const arrowIcon = dropdown.querySelector('.arrow-icon');

                dropdownMenu.style.display = 'none';
                arrowIcon.src = 'images/icon-arrow-down.svg';
            });
        }
    });
});
