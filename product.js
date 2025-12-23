const mainImage = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.thumbs img');
thumbnails.forEach(img => { img.addEventListener('click', function() { mainImage.src = this.src;}); });


    const sizeButtons = document.querySelectorAll('.sizes button');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() 
        {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });