// 公式 LINE URL
const LINE_URL = 'https://line.me/R/ti/p/@086bqzuj';

// Instagramフィード取得
async function loadInstagram() {
  try {
    const res = await fetch('posts.json');
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    renderGallery(data);
  } catch (err) {
    console.error('Instagram fetch error – fallback to dummy', err);
    const dummy = Array.from({ length: 6 }).map((_, i) => ({
      permalink: 'https://www.instagram.com/bloom_estheticsalon',
      media_url: `https://picsum.photos/seed/ig${i}/400/400`,
      media_type: 'IMAGE'
    }));
    renderGallery(dummy);
  }
}

function renderGallery(posts) {
  const grid = document.getElementById('insta-grid');
  if (!grid || !Array.isArray(posts)) return;

  posts.slice(0, 12).forEach(post => {
    const a = document.createElement('a');
    a.href = post.permalink;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'grid-item';

    const img = document.createElement('img');
    img.src = post.media_url;
    img.alt = post.caption?.slice(0, 100) || 'Instagram image';
    img.onerror = () => a.remove();
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
  document.querySelectorAll('#line-link, #line-link-2, #nav-line-link, #footer-line-link')
    .forEach(el => (el.href = LINE_URL));
  loadInstagram();
});
