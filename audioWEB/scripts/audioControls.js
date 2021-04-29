let audio = new Audio("audioWEB/audio/audio1.mp3")
    rangeAudio = document.getElementById('rangeAudio')
    play = document.getElementById('playAudio')

    prevAudio = document.getElementById('prevAudio')
    nextAudio = document.getElementById('nextAudio')
    playing = true
    idAudio = 1
    audio.volume = 0.3

rangeAudio.onchange = function (e) {
  console.log(e.target.value)
  audio.volume = e.target.value / 100;
}

play.addEventListener('click', () => {
  console.log('click');
  if (playing) {
    console.log('play');
    audio.play()
    play.style = 'background-image: url(audioWEB/icon/pause.png);'
  }
  if (!playing) {
    console.log('pause');
    audio.pause()
    play.style = 'background-image: url(audioWEB/icon/play.png);'
  }
  playing = !playing;
})



nextAudio.addEventListener('click', () => {
  nextAudios()
})

prevAudio.addEventListener('click', () => {
  prevAudios()
})

audio.addEventListener('ended', () => {
  nextAudios();
})

function nextAudios() {
  if (idAudio > 2) {
    idAudio = 0;
  }
  console.log(idAudio);
  playing = false;
  audio.pause()
  audio = new Audio('audioWEB/audio/silent.wav')
  audio = new Audio(audioArray[idAudio].music);
  console.log(audioArray[idAudio].music);
  audio.play()
    play.style = 'background-image: url(audioWEB/icon/pause.png);'
  idAudio++
}

function prevAudios() {
  if (idAudio < 0) {
    idAudio = 2;
  }
  console.log(idAudio);
  playing = false;
  audio.pause()
  audio = new Audio('audioWEB/audio/silent.wav')
  audio = new Audio(audioArray[idAudio].music);
  console.log(audioArray[idAudio].music);
  audio.play()
  play.style = 'background-image: url(audioWEB/icon/pause.png);'
  idAudio--
}


// input range
$('#rangeAudio[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
})
