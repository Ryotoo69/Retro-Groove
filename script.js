// Sample albums array with correct paths
const albums = [
  { title: "Back To The Old House", artist: "The Smiths", cover: "data/smiths.jpg", audio: "data/The Smiths - Back To The Old House (Official Audio).mp3" },
  { title: "Bohemian Rhapsody", artist: "Queen", cover: "data/queen.jpg", audio: "data/Queen – Bohemian Rhapsody (Official Video Remastered).mp3" },
  { title: "Here Comes The Sun", artist: "The Beatles", cover: "data/thebeatles.jpg", audio: "data/The Beatles - Here Comes The Sun.mp3" },
  { title: "Creep", artist: "Radiohead", cover: "data/radiohead.jpg", audio: "data/Radiohead - Creep.mp3" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", cover: "data/gunrose.jpg", audio: "data/Guns N' Roses - Sweet Child O' Mine (Official Music Video).mp3" },
  { title: "Back In Black", artist: "AC/DC", cover: "data/acdc.jpg", audio: "data/AC DC - Back In Black (Official 4K Video).mp3" },
  { title: "Something Stupid", artist: "Frank Sinatra", cover: "data/frank.jpg", audio: "data/Somethin' Stupid.mp3" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "data/smell.jpg", audio: "data/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3" },
  { title: "Please, Please, Please, Let Me Get What I Want", artist: "The Smiths", cover: "data/plsplssmiths.jpg", audio: "data/Please, Please, Please, Let Me Get What I Want (2011 Remaster).mp3" },
  { title: "No Surprises", artist: "Radiohead", cover: "data/No Surprises.jpg", audio: "data/Radiohead - No Surprises.mp3" },
  { title: "There Is a Light That Never Goes Out", artist: "The Smiths", cover: "data/light.jpg", audio: "data/There Is a Light That Never Goes Out (2011 Remaster).mp3" },
  { title: "Heaven Knows I'm Miserable Now", artist: "The Smiths", cover: "data/HatfulofHollow84.jpg", audio: "data/Heaven Knows I'm Miserable Now (2011 Remaster).mp3" },
  { title: "I Wanna Be Yours", artist: "Arctic Monkeys", cover: "data/ab67616d00001e024ae1c4c5c45aabe565499163.jpg", audio: "data/I Wanna Be Yours.mp3" },
  { title: "Thunderstruck ", artist: "AC/DC", cover: "data/artworks-S7A6WNPCzTzr7ZvN-yq5ocA-t500x500.jpg", audio: "data/AC DC - Thunderstruck (Official Video).mp3" },
  { title: "Boys Don't Cry", artist: "The Cure", cover: "data/ab67616d0000b27381ba7ba31f0a93041730cfb4.jpg", audio: "data/Boys Don't Cry.mp3" },
  { title: "Just Like Heaven", artist: "The Cure", cover: "data/ab67616d0000b2737f22337546d61faca55e0f4f.jpg", audio: "data/The Cure - Just Like Heaven (Official Audio).mp3" },
  { title: "Let It Be", artist: "The Beatles", cover: "data/ab67616d0000b27384243a01af3c77b56fe01ab1.jpg", audio: "data/Let It Be (Remastered 2009).mp3" },
  { title: "Hey Jude", artist: "The Beatles", cover: "data/images.jpg", audio: "data/Hey Jude (Remastered 2015).mp3" },
  { title: "Numb", artist: "Linkin Park", cover: "data/artworks-000024934571-vp1xhw-t1080x1080.jpg", audio: "data/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3" },
  { title: "Where Is My Mind", artist: "Pixies", cover: "data/ab67616d0000b273b17d34882944eaf0695153f2.jpg", audio: "data/Pixies - Where Is My Mind (Official Lyric Video).mp3" },
  { title: "Bye Bye Bye", artist: "NSYNC", cover: "data/ab67616d0000b273a6cb8fab778e1efc406a5909.jpg", audio: "data/NSYNC - Bye Bye Bye (Lyrics) (from Deadpool & Wolverine).mp3" },
  { title: "Like A Prayer", artist: "Madonna", cover: "data/Madonna_-_Like_a_Prayer_album.jpg", audio: "data/Madonna - Like A Prayer (Official Video).mp3" },
  { title: "The Emptiness Machine", artist: "Linkin Park", cover: "data/ab67616d0000b273c0db065619ed208515412917.jpg", audio: "data/The Emptiness Machine (Official Music Video) - Linkin Park.mp3" },
  { title: "In The End", artist: "Linkin Park", cover: "data/ab67616d0000b273e2f039481babe23658fc719a.jpg", audio: "data/In The End [Official HD Music Video] - Linkin Park.mp3" },
  { title: "Iris", artist: "Goo Goo Dolls", cover: "data/GGD_Iris.jpg", audio: "data/Goo Goo Dolls – Iris [Official Music Video] [4K Remaster].mp3" },
  { title: "Karma Police", artist: "Radiohead", cover: "data/ab67616d0000b273d438ffa61d25fbf1fd5f6ec2.jpg", audio: "data/Karma Police.mp3" },
  { title: "I Will", artist: "The Beatles", cover: "data/artworks-000119450780-oxbcyn-t500x500.jpg", audio: "data/I Will (Remastered 2009).mp3" },
  { title: "Come As You Are", artist: "Nirvana", cover: "data/ComeAsYouAre.jpg", audio: "data/Nirvana - Come As You Are (Official Music Video).mp3" },
  { title: "Something In The Way", artist: "Nirvana", cover: "data/cb2d5390e86cc0c37ddf0dda3b4d704f.819x819x1.jpg", audio: "data/Nirvana - Something In The Way (Audio).mp3" },
  { title: "Highway to Hell", artist: "AC/DC", cover: "data/61SjC4E2+iL._AC_UF894,1000_QL80_.jpg", audio: "data/AC DC - Highway to Hell (Official Video).mp3" },
  { title: "T.N.T", artist: "AC/DC", cover: "data/81lTRmgAFRL._UF1000,1000_QL80_.jpg", audio: "data/AC DC - T.N.T..mp3" },
  { title: "Radio Ga Ga", artist: "Queen", cover: "data/Radiogaga.jpg", audio: "data/Queen - Radio Ga Ga (Official Video).mp3" },
  { title: "Killer Queen", artist: "Queen", cover: "data/Killer3cdfront.jpg", audio: "data/Queen - Killer Queen (Top Of The Pops, 1974).mp3" },
  { title: "Good Riddance", artist: "Green Day", cover: "data/Goodbye_&_Good_Riddance_Album_Cover.jpg", audio: "data/Green Day - Good Riddance (Time of Your Life) [Official Music Video] [4K UPGRADE].mp3" },
  { title: "A Man Without Love", artist: "Engelbert Humperdinck", cover: "data/ab67616d0000b27313f61b73b155d49c9ad671b9.jpg", audio: "data/A Man Without Love LYRICS Video Engelbert Humperdinck 1968 🌙 Moon Knight Episode 1.mp3" },
  { title: "Can't Help Falling In Love", artist: "Elvis Presley", cover: "data/artworks-000489245394-tptkbg-t500x500.jpg", audio: "data/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3" },
  { title: "Panic", artist: "The Smiths", cover: "data/artworks-000038094160-00gqt8-t500x500.jpg", audio: "data/The Smiths - Panic (Official Music Video).mp3" },
  { title: "My Way", artist: "Frank Sinatra", cover: "data/ab67616d0000b273db1be510b04d3d0631bf4a84.jpg", audio: "data/My Way (2008 Remastered).mp3" },
  { title: "I Know It's Over", artist: "The Smiths", cover: "data/ab67616d0000b273b49a674649f1a2dc61f5890b.jpg", audio: "data/The Smiths - I Know It's Over (Official Audio).mp3" },
  { title: "And I Love Her", artist: "The Beatles", cover: "data/ab67616d0000b273e230f303815e82a86713eedd.jpg", audio: "data/And I Love Her (Remastered 2009).mp3" },
  { title: "High and Dry", artist: "Radiohead", cover: "data/images (1).jpg", audio: "data/Radiohead - High and Dry.mp3" },
  { title: "Three Little Birds", artist: "Bob Marley & The Wailers", cover: "data/Bob_Marley_Three_Little_Birds.jpg", audio: "data/Bob Marley & The Wailers - Three Little Birds (Official Music Video).mp3" },
  { title: "Buffalo Soldier", artist: "Bob Marley & The Wailers", cover: "data/artworks-000092616705-gxl5xy-t500x500.jpg", audio: "data/Bob Marley & The Wailers - Buffalo Soldier (Official Music Video).mp3" },
  { title: "Could You Be Loved", artist: "Bob Marley & The Wailers", cover: "data/maxresdefault.jpg", audio: "data/Bob Marley & The Wailers - Could You Be Loved (Official Music Video).mp3" },
  { title: "Yesterday", artist: "The Beatles", cover: "data/ab67616d0000b273e3e3b64cea45265469d4cafa.jpg", audio: "data/Yesterday (Remastered 2009).mp3" },
  { title: "This Night Has Opened My Eyes", artist: "The Smiths", cover: "data/maxresdefault (1).jpg", audio: "data/The Smiths - This Night Has Opened My Eyes (Official Audio).mp3" },
  { title: "Friday I'm In Love", artist: "The Cure", cover: "data/ab67616d0000b273e410fa31e3dfcc7521cde86d.jpg", audio: "data/The Cure - Friday I'm In Love.mp3" },
  { title: "You Shook Me All Night Long", artist: "AC/DC", cover: "data/MV5BNmRiOTBiMjktN2FmZS00ZTg0LTk4MDItZDE4MjVmMTQ1MmViXkEyXkFqcGc@._V1_.jpg", audio: "data/AC DC - You Shook Me All Night Long (Official 4K Video).mp3" },
  { title: "Do I Wanna Know", artist: "Arctic Monkeys", cover: "data/artworks-000092363349-w3von3-t500x500.jpg", audio: "data/Arctic Monkeys - Do I Wanna Know (Official Video).mp3" },
  { title: "R U Mine", artist: "Arctic Monkeys", cover: "data/sddefault.jpg", audio: "data/Arctic Monkeys - R U Mine (Official Video).mp3" },
  { title: "Come Together", artist: "The Beatles", cover: "data/440024908_932790415520080_3074963685363179454_n.jpg", audio: "data/The Beatles - Come Together.mp3" },
  { title: "Dog Days Are Over", artist: "Florence + The Machine", cover: "data/images (2).jpg", audio: "data/Florence + The Machine - Dog Days Are Over (2010 Version) (Official Music Video).mp3" },
  { title: "Wonderwall", artist: "Oasis", cover: "data/Wonderwall_cover.jpg", audio: "data/Oasis - Wonderwall (Official Video).mp3" },
  { title: "Forever Young", artist: "Alphaville", cover: "data/ab67616d0000b273b9c4979446c4d39bc08e9503.jpg", audio: "data/Alphaville - Forever Young (Official Music Video).mp3" },
  { title: "Come and Get Your Love", artist: "Redbone", cover: "data/images (3).jpg", audio: "data/Redbone - Come and Get Your Love (Single Edit - Audio).mp3" },
  { title: "Here Comes Your Man", artist: "Pixies", cover: "data/ab67616d0000b2730ab3c2a306c614fae36ff1d6.jpg", audio: "data/Pixies - Here Comes Your Man (Official Video).mp3" },
  






  
];

let currentAlbumIndex = 0;
let isPlaying = false;

const albumGrid = document.getElementById('albumGrid');
const nowPlayingCover = document.getElementById('nowPlayingCover');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const audioPlayer = document.getElementById('audioPlayer');
const volumeSlider = document.getElementById('volumeSlider');
const lyricsContainer = document.createElement('div');
const lyricsContent = document.createElement('div');
const closeLyrics = document.createElement('span');

// Set up the lyrics container
lyricsContainer.className = 'lyrics-container';
lyricsContent.className = 'lyrics-content';
closeLyrics.className = 'close-lyrics';
closeLyrics.textContent = '✖'; // Close button
lyricsContainer.appendChild(closeLyrics);
lyricsContainer.appendChild(lyricsContent);
document.body.appendChild(lyricsContainer);

// Function to create album elements
function createAlbumElement(album) {
  const albumElement = document.createElement('div');
  albumElement.classList.add('album');
  albumElement.innerHTML = `
    <img class="album-cover" src="${album.cover}" alt="${album.title} by ${album.artist}">
    <div class="album-title">${album.title}</div>
    <div class="album-artist">${album.artist}</div>
  `;
  albumElement.addEventListener('click', () => {
      currentAlbumIndex = albums.indexOf(album);
      updatePlayer();
      playAudio();
  });
  return albumElement;
}

// Add albums to grid
albums.forEach(album => {
  albumGrid.appendChild(createAlbumElement(album));
});

// Function to update the player display
function updatePlayer() {
  const currentAlbum = albums[currentAlbumIndex];
  nowPlayingCover.src = currentAlbum.cover;
  nowPlayingTitle.textContent = currentAlbum.title;
  nowPlayingArtist.textContent = currentAlbum.artist;
  audioPlayer.src = currentAlbum.audio;
}

// Show lyrics for the current song
function showLyrics() {
  const currentSong = albums[currentAlbumIndex].audio.split('/').pop(); // Get the filename
  lyricsContent.textContent = lyrics[currentSong] || "Lyrics not available";
  lyricsContainer.style.display = "block"; // Show the lyrics container
}

// Event listeners for lyrics
closeLyrics.addEventListener('click', () => {
  lyricsContainer.style.display = "none"; // Hide the lyrics container
});

// Play/Pause button handler
function togglePlayPause() {
  if (isPlaying) {
      audioPlayer.pause();
  } else {
      audioPlayer.play();
  }
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? '⏸' : '⏯';
}

// Play the selected audio
function playAudio() {
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸';
  showLyrics(); // Show lyrics when playing
}

// Previous album button handler
function prevAlbum() {
  currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
  updatePlayer();
  playAudio();
}

// Next album button handler
function nextAlbum() {
  currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
  updatePlayer();
  playAudio();
}

// Seek bar functionality
progressBar.addEventListener('click', (e) => {
  const progressWidth = progressBar.clientWidth;
  const clickX = e.offsetX;
  if (audioPlayer.duration) {
      const clickedTime = (clickX / progressWidth) * audioPlayer.duration;
      audioPlayer.currentTime = clickedTime;
  }
});

// Update progress bar as the audio plays
audioPlayer.addEventListener('timeupdate', () => {
  if (audioPlayer.duration) {
      const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progress.style.width = `${progressPercentage}%`;
  }
});

// Play next album when the current track ends
audioPlayer.addEventListener('ended', nextAlbum);

// Volume control functionality
volumeSlider.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value;
});

// Event listeners for play/pause, next, and previous buttons
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevAlbum);
nextBtn.addEventListener('click', nextAlbum);

// Set up the initial album
updatePlayer();
