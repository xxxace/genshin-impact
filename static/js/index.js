$(document).ready(function () {
    // 公共变量
    let isBgmPlay = false;

    // 防止刷新后滚动条位置不变
    setTimeout(() => {
        $('.hidden').removeClass('hidden')
    }, 10);

    // 导航栏
    const headerMenuIndicator = $('.header-menu-indicator')
    $('#headerMenu').on('mousemove', function (e) {
        if (e.target.nodeName === 'A') {
            headerMenuIndicator.attr('style', `transform:translateX(${e.target.offsetLeft + 30}px)`)
        } else {
            headerMenuIndicator.attr('style', `transform:translateX(${30}px)`)
        }
    });

    // 背景音乐
    const bgmBtn = $('#bgmBtn')
    const bgmMusic = document.querySelector('#bgmMusic')
    const bgmWind = document.querySelector('#bgmWind')

    function bgmPlay() {
        bgmMusic.play()
        bgmWind.play()
        bgmBtn.toggleClass('off')
    }

    function bgmPause() {
        bgmMusic.pause()
        bgmWind.pause()
        bgmBtn.toggleClass('off')
    }

    bgmBtn.on('click', function () {

        if (bgmMusic.paused) {
            bgmPlay()
        } else {
            bgmPause()
        }
    });

    // 视频
    const video_wrapper = $('.video_wrapper')
    const video2 = $('#video2')
    video_wrapper.on('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            video2[0].pause()
            video_wrapper.attr('style', 'display:none')
            video_wrapper.parent().attr('style', '')

            if (isBgmPlay) {
                isBgmPlay = false
                bgmPlay()
            }
        }
    });

    // 视频播放
    const video_btn = $('#video_btn')
    video_btn.on('click', function () {
        video_wrapper.parent().attr('style', 'overflow:hidden')
        video_wrapper.attr('style', '')
        video2[0].play()

        if (!bgmMusic.paused) {
            isBgmPlay = true
            bgmPause()
        }
    });

    // 轮播图
    const newsCarousel = new bootstrap.Carousel('#newsCarousel', {
        interval: 2500,
        ride: 'carousel',
        touch: false
    });
})