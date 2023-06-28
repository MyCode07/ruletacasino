const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const popupFullScreen = popup.querySelector('.popup__header-fullscreen');
const popupOpenButtons = document.querySelectorAll('.open-popup');
const popupTitle = popup.querySelector('.popup__header h4');
const popupGame = popup.querySelector('.popup__body');
const popupFooter = document.querySelector('.popup__footer');
const popupFooterToggle = document.querySelector('.popup__footer-toggle');


if (popupOpenButtons.length) {
    popupOpenButtons.forEach(btn => {
        const game = btn.closest('.casino-slide');
        const gameTitle = game.querySelector('[data-title]').textContent;

        btn.addEventListener('click', function (e) {
            e.preventDefault();

            popupTitle.textContent = gameTitle;
            popup.classList.add('_open');
            document.body.classList.add('_noscroll');
        })

        popupClose.addEventListener('click', function () {
            popup.classList.remove('_open');
            document.body.classList.remove('_noscroll');

            if (popupGame.querySelector('iframe')) {
                popupGame.querySelector('iframe').remove();
            }
        })
    })
}

if (popupFullScreen) {
    popupFullScreen.addEventListener('click', function (e) {
        e.preventDefault();
        const iframe = popupGame.querySelector('iframe');

        openFullscreen(iframe)
    })
}

function openFullscreen(iframe) {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}


if (popupFooterToggle) {
    popupFooterToggle.addEventListener('click', function (e) {
        popupFooterToggle.classList.toggle('_active')
        popupFooter.classList.toggle('_active')
    })
}