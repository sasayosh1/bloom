# GA4測定ID設定ガイド

## 🔧 **実際の設定手順**

### 1. GA4で取得した測定IDをコピー
```
例: G-ABC123DEF4
```

### 2. index.htmlファイルの42行目を編集
```javascript
// 変更前
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// 変更後（実際のIDに置き換え）
const GA4_MEASUREMENT_ID = 'G-ABC123DEF4';
```

### 3. ファイル保存後、本番環境に反映
```bash
git add index.html
git commit -m "Set actual GA4 measurement ID"
git push
```

## 📊 **動作確認方法**

### ブラウザで確認
1. サイトを開く
2. F12でデベロッパーツールを開く
3. Consoleタブで以下が表示されれば成功:
   ```
   GA4が正常に動作しています
   ```

### Google Analytics で確認
1. GA4管理画面 → レポート → リアルタイム
2. サイトにアクセスして、ユーザー数が増加するか確認

## 🎯 **測定されるデータ**

### 自動収集
- ページビュー数
- セッション数
- ユーザー数
- 滞在時間
- 離脱率

### カスタムイベント
- LINE予約クリック数
- Instagram遷移数
- メニュー詳細表示数
- スクロール深度75%到達数
- お客様の声セクション表示数

## ⚠️ **注意事項**

1. **測定IDは必ず実際のものに変更**
2. **プライバシーポリシー**: 既に実装済み
3. **データ反映**: 24-48時間で完全反映
4. **リアルタイム**: 即座に確認可能

## 📞 **サポート**
設定でご不明な点があれば、LINEでお問い合わせください。