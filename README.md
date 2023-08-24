# Github Action 사용법

## 1. Pull request에 comment 작성 시 자동으로 병합하기.

### 1-1 comment 달았을 경우 Action 실행 시키기

- [x] Action을 실행시켜 Comment 추가하기.
- Github Action의 권한 문제로 실패했었음.
- Setting > Actions > General 의 권한을 모두 부여함.
- 성공.
- [x] 깃헙 코멘트로 staging branch에 병합하는 방법 찾기.
- Action 수정완료
- 참고 링크
  - [Github docs](https://docs.github.com/en/rest?apiVersion=2022-11-28)
  - [octokit](https://octokit.github.io/rest.js/v20#repos)
  - [blog](https://eunjin3786.tistory.com/194)
  - octokit에서 만들어둔 script를 활용하여 작성 함.
- 병합하는 Action까지는 작성 완료
- 대상 브랜치의 명칭을 동적으로 받아와 설정할 수 있도록 작업해야 함.
- [x] 동적으로 대상 브랜치 명 가져올 수 있도록 수정
  - 실패함
    - `context`에 `compare` 브랜치 명칭이 없음 ㅠ...
    - `github.rest.pulls.get`를 활용해서 compare브랜치명을 가져올 수 있으나, 너무 돌아가는 느낌...?
  - PR 정보를 받아와서 활용하는 형태로 작업 해보려고 함.
    - 성공함
    - script 한개에서 모두 끝내는 형태로 작업을 마무리함.
- [x] staging에 병합하고나면 `During QA`라벨 추가되도록 Action 추가
  - During QA 라벨 추가되는 것 확인
  - 중복으로 생성되지 않는지 확인
    - 이미 있는 label이여서 에러가 발생함 수정 필요
    - 에러 발생하지 않도록 수정
- [x] Comment로 /mg를 달면 PR을 병합하고, During QA 라벨을 제거 한 뒤 Comment를 추가하는 Action 추가
  - 실패!
    - PR을 닫는 권한이 없어서 에러가 발생하는것으로 추정됨.
    - `SyntaxError: Invalid or unexpected token`
  - 불가능 할 것으로 예상됨
  - 성공!!!!!
    - 주석을 #으로 써서 생기는 현상
    - 주석을 js 문법에 맞게 작성 완료 및 적용 완료
- [x] QA 코멘트 수정
  - `/qa`는 너무 흔함.
  - `/qa go`로 수정
- [ ] PR 닫을 때 origin 브랜치 삭제되도록 구문 추가.
  - REST API가 없음.
  - 불가.

### 2 스케쥴러로 PR 리스트 가져와서 Slack에 알림 보기.

- [ ] Test로 cron 설정하여 slack알림을 정상적으로 보내는지 확인.
