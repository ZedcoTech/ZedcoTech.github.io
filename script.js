document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('changing-name');
    const names = ['متین فرهانی'];
    let currentIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100;

    nameElement.style.textAlign = 'left';
    nameElement.style.display = 'inline-block';
    nameElement.style.minWidth = '250px';
    nameElement.style.fontFamily = 'monospace';

    function typeName() {
        const currentName = names[currentIndex];
        
        if (isDeleting) {
            nameElement.textContent = currentName.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            nameElement.textContent = currentName.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentName.length) {
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % names.length;
            typingSpeed = 500;
        }

        setTimeout(typeName, typingSpeed);
    }

    setTimeout(typeName, 1000);
});
