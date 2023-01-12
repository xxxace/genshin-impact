$(document).ready(function () {
    // 公共变量
    let isBgmPlay = false;
    const app = $('#app');
    const header = $('header');

    // 防止刷新后滚动条位置不变
    setTimeout(() => app.show(), 100);

    // 导航栏
    const headerMenuIndicator = $('.header-menu-indicator')
    $('#headerMenu').mousemove(function (e) {
        if (e.target.nodeName === 'A') {
            headerMenuIndicator.attr('style', `transform:translateX(${e.target.offsetLeft + 30}px)`)
        } else {
            headerMenuIndicator.attr('style', `transform:translateX(${30}px)`)
        }
    });

    // 滚动监听
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 60) {
            header.addClass('header-scroll')
        } else {
            header.removeClass('header-scroll')
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

    bgmBtn.click(function () {
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
            video_wrapper.hide()
            video_wrapper.parent().attr('style', '')

            if (isBgmPlay) {
                isBgmPlay = false
                bgmPlay()
            }
        }
    });

    // 视频播放
    const video_btn = $('#video_btn')
    video_btn.click(function () {
        video_wrapper.parent().attr('style', 'overflow:hidden')
        video_wrapper.show()
        video2[0].play()

        if (!bgmMusic.paused) {
            isBgmPlay = true
            bgmPause()
        }
    });

    // 轮播图
    new bootstrap.Carousel('#newsCarousel', {
        interval: 2500,
        ride: 'carousel',
        touch: false
    });

    // 新闻
    const newsTabs = $('.news-tabs')
    newsTabs.click(function (e) {
        if (e.target.tagName === 'LI') {
            $(this.querySelectorAll('.active')).removeClass("active")
            $(e.target).addClass("active")
        }
    })
})