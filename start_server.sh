#!/bin/bash

# Instagram管理ツール用のローカルサーバー起動スクリプト

echo "🌸 Bloom Instagram管理ツール サーバーを起動しています..."
echo ""
echo "📱 スマホから以下のURLにアクセスしてください:"
echo "   http://localhost:8080/update_instagram.html"
echo ""
echo "🛑 サーバーを停止するには Ctrl+C を押してください"
echo ""

# Python3がインストールされているか確認
if command -v python3 &> /dev/null; then
    echo "Python3を使用してサーバーを起動..."
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "Pythonを使用してサーバーを起動..."
    python -m http.server 8080
else
    echo "❌ PythonまたはPython3がインストールされていません"
    echo "   以下のコマンドを実行してサーバーを起動してください:"
    echo "   python3 -m http.server 8080"
    exit 1
fi