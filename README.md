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
  - [octokit](https://octokit.github.io/rest.js/v20#repos)
  - [blog](https://eunjin3786.tistory.com/194)
- 병합하는 Action까지는 작성 완료
- 대상 브랜치의 명칭을 동적으로 받아와 설정할 수 있도록 작업해야 함.
- 동적으로 대상 브랜치 명 가져올 수 있도록 수정
