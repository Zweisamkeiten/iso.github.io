const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "혼자 있는 시간",
        artist: 'My Little Memory',
        url: 'http://music.163.com/song/media/outer/url?id=32046502.mp3',
        cover: 'http://i1.fuimg.com/699376/63132718a99fc991.jpg',
      },
      
    ]
});