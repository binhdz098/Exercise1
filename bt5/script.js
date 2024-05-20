document.addEventListener('DOMContentLoaded', () => {
    const imageDiv = document.getElementById('image');
    const previewPics = document.querySelectorAll('.preview');

    function upDate(event) {
        const previewPic = event.target;
        console.log('Event triggered: mouseover or focus');
        console.log('Alt text:', previewPic.alt);
        console.log('Source:', previewPic.src);

        // Change the text of the image div
        imageDiv.innerText = previewPic.alt;

        // Change the background image of the image div
        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
        imageDiv.style.lineHeight = 'initial';
    }

    function unDo() {
        // Reset the text of the image div
        imageDiv.innerText = 'kéo một hình ảnh bên dưới để hiển thị.';
        
        // Reset the background image of the image div
        imageDiv.style.backgroundImage = '';
        imageDiv.style.lineHeight = '300px';
    }

    function addTabFocusAttributes() {
        previewPics.forEach((pic, index) => {
            pic.setAttribute('tabindex', '0');
            console.log(`Tabindex added to image ${index + 1}`);
        });
    }

    previewPics.forEach(pic => {
        pic.addEventListener('mouseover', upDate);
        pic.addEventListener('mouseleave', unDo);
        pic.addEventListener('focus', upDate);
        pic.addEventListener('blur', unDo);
    });

    window.addEventListener('load', addTabFocusAttributes);
});
