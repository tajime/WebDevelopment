# WebDevelopment
Githubの使い方

    ・URL
        https://github.com/tajime/WebDevelopment.git

    ・データを送るとき
        git add 送るファイル    　 (「--all」で全て送る)
        git commit -m "コメント" 
        git push origin ブランチ名      (masterはメインブランチ)

    ・データを受け取る
        
        
    ・ブランチの作り方
        git branch ブランチ名            ブランチを作る
        git branch                     現存するブランチの確認
        git checkout ブランチ名          更新するブランチの選択

    ・ブランチの削除
        git branch :ブランチ名
        
    ・マージ方法
        git checkout マージ先のブランチ名
        git merge マージするブランチ名
        git push origin マージ先のブランチ名