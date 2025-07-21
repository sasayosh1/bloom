# Instagram自動更新ウィジェット設定手順

## EmbedSocialを使った自動更新Instagram表示

### 🎯 特徴
- ✅ **完全無料**
- ✅ **アカウント権限不要**（公開アカウントなら誰でも設定可能）
- ✅ **自動更新**（リアルタイム同期）
- ✅ **レスポンシブ対応**
- ✅ **設定3分**

### 📋 設定手順

#### 1. EmbedSocialアカウント作成
1. [EmbedSocial](https://embedsocial.com/) にアクセス
2. 「無料で始める」をクリック
3. メールアドレスでアカウント作成

#### 2. Instagramフィード作成
1. ダッシュボードで「Instagram」を選択
2. 「新しいフィードを作成」をクリック
3. **ソース選択**：「Instagram Account」
4. **アカウント指定**：`@bloom_estheticsalon` を入力
5. **レイアウト選択**：「Grid」または「Masonry」
6. **投稿数**：6-9投稿を選択
7. 「フィードを作成」をクリック

#### 3. 埋め込みコード取得
1. 作成したフィードをクリック
2. 「埋め込みコード」タブを選択
3. **HTMLコード**をコピー

#### 4. LPに実装
`index.html`のInstagramセクション内の以下の部分を更新：

```html
<!-- 現在のテンプレートコード -->
<div class='embedsocial-instagram' data-ref='8c8c7f4a96a7b4e6c3e7a4d8f9b2e5c1'></div>

<!-- ↓ EmbedSocialから取得したコードに置き換え -->
<div class='embedsocial-instagram' data-ref='YOUR_ACTUAL_REF_CODE'></div>
```

### 🎨 カスタマイズオプション

#### デザイン設定
- **カラー**：サロンのブランドカラーに合わせて調整
- **レイアウト**：Grid（格子状）、Masonry（Pinterest風）、Slider（スライダー）
- **投稿数**：3、6、9、12投稿から選択
- **角丸**：ボーダー半径の調整

#### 表示設定
- **キャプション表示**：ON/OFF
- **いいね数表示**：ON/OFF
- **投稿日表示**：ON/OFF
- **フォローボタン**：ON/OFF

### 🔄 更新頻度
- **自動同期**：15分～1時間ごと
- **リアルタイム更新**：新しい投稿が自動的に反映

### 📱 代替ツール

#### 1. SnapWidget（無料プラン有り）
- URL: https://snapwidget.com/
- 特徴：シンプルな設定、基本機能無料

#### 2. Tagembed（無料プラン有り）
- URL: https://tagembed.com/
- 特徴：多機能、Instagram Reels対応

#### 3. Smash Balloon（WordPress推奨）
- URL: https://smashballoon.com/
- 特徴：WordPressプラグイン、高機能

### ⚠️ 注意事項
- Instagramアカウントが**公開設定**である必要があります
- 非公開アカウントは表示できません
- 無料プランは機能制限があります（投稿数、カスタマイズ等）

### 🆘 トラブルシューティング
- **表示されない場合**：アカウントが公開設定か確認
- **古い投稿が表示される場合**：15分～1時間待つ
- **デザインが崩れる場合**：CSSの競合を確認

### 📞 サポート
設定でお困りの場合は、EmbedSocial公式サポートまたは当ドキュメントを参照してください。