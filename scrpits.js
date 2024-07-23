function initializeGallery() {
    console.log('Gallery loaded');
    const images = document.querySelectorAll('.gallery img');
    
    images.forEach(img => {
        img.addEventListener('mouseover', () => console.log('Mouse over image'));
        img.addEventListener('mouseout', () => console.log('Mouse out of image'));
    });
}

function handleFocus() {
    console.log('Image focused');
}

function handleBlur() {
    console.log('Image blurred');
}
