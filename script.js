// Replace with your actual LINE friend URL via GitHub secret injection if desired
const LINE_URL = 'YOUR_LINE_FRIEND_URL';

async function loadInstagram() {
  try {
    const res = await fetch('posts.json');
    const data = await res.json();
    renderGallery(data);
  } catch (e) {
    console.error('Failed to load Instagram posts', e);
  }
}

function renderGallery(posts) {
  const grid = document.getElementById('insta-grid');
  if (!Array.isArray(posts)) return;
  posts.slice(0, 9).forEach((post) => {
    const a = document.createElement('a');
    a.href = post.permalink;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'grid-item';

    const img = document.createElement('img');
    img.src = post.media_url;
    img.alt = post.caption?.substring(0, 100) || 'Instagram image';
    a.appendChild(img);

    if (post.media_type === 'VIDEO' || post.media_type === 'REEL') {
      const play = document.createElement('span');
      play.className = 'play';
      play.textContent = '▶';
      a.appendChild(play);
    }
    grid.appendChild(a);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#line-link, #line-link-2').forEach((el) => {
    el.href = LINE_URL;
  });
  loadInstagram();
});
