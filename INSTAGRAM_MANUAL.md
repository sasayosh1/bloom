# Instagram 投稿管理マニュアル

## 📸 手動でInstagram画像を追加する方法

### 1. 画像の準備

1. **Instagram投稿から画像をダウンロード**
   - Instagramの投稿を開く
   - 画像を右クリック → 「画像を保存」
   - ファイル名を分かりやすく変更（例: `salon_interior_1.jpg`）

2. **画像をプロジェクトに追加**
   - ダウンロードした画像を `assets/instagram/` フォルダに保存
   - 画像サイズは640x640px程度が推奨

### 2. 投稿管理ツールの使用

1. **管理ツールを開く**
   ```
   ブラウザで update_instagram.html を開く
   ```

2. **投稿情報を入力**
   - 画像ファイル名: `assets/instagram/your_image.jpg`
   - キャプション: Instagram投稿のキャプションをコピー
   - Instagram投稿URL: （任意）実際の投稿URL

3. **投稿を追加**
   - 「投稿を追加」ボタンをクリック
   - 生成されたJSONを確認

4. **posts.jsonを更新**
   
   **方法1: コピー&ペースト**
   - 「JSONをコピー」ボタンでJSONをコピー
   - `posts.json` ファイルを開く
   - 現在の内容を全選択（Ctrl+A / Cmd+A）
   - 削除してコピーしたJSONを貼り付け（Ctrl+V / Cmd+V）
   - ファイルを保存（Ctrl+S / Cmd+S）

   **方法2: ダウンロード**
   - 「JSONをダウンロード」ボタンをクリック
   - ダウンロードされた `posts.json` を確認
   - 元の `posts.json` ファイルと置き換え

### 3. 代替方法：直接編集

直接 `posts.json` を編集することも可能です：

```json
[
  {
    "id": "bloom_post_001",
    "caption": "投稿のキャプション",
    "media_type": "IMAGE",
    "media_url": "assets/instagram/image1.jpg",
    "permalink": "https://www.instagram.com/bloom_estheticsalon",
    "timestamp": "2025-01-17T10:00:00Z",
    "likes_count": 45
  }
]
```

### 4. 推奨のワークフロー

1. **定期的な更新**
   - 週1回程度、新しいInstagram投稿を追加
   - 古い投稿は削除（最新18件程度を保持）

2. **画像の最適化**
   - 画像サイズ: 640x640px
   - ファイル形式: JPG（軽量化のため）
   - ファイル名: 分かりやすい名前

3. **バックアップ**
   - 定期的に `posts.json` をバックアップ
   - 画像フォルダもバックアップ

### 5. トラブルシューティング

**画像が表示されない場合：**
- ファイルパスが正しいか確認
- 画像ファイルが存在するか確認
- ファイル名に特殊文字が含まれていないか確認

**JSONエラーが発生する場合：**
- JSON形式が正しいか確認
- カンマやブラケットの閉じ忘れがないか確認
- 文字エンコーディングがUTF-8か確認

## 📋 チェックリスト

- [ ] 画像を `assets/instagram/` に保存
- [ ] 管理ツールで投稿情報を入力
- [ ] 生成されたJSONを確認
- [ ] `posts.json` を更新
- [ ] サイトで正常に表示されるか確認

この方法により、APIを使わずに手動でInstagram画像を管理できます。