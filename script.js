const songs = {
  happy: [
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/nfWlot6h_JM",
    "https://www.youtube.com/embed/K0ibBPhiaG0"
  ],
  sad: [
    "https://www.youtube.com/embed/a3ICNMQW7Ok", // Tum Hi Ho
    "https://www.youtube.com/embed/EgDwkSlm2Lg", // Tujhe Bhula Diya
    "https://www.youtube.com/embed/5hQK6GIrpYU"  // Bhula Dena
  ],
  energetic: [
    "https://www.youtube.com/embed/IcrbM1l_BoI", // Stay
    "https://www.youtube.com/embed/XqZsoesa55w", // Uptempo
    "https://www.youtube.com/embed/BddP6PYo2gs"  // Ghungroo
  ],
  chill: [
    "https://www.youtube.com/embed/1ZYbU82GVz4", // Lo-fi
    "https://www.youtube.com/embed/0T1IVyXBGjM", // Apna Bana Le Lo-fi
    "https://www.youtube.com/embed/WYU9Mtr8lAU"  // Calm Vibes
  ]
};

function showPlaylist(mood) {
  const playlistDiv = document.getElementById('playlist');
  playlistDiv.innerHTML = '';
  songs[mood].forEach(link => {
    const iframe = document.createElement('iframe');
    iframe.width = "300";
    iframe.height = "170";
    iframe.src = link;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    playlistDiv.appendChild(iframe);
  });
}