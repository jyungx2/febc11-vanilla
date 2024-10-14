import { defineConfig } from "vite";
import { resolve } from "path"; // (node)path로부터 resolve라는 함수 가져올 것..

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"), // 기본 index.html
        login: resolve(__dirname, "src/pages/auth/login.html"), // 추가 HTML 파일 (회원가입/로그인/로그아웃)
        list: resolve(__dirname, "src/pages/board/list.html"), // 추가 HTML 파일 (게시판 관련 내용 - 삭제/추가/수정)
        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
});
