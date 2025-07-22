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
  
  // Instagram section 用のレンダリングも呼び出し
  renderInstagramPosts(posts);
}

// Instagram section用レンダリング関数
function renderInstagramPosts(posts) {
  console.log('renderInstagramPosts called with:', posts);
  
  const container = document.getElementById('instagram-posts');
  if (!container) {
    console.error('Instagram posts container not found!');
    return;
  }
  
  if (!Array.isArray(posts) || posts.length === 0) {
    console.error('No valid posts array provided');
    return;
  }
  
  // コンテナをクリアして表示
  container.innerHTML = '';
  container.style.display = 'flex';
  
  console.log(`Rendering ${Math.min(posts.length, 9)} Instagram posts...`);
  
  // 最新の9投稿を表示（モバイル3x3、PC4x2以上）
  posts.slice(0, 9).forEach((post, index) => {
    console.log(`Creating post ${index + 1}:`, post);
    
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
      background: #f0f0f0;
    `;
    
    // PC表示用のスタイル調整
    if (window.innerWidth >= 640) {
      imgElement.style.width = '23%';
      imgElement.style.maxWidth = '140px';
    }
    
    // 画像読み込み完了時のログ
    imgElement.addEventListener('load', () => {
      console.log(`Image ${index + 1} loaded successfully`);
    });
    
    // 画像読み込み失敗時の処理
    imgElement.addEventListener('error', () => {
      console.error(`Failed to load image ${index + 1}:`, post.media_url);
      imgElement.style.background = 'linear-gradient(45deg, #833ab4, #fd1d1d)';
      imgElement.style.display = 'flex';
      imgElement.style.alignItems = 'center';
      imgElement.style.justifyContent = 'center';
      imgElement.style.color = 'white';
      imgElement.style.fontSize = '0.8rem';
      imgElement.textContent = `投稿 ${index + 1}`;
    });
    
    // クリックでInstagramに遷移
    imgElement.addEventListener('click', () => {
      console.log(`Clicked on post ${index + 1}, opening:`, post.permalink);
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
  
  console.log(`Instagram posts rendered: ${posts.length} posts found, ${Math.min(posts.length, 9)} displayed`);
}

// ダミー投稿表示（デバッグ用）
function showDummyInstagramPosts() {
  console.log('Showing dummy Instagram posts for testing...');
  
  const container = document.getElementById('instagram-posts');
  if (!container) return;
  
  container.innerHTML = '';
  container.style.display = 'flex';
  
  // ダミー画像を6個作成
  for (let i = 1; i <= 6; i++) {
    const imgElement = document.createElement('div');
    imgElement.style.cssText = `
      width: 32%;
      max-width: 110px;
      aspect-ratio: 1/1;
      background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
      text-align: center;
    `;
    
    imgElement.textContent = `投稿 ${i}`;
    
    // PC表示用のスタイル調整
    if (window.innerWidth >= 640) {
      imgElement.style.width = '23%';
      imgElement.style.maxWidth = '140px';
    }
    
    // クリックでInstagramに遷移
    imgElement.addEventListener('click', () => {
      window.open('https://www.instagram.com/bloom_estheticsalon/', '_blank', 'noopener,noreferrer');
    });
    
    // ホバーエフェクト
    imgElement.addEventListener('mouseenter', () => {
      imgElement.style.transform = 'scale(1.05)';
    });
    
    imgElement.addEventListener('mouseleave', () => {
      imgElement.style.transform = 'scale(1)';
    });
    
    container.appendChild(imgElement);
  }
  
  console.log('Dummy Instagram posts displayed');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, starting initialization...');
  
  // LINE URLの設定
  document.querySelectorAll('#line-link, #line-link-2, #nav-line-link, #footer-line-link')
    .forEach(el => (el.href = LINE_URL));
  
  // Instagram投稿の読み込み
  loadInstagram();
  
  // 緊急用：1秒後にダミー表示を強制実行
  setTimeout(() => {
    const container = document.getElementById('instagram-posts');
    if (container) {
      if (container.children.length === 0) {
        console.log('No Instagram content found, showing dummy posts...');
        showDummyInstagramPosts();
      } else {
        console.log('Instagram content already loaded:', container.children.length, 'items');
      }
    }
  }, 1000);
  
  // ハンバーガーメニューの実装
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
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
  }
  
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
      if (navToggle && navLinks) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
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
    // 即座にfade-inクラスを追加（テスト用）
    insta.classList.add('fade-in');
    
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          insta.classList.add('fade-in');
        }
      });
    }, { threshold: 0.3 });
    obs.observe(insta);
  }
  
  // Instagram投稿が表示されない場合の緊急対策
  setTimeout(() => {
    const container = document.getElementById('instagram-posts');
    if (container && container.children.length === 0) {
      console.log('Instagram posts not loaded, forcing dummy display...');
      showDummyInstagramPosts();
    }
  }, 2000);
});
