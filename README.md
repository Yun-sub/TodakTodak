# TodakTodak-
투두리스트 프로젝트 투닥투닥입니다.

# 까먹지 말 초기설정
git config --global user.name "유저명"
git config --global user.email "[이메일]"
git --list

# SSH 코드 생성 및 >> ssh 폴더 id_rsa 파일 안 키 settings에 키 추가
ssh-keygen -t ed25519 -C "이메일" 

안되면 ssh-keygen -t rsa -C "이메일"

# pull > commit > push 과정
git init 

git remote add origin git@github.com:Yun-sub/TodakTodak.git

git clone origin 브랜치이름

git add 파일이름|.

git pull origin 브랜치이름

git commit -m "남길 소제목"

git push origin 브랜치이름

아마도 이 과정인듯?
