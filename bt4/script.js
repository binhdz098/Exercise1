document.addEventListener('DOMContentLoaded', () => {
    const imageDiv = document.getElementById('image');
    const previewPics = document.querySelectorAll('.preview');

    function upDate(event) {
        const previewPic = event.target;
        console.log('Sự kiện được kích hoạt');
        console.log('Văn bản thay thế:', previewPic.alt);
        console.log('Nguồn:', previewPic.src);

        // Thay đổi văn bản của phần tử div với id là image
        imageDiv.innerText = previewPic.alt;

        // Thay đổi hình nền của phần tử div với id là image
        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
        imageDiv.style.lineHeight = 'initial';
    }

    function unDo() {
        // Đặt lại văn bản của phần tử div với id là image
        imageDiv.innerText = 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
        
        // Đặt lại hình nền của phần tử div với id là image
        imageDiv.style.backgroundImage = '';
        imageDiv.style.lineHeight = '300px';
    }

    previewPics.forEach(pic => {
        pic.addEventListener('mouseover', upDate);
        pic.addEventListener('mouseout', unDo);
    });
});
