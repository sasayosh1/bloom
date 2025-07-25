# Google Analytics 4 アカウント設定ガイド

## 🔍 **現在の状況に応じた設定方法**

### **ケース1: 既存アカウントがある場合**

#### Step 1: プロパティ作成
1. **Google Analytics** にアクセス
2. **管理（歯車アイコン）** をクリック
3. **アカウント列** で「アカウントを選択」
4. **「+ プロパティを作成」** をクリック

#### Step 2: プロパティ設定
```
プロパティ名: Bloom Esthetic Salon
国/地域: 日本
タイムゾーン: (GMT+09:00) 日本標準時
通貨: 日本円（JPY）
```

#### Step 3: ビジネス情報
```
業種: 美容・フィットネス → その他の美容・パーソナルケア
ビジネスの規模: 小規模（従業員1-10名）
利用目的: ウェブサイトでの顧客行動を把握する
```

### **ケース2: 完全に新しいアカウントが必要な場合**

#### Step 1: アカウント作成
1. **左上のアカウント選択メニュー** をクリック
2. **「+ アカウントを作成」** を選択
3. **「自分用」** を選択

#### Step 2: アカウント設定
```
アカウント名: Bloom Esthetic Salon
国/地域: 日本
```

#### Step 3: プロパティ設定（上記と同様）

### **ケース3: Google Analyticsが初回利用の場合**

#### Step 1: 利用規約同意
1. Google Analytics にアクセス
2. **「無料で利用する」** をクリック
3. 利用規約に同意

#### Step 2: 「測定を開始」が表示される
- この場合は最初にご説明した手順で進められます

## 🎯 **データストリーム設定（重要）**

### プロパティ作成後の設定
1. **「データストリーム」** をクリック
2. **「ウェブ」** を選択
3. 以下を入力:
```
ウェブサイトのURL: https://sasayosh1.github.io/bloom/
ストリーム名: Bloom公式サイト
```

### 測定ID取得
作成後に表示される **「G-XXXXXXXXXX」** をコピー

## 🔧 **設定場所の再確認**

### index.html の 42行目を編集
```javascript
// 変更前
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// 変更後（取得したIDに置き換え）
const GA4_MEASUREMENT_ID = 'G-1234567890';  // 例
```

## ⚠️ **よくある問題と解決方法**

### 問題1: 「測定を開始」が見つからない
**解決**: 既存アカウントがあるため、新しいプロパティを作成

### 問題2: 権限がないと表示される
**解決**: 管理者権限のあるGoogleアカウントを使用

### 問題3: 古いUA（ユニバーサルアナリティクス）が表示される
**解決**: 新しく「GA4プロパティ」を作成（UAは2023年7月終了）

## 📞 **サポート**
設定中にご不明な点があれば、画面のスクリーンショットと一緒にLINEでお問い合わせください。