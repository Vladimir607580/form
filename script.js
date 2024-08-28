function showModal(contentId) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var modalContent = document.getElementById('modal-content');
    
    var content = {
        'lecture1': {
            text: '<p>Подробная информация о рекомпозиции тела.</p>',
            img: '5.jpg'
        },
        'lecture2': {
            text: '<p>Подробная информация о правильном питании.</p>',
            img: '4.jpg'
        },
        'lecture3': {
            text: '<p>Подробная информация о владении телом.</p>',
            img: '6.jpg'
        },
        'lecture4': {
            text: '<p>Подробная информация о дисциплине.</p>',
            img: '3.jpg'
        }
    };
    
    modalImg.src = content[contentId].img;
    modalContent.innerHTML = content[contentId].text;
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

