# 📱 スマホでInstagram管理ツールを使う方法

## 🚀 方法1: ローカルサーバーを起動（推奨）

### 手順
1. **サーバーを起動**
   ```bash
   ./start_server.sh
   ```
   または
   ```bash
   python3 -m http.server 8080
   ```

2. **スマホから接続**
   - PCとスマホが同じWi-Fi network に接続されている必要があります
   - PCのIPアドレスを確認: `ipconfig` (Windows) または `ifconfig` (Mac/Linux)
   - スマホのブラウザで以下にアクセス:
     ```
     http://PCのIPアドレス:8080/update_instagram.html
     ```
   - 例: `http://192.168.1.100:8080/update_instagram.html`

### IPアドレスの確認方法
**Mac/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**Windows:**
```cmd
ipconfig | findstr "IPv4"
```

## 🌐 方法2: GitHub Pagesで公開

### 手順
1. **GitHubリポジトリにプッシュ**
   ```bash
   git add .
   git commit -m "Add Instagram management tool"
   git push origin main
   ```

2. **GitHub Pagesを有効化**
   - GitHubリポジトリの Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

3. **公開URLにアクセス**
   ```
   https://sasayosh1.github.io/bloom/update_instagram.html
   ```

## 📋 スマホでの使い方

### 1. Instagram画像の保存
- Instagramアプリで投稿を開く
- 右上の「・・・」→「保存」→「画像を保存」
- 画像をPCに転送（AirDrop、Google Photos、メールなど）

### 2. 管理ツールで投稿を追加
- スマホブラウザで管理ツールを開く
- 画像ファイル名とキャプションを入力
- 「投稿を追加」ボタンをタップ

### 3. JSONの更新
- 「JSONをダウンロード」ボタンをタップ
- ダウンロードしたJSONファイルをPCに転送
- 元の `posts.json` ファイルと置き換え

## 🔧 トラブルシューティング

### スマホから接続できない場合
1. **ファイアウォールの確認**
   - PCのファイアウォールでポート8080を許可

2. **IPアドレスの確認**
   - PCとスマホが同じWi-Fiネットワークに接続されているか確認

3. **サーバーの起動確認**
   - `http://localhost:8080/update_instagram.html` でPCから開けるか確認

### 画像が表示されない場合
- 画像ファイルが正しいパスに配置されているか確認
- ファイル名に特殊文字が含まれていないか確認

## 💡 おすすめの使い方

1. **定期的な更新**
   - 週1回程度、管理ツールでInstagram投稿を更新
   - 最新18件程度を維持

2. **画像の最適化**
   - 画像サイズ: 640x640px
   - ファイル形式: JPG
   - ファイル名: 分かりやすい名前（例: salon_facial_20250117.jpg）

3. **バックアップ**
   - 定期的に `posts.json` をバックアップ
   - 画像フォルダもバックアップ

この方法で、スマホからでも簡単にInstagram投稿を管理できます！