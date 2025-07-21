# Bloom Esthetic Salon LP

静的 HTML/CSS で作成したランディングページです。GitHub Actions を使って自動デプロイと Instagram 投稿の自動取得を行います。

## 自動デプロイ機能

### 🚀 自動デプロイ
- **トリガー**: `main`ブランチへのプッシュ時に自動実行
- **対象ファイル**: `index.html`, `assets/**`, `*.css`, `*.js`
- **デプロイ先**: GitHub Pages
- **ワークフロー**: `.github/workflows/auto-deploy.yml`

### 📱 Instagram自動更新
- **頻度**: 2時間ごと（リアルタイム性向上）
- **処理**: Instagram投稿を取得して`posts.json`を自動更新・コミット
- **表示**: LP内のInstagramセクションで最新6投稿を表示
- **ワークフロー**: `.github/workflows/fetch_instagram.yml`

### 🔄 自動キャッシュクリア
- **頻度**: 毎日午前2時（JST午前11時）
- **処理**: ブラウザキャッシュを強制更新、アセットにバージョン番号付与
- **手動実行**: GitHub Actions の「Cache Clear & Force Refresh」から実行可能
- **ワークフロー**: `.github/workflows/cache-clear.yml`

## セットアップ手順

### 1. GitHub Pages設定
1. リポジトリの `Settings → Pages` に移動
2. **Source** を `GitHub Actions` に設定
3. 自動デプロイが有効化されます

### 2. Instagram連携設定（任意）
GitHub Secrets に以下を設定：
- `INSTAGRAM_TOKEN` – Instagram Graph API の Long-Lived Access Token
- `INSTAGRAM_USER_ID` – 対象 Instagram アカウントの User ID
- `LINE_URL` – LINE 公式アカウントの友だち追加 URL

### 3. 開発フロー
```bash
# ローカルで編集
git add .
git commit -m "Update content"
git push origin main

# → 自動的にGitHub Pagesにデプロイされます
```

## ファイル構成
```
bloom/
├── index.html          # メインページ
├── assets/            # 画像・リソース
├── posts.json         # Instagram投稿データ（自動生成）
├── cache-status.txt   # キャッシュクリア状況（自動更新）
├── .github/
│   └── workflows/
│       ├── auto-deploy.yml     # 自動デプロイ
│       ├── cache-clear.yml     # キャッシュクリア
│       └── fetch_instagram.yml # Instagram取得
└── README.md
```

## キャッシュ管理
### 自動キャッシュクリア
- **実行タイミング**: 毎日午前2時（UTC）/ 午前11時（JST）
- **処理内容**:
  - CSS/JSファイルにタイムスタンプクエリ追加 (`?v=1234567890`)
  - HTTPメタタグ更新（no-cache, no-store, must-revalidate）
  - `cache-status.txt` の更新

### 手動キャッシュクリア
1. GitHub リポジトリの「Actions」タブに移動
2. 「Cache Clear & Force Refresh」ワークフローを選択  
3. 「Run workflow」をクリック
4. 数分後にサイトのキャッシュが更新されます

## 機能
- ✅ レスポンシブデザイン（スマートフォン最適化）
- ✅ 横滑り防止対策済み
- ✅ 自動デプロイ
- ✅ 自動キャッシュクリア（毎日）
- ✅ Instagram投稿自動取得（2時間ごと）
- ✅ Instagram投稿表示セクション（最新6投稿）
- ✅ LINE連携
- ✅ メニューモーダル
- ✅ スムーススクロール
