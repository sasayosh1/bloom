// Replace with your actual LINE friend URL via GitHub secret injection if desired
const LINE_URL = 'https://line.me/R/ti/p/@086bqzuj';

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
  posts.slice(0, 18).forEach((post) => {
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
  // LINE URLの設定
  document.querySelectorAll('#line-link, #line-link-2, #nav-line-link, #footer-line-link').forEach((el) => {
    el.href = LINE_URL;
  });
  
  // Instagram投稿の読み込み
  loadInstagram();
  
  // ハンバーガーメニューの実装
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // メニューリンクをクリックしたときメニューを閉じる
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // ロゴクリックでホームに戻る
  const logoLink = document.querySelector('.nav-logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // モバイルメニューが開いていれば閉じる
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  }
  
  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || this.classList.contains('nav-logo-link')) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // ナビゲーション分のオフセット
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
