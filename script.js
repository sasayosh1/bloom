// Replace with your actual LINE friend URL via GitHub secret injection if desired
const LINE_URL = 'https://line.me/R/ti/p/@086bqzuj';

async function loadInstagram() {
  try {
    console.log('Loading Instagram posts...');
    const res = await fetch('posts.json');
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Instagram data loaded:', data);
    
    // 既存のギャラリー表示
    renderGallery(data);
    
    // 新しいInstagramセクション表示
    renderInstagramPosts(data);
    
    // EmbedSocialが読み込まれない場合のフォールバック表示確認
    setTimeout(() => {
      const embedContainer = document.getElementById('embedsocial-instagram');
      const postsContainer = document.getElementById('instagram-posts');
      
      if (embedContainer && postsContainer) {
        const embedHasContent = embedContainer.querySelector('.embedsocial-instagram')?.children.length > 0;
        const postsHasContent = postsContainer.children.length > 0;
        
        if (!embedHasContent && postsHasContent) {
          console.log('Using fallback Instagram display');
          postsContainer.style.display = 'flex';
          embedContainer.style.display = 'none';
        } else if (embedHasContent) {
          console.log('Using EmbedSocial Instagram widget');
          postsContainer.style.display = 'none';
          embedContainer.style.display = 'block';
        }
      }
    }, 3000);
    
  } catch (e) {
    console.error('Failed to load Instagram posts:', e);
    
    // エラー時は空のInstagramセクションを表示
    const container = document.getElementById('instagram-posts');
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #666; width: 100%;">
          <p>Instagram投稿の読み込み中...</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">
            <a href="https://www.instagram.com/bloom_estheticsalon/" target="_blank" style="color: #833ab4;">
              @bloom_estheticsalon で最新投稿をご覧ください
            </a>
          </p>
        </div>
      `;
      container.style.display = 'flex';
    }
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

function renderInstagramPosts(posts) {
  const container = document.getElementById('instagram-posts');
  if (!container || !Array.isArray(posts)) return;
  
  // コンテナを表示
  container.style.display = 'flex';
  
  // 最新の9投稿を表示（モバイル3x3、PC4x2以上）
  posts.slice(0, 9).forEach((post, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = post.media_url;
    imgElement.alt = post.caption?.substring(0, 50) || `Instagram投稿 ${index + 1}`;
    imgElement.loading = 'lazy';
    imgElement.style.cssText = `
      width: 32%;
      max-width: 110px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
    `;
    
    // PC表示用のスタイル調整
    if (window.innerWidth >= 640) {
      imgElement.style.width = '23%';
      imgElement.style.maxWidth = '140px';
    }
    
    // クリックでInstagramに遷移
    imgElement.addEventListener('click', () => {
      window.open(post.permalink, '_blank', 'noopener,noreferrer');
    });
    
    // ホバーエフェクト
    imgElement.addEventListener('mouseenter', () => {
      imgElement.style.transform = 'scale(1.05)';
    });
    
    imgElement.addEventListener('mouseleave', () => {
      imgElement.style.transform = 'scale(1)';
    });
    
    container.appendChild(imgElement);
  });
  
  console.log(`Instagram posts loaded: ${posts.length} posts found, ${Math.min(posts.length, 9)} displayed`);
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
  
  // Instagram セクションのフェードインアニメーション
  const insta = document.getElementById('instagram');
  if (insta) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          insta.classList.add('fade-in');
        }
      });
    }, { threshold: 0.3 });
    obs.observe(insta);
  }
});
