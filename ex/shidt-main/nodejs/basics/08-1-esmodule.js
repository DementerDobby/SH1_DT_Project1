//ES Module(MJS)는 ECMA Script에서 지원하는 방식이다.

//CommonJS는 Node.js의 기본 모듈 시스템이다.
//ES module는 JS 모듈 시스템이 표준화되면서, Node.js v13.2.0부터 버전부터 지원.

//ES Module을 Node.js에서 사용하는 2가지 방법
//1. 전체 패키지(프로젝트)를 CommonJS에서 ES Module로 전환하는 방식
// package.json
// {
//    "type" : "module",
// }
// 속성을 추가한다.
//2. 패키지의 일부 파일만 ES 모듈 시스템을 적용한다.
//  파일의 확장자를 js => mjs로 바꿔서 사용.

//ES 모듈 시스템에서 내보내기 - export
//방법1. 하나씩 내보내기 - export 대상
//방법2. 기본으로 내보내기 - export default 대상
//방법3. 여러개 내보내기 - export { 대상1, 대상2, ... }
//      default는 사용하지 않음.

//ES 모듈 시스템에서 가져오기 - import

