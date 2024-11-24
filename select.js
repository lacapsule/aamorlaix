document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const infoSection = document.getElementById('information');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'flex' : 'none';
        });

        links.forEach(link => {
            if (link.getAttribute('href') !== '#information') { 
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.style.backgroundColor = '#f2fdff';
                    link.style.borderRadius = '10px';
                    link.style.color = 'black';
                    link.style.textDecoration = 'underline';
                } else {
                    link.style.backgroundColor = '';
                    link.style.color = 'whitesmoke';
                    link.style.textDecoration = 'none';
                }
            }
        });        
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    showSection('information');

    sections.forEach(section => {
        if (section.id !== 'information') {
            section.addEventListener('click', function() {
                infoSection.style.display = 'none';
            });
        }
    });
});
