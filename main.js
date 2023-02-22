const openList = document.querySelector(".music-header_icon");
const showList = document.querySelector(".modal_playlist")
const playlisContainer = document.querySelector('.playlist-container')
const closeList = document.querySelector(".close-list")
const modal = document.querySelector('.modal_playlist')
const fillHeart = document.querySelector('.music-header__favourite')
const playBtn = document.querySelector('.btn-playing');
const repeatBtn = document.querySelector('.btn-repeat');
const randomBtn = document.querySelector('.btn-random')
const playListItem = document.querySelector('.playlist-list')
const audio = document.querySelector('.audio');
const cd = document.querySelector('.cd')
const songName = document.querySelector('.song__name')
const songAuthor = document.querySelector('.song__author')
const timeCurrent = document.querySelector('.progress-time__current')
const timeDuration = document.querySelector('.progress-time_duration')
const progessBar = document.querySelector('.progress-bar');
const barValue = document.querySelector('.progress-bar__value');
const prev = document.querySelector('.btn-previous');
const next = document.querySelector('.btn-next')
const item = document.querySelectorAll('.playlist__item')
const wave = document.querySelector('.playlist__item-wave')

const app = {
    song: [
        {
            img: "./acess/img/1.jpg",
            name: "Sing me to sleep",
            author: "Alan Walker",
            url: "./acess/mp3/Alan_Walker_-_Sing_Me_To_SleepMP3_160K (1).mp3",
            id: 0
        },
        {
            img: "./acess/img/2.jpg",
            name: "Fade-NCS Release",
            author: "Alan Walker",
            url: "./acess/mp3/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
            id: 1
        },
        {
            img: "./acess/img/3.jpg",
            name: "She-NCS Release",
            author: "Andromedik",
            url: "./acess/mp3/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
            "id": 2,
        },
        {
            img: "./acess/img/4.jpg",
            name: "About you-NCS Release",
            author: "Ascence",
            url: "./acess/mp3/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
            "id": 3,
        },
        {
            img: "./acess/img/5.jpg",
            name: "On & On (feat. Daniel Levi) [NCS Release]",
            author: "Cartoon",
            url: "./acess/mp3/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K (1).mp3",
            "id": 4,
        },
        {
            img: "./acess/img/6.jpg",
            name: "Castle [NCS Release]",
            author: "Clarx & Harddope",
            url: "./acess/mp3/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3",
            "id": 5,
        },
        {
            img: "./acess/img/7.jpg",
            name: "Invincible [NCS Release]",
            author: "DEAF KEV ",
            url: "./acess/mp3/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3",
            "id": 6,
        },
        {
            img: "./acess/img/8.jpg",
            name: " Blank [NCS Release]",
            author: "Disfigure",
            url: "./acess/mp3/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
            "id": 7,
        },
        {
            img: "./acess/img/9.jpg",
            name: "Nekozilla [NCS Release]",
            author: "Different Heaven",
            url: "./acess/mp3/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
            "id": 8,
        },
        {
            img: "./acess/img/10.jpg",
            name: "Savannah (feat. Philly K) [NCS Release]",
            author: "Diviners",
            url: "./acess/mp3/Jim_Yosef___Valentina_Franco_-_Chasing_Dreams_NCSMP3_160K.mp3",
            "id": 9,
        },
        {
            img: "./acess/img/11.jpg",
            name: "Cloud 9 [NCS Release]",
            author: "Itro & Tobu",
            url: "./acess/mp3/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3",
            "id": 10,
        },
        {
            img: "./acess/img/12.jpg",
            name: "Sky High [NCS Release]",
            author: "Elektronomia",
            url: "./acess/mp3/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3",
            "id": 11,
        },
        {
            img: "./acess/img/13.jpg",
            name: "Where'd You Go (feat. Luna Lark) [NCS Release]",
            author: "Julius Dreisig",
            url: "./acess/mp3/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3",
            "id": 12,
        },
        {
            img: "./acess/img/14.jpg",
            name: "Island [NCS BEST OF]",
            author: "Jarico",
            url: "./acess/mp3/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3",
            "id": 13
        },
        {
            img: "./acess/img/15.jpg",
            name: "Heroes Tonight (feat. Johnning) [NCS BEST OF]",
            author: "Janji",
            url: "./acess/mp3/Janji_-_Heroes_Tonight_feat._Johnning_NCS_ReleaMP3_160K.mp3",
            "id": 14
        }
    ],
    currentIndex: 0,
    render: function () {
        const html = this.song.map(function (e, index) {
            return `
            <div class="playlist__item" data-index = ${index}>
                        <div class="playlist__item-img">
                            <img src="${e.img}" alt="">
                        </div>
                        <div class="playlist__item-info">
                            <h3 class="playlist__item-name">${e.name}</h3>
                            <p class="playlist__item-author">${e.author}</p>
                        </div>
                        <div class="playlist__item-wave" index =  ${index} >
                            <span class="stroke"></span>
                            <span class="stroke"></span>
                            <span class="stroke"></span>
                            <span class="stroke"></span>
                            <span class="stroke"></span>
                        </div>
                        <div class="playlist__item-option">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
            </div>`
        })
        return playListItem.innerHTML = html.join('')
    },

    loadCurrentSong: function () {
        cd.style.backgroundImage = `url('${this.song[this.currentIndex].img}')`;
        songName.textContent = `${this.song[this.currentIndex].name}`
        songAuthor.textContent = `${this.song[this.currentIndex].author}`
        audio.src = `${this.song[this.currentIndex].url}`
        // console.log(wave)

    },

    handleEvent: function () {

        // xử lý hiện list bài hát
        openList.onclick = function (e) {
            showList.classList.add("list-opening")
            playlisContainer.classList.add('show-animation')
            playlisContainer.classList.remove('hide-animation')
        }

        closeList.onclick = function (e) {
            setTimeout(() => {
                showList.classList.remove("list-opening")
            }, 400);
            playlisContainer.classList.remove('show-animation')
            playlisContainer.classList.add('hide-animation')
        }

        modal.onclick = function (e) {
            setTimeout(() => {
                showList.classList.remove("list-opening")
            }, 400);
            playlisContainer.classList.remove('show-animation')
            playlisContainer.classList.add('hide-animation')
        }

        playlisContainer.onclick = function (e) {
            e.stopPropagation()
        }

        // xử lý favorit
        var temp = true;
        fillHeart.onclick = function () {
            const heartOne = document.querySelector(".music-header__favourite i:nth-child(1)")
            const heartTwo = document.querySelector(".music-header__favourite i:nth-child(2)")
            if (temp) {
                temp = false;
                heartOne.style.display = 'none'
                heartTwo.style.display = 'block'
            } else {
                temp = true;
                heartOne.style.display = 'block'
                heartTwo.style.display = 'none'
            }
        }

        temp = true
        const playMusic = playBtn.onclick = function () {
            const playBtnOne = document.querySelector('.btn-playing i:nth-child(1)')
            const playBtnTwo = document.querySelector('.btn-playing i:nth-child(2)')
            if (temp) {
                temp = false;
                playBtnOne.style.display = 'none'
                playBtnTwo.style.display = 'block'
                audio.play()
                animationCD.play()
            } else {
                temp = true;
                playBtnOne.style.display = 'block'
                playBtnTwo.style.display = 'none'
                audio.pause()
                animationCD.pause()
            }

        }
        // khi hết nhạc chuyển sang bài tiếp theo

        function changSong(current, duration) {
            if (current === duration) {
                app.currentIndex++;
                if (app.currentIndex > app.song.length) {
                    app.currentIndex = 0
                }
                app.loadCurrentSong()
                audio.play()
            }
        }

        //  xử lý thời gian bài hát
        audio.ontimeupdate = function () {
            var minuteD = 0
            var secondD = 0
            if (audio.duration) {
                if (Math.floor(Math.floor(audio.duration) / 60) < 10) {
                    minuteD = '0' + Math.floor(Math.floor(audio.duration) / 60)
                } else {
                    minuteD = Math.floor(Math.floor(audio.duration) / 60)
                }

                if (Math.floor(audio.duration) - (60 * (Math.floor(Math.floor(audio.duration) / 60))) < 10) {
                    secondD = '0' + Math.floor(audio.duration) - (60 * (Math.floor(Math.floor(audio.duration) / 60)))
                } else {
                    secondD = Math.floor(audio.duration) - 60 * Math.floor(Math.floor(audio.duration) / 60)
                }
                timeDuration.textContent = minuteD + ':' + secondD;
            } else {
                timeDuration.textContent = '00:00';
            }

            var minuteC = 0
            var secondC = 0

            if (Math.floor(Math.floor(audio.currentTime) / 60) < 10) {
                minuteC = '0' + Math.floor(Math.floor(audio.currentTime) / 60)
            } else {
                minuteC = Math.floor(Math.floor(audio.currentTime) / 60)
            }

            if (Math.floor(audio.currentTime) - (60 * minuteC) < 10) {
                secondC = '0' + (Math.floor(audio.currentTime) - (60 * minuteC))
            } else {
                secondC = Math.floor(audio.currentTime) - 60 * Math.floor(Math.floor(audio.currentTime) / 60)
            }
            timeCurrent.textContent = minuteC + ':' + secondC;

            if (audio.duration) {
                var progess = audio.currentTime / audio.duration * 100
                barValue.style.width = Math.floor(progess) + '%'
            }

            changSong(audio.currentTime, audio.duration)
        }

        // xử lý chuyển bài hát



        // xử lý kéo thả trên thanh progress
        progessBar.onclick = function (e) {
            const scrubTime = (e.offsetX / progessBar.offsetWidth) * audio.duration
            audio.currentTime = scrubTime
        }


        // xử lý cd quay
        const animationCD = cd.animate([
            { transform: 'rotate(360deg)' }
        ],
            {
                duration: 5000,
                iterations: Infinity
            })
        animationCD.pause()


        // xử lý next/ prev

        prev.onclick = function () {
            app.currentIndex--;
            if (app.currentIndex < 0) {
                app.currentIndex = app.song.length
            }
            app.loadCurrentSong()
            audio.play()
            playMusic(true)
        }

        next.onclick = function () {
            app.currentIndex++;
            if (app.currentIndex > app.song.length) {
                app.currentIndex = 0
            }
            app.loadCurrentSong()
            audio.play()
            playMusic(true)
        }

        // xử lý repeat
        temp = true
        repeatBtn.onclick = function () {
            if (temp) {
                temp = false
                repeatBtn.style.color = 'rgb(41, 125, 136)'
            } else {
                temp = true
                repeatBtn.style.color = '#000'
            }
        }

        // xử lý random
        temp = true
        randomBtn.onclick = function () {
            if (temp) {
                temp = false
                randomBtn.style.color = 'rgb(41, 125, 136)'
            } else {
                temp = true
                randomBtn.style.color = '#000'
            }
        }

        // xử lý ấn vào play list 
        playListItem.onclick = function (e, index) {
            app.currentIndex = e.target.closest('.playlist__item').getAttribute('data-index');
            // console.log(e.target.closest('.playlist__item-wave').getAttribute('index'));
            app.loadCurrentSong()
            audio.play()
            console.log(wave)
        }

    },
    start: function () {
        this.render()
        this.loadCurrentSong()
        this.handleEvent()
    }
}
app.start()
