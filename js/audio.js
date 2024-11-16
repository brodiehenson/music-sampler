let playSong = document.querySelectorAll(".play-song");
let albumCover = document.querySelectorAll(".album-cover");

function hideAll() {
    playSong.forEach(function(el) {
      el.style.display = 'none';
    });
};

hideAll();

albumCover.forEach(function(el) {
    el.onclick = (e) => {

        let players = document.querySelectorAll('audio');
        players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
        });
        
        hideAll();

        switch (e.target.getAttribute('id')) {
          case 'acLikeAVirgin':
            document.querySelector('#materialGirl')
                .style.display = 'block';
            break;
          case 'acCrazyForYou':
            document.querySelector('#crazyForYou')
                .style.display = 'block';
            break;
          case 'acLikeAPrayer':
            document.querySelector('#likeAPrayer')
            .style.display = 'block';
            break;
          case 'acVogue':
            document.querySelector('#vogue')
            .style.display = 'block';
            break;
        }
    }
});








