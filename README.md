# Bloom Esthetic Salon LP

静的 HTML/CSS で作成したランディングページです。GitHub Actions を使って Instagram 投稿を自動取得し、`posts.json` に保存、それをフロントエンドで表示します。

## セットアップ手順

1. **リポジトリを fork / clone**
2. **GitHub Secrets を設定**
   - `INSTAGRAM_TOKEN` – Instagram Graph API の Long-Lived Access Token
   - `INSTAGRAM_USER_ID` – 対象 Instagram アカウントの User ID
   - `LINE_URL` – LINE 公式アカウントの友だち追加 URL（任意）
3. **LINE URL の注入**
   - `script.js` 内の `LINE_URL` を削除し、`fetch_instagram.yml` の commit ステップで環境変数から置換するなどお好みで。
4. **GitHub Pages または Netlify でデプロイ**
   - GitHub Pages: `Settings → Pages → Build from branch` で `main` の `/` を選択
   - Netlify: リポジトリを選ぶだけ（ビルドは不要）
5. **自動更新**
   - 12時間ごとにワークフローが動き、最新投稿を取得して `posts.json` を更新しコミットします。
