const express = require("express");

const app = express();

// get -> 가져오다
// post -> 생성하다
// put -> 전체수정(통째로 덮어씌우는 느낌? 잘쓰지않음)
// delete -> 제거
// patch -> 부분 수정
// options -> 찔러보기(간보기)
// head -> 헤더만 가져오기(헤더 / 바디)

app.get("/", (req, res) => {
    res.send("hello express");
});

app.get("/api", (req, res) => {
    res.send("hello api");
});

app.get("/api/posts", (req, res) => {
    res.json([
        { id: 1, content: "hello1" },
        { id: 2, content: "hello2" },
        { id: 3, content: "hello3" },
    ]);
});

app.post("/api/post", (req, res) => {
    res.json({ id: 1, content: "hello" });
});

app.delete("/api/post", (req, res) => {});

app.listen(3065, () => {
    console.log("서버 실행 중");
});
