// Os vídeos só carregam o player quando o visitante escolhe assistir.
document.querySelectorAll('[data-show-video]').forEach(button => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.showVideo;
    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) return;

    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    player.title = button.dataset.videoTitle;
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(player);
    player.focus();
  });
});
