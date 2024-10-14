import axios from "axios";
// axios 라이브러리를 임포트하겠고, 그 이름을 똑같이 axios라는 이름으로 하겠다..

// API 서버에서 게시물 목록 조회.
async function getList() {
  // ✨res: 이 자체는 목록이 아니고, axios목록값이므로 Response로..
  // 밑에 renderList()에서 이 axios로부터 받아온 반응들을 데이터로 저장해서 사용할 것이기 때문에 list라는 변수는 거기서 사용하자.
  const res = await axios.get("https://11.fesp.shop/posts", {
    params: { type: "test", page: 2, limit: 10 }, // 컨솔에 item 프라퍼티에 Array(28) 출력되는 것을 확인가능. 이 객체들은 우리가 직접 bruno 어플에서 전송한 것.
  });
  // ajax 통신(비동기 네트워크 통신)을 하려는데, api로부터 데이터를 받아오기 위해 async-await 사용 (=> then/catch보다 직관적, 가독성 up)
  console.log(res);
  return res.data; // res - data라는 속성 리턴!
}

// 조회한 게시물 목록을 화면에 출력.
async function renderList() {
  const list = await getList();
  //  <ul id="postList"></ul> 안에 <li>를 추가해야 한다.

  // item이라는 객체들의 배열 상에 map메서드 이용해 새로운 배열 리턴.
  const element = list.item.map((post) => {
    return `
    <li>
      <h2>${post._id} 제목: ${post.title}</h2>
      <span>조회수: ${post.views} 날짜: ${post.createdAt}</span>
      <p>내용: ${post.content}</p>
    </li> 
    <hr/>`;
  });
  document.querySelector("#postList").innerHTML = element.join("");
  // 문자열을 써야할 곳에 배열을 넣어서 ','가 들어감..
}

renderList();

// <HTTP 통신 방법>
// 💫 get = read (서버쪽에 데이터를 가져올 때)
// 💫 post = create (서버쪽에 새로운 데이터를 생성)
// 💫 put = update "overally" (서버쪽에 있는 데이터를 전체적으로 업데이트할 때)
// 💫 delete = delete (서버쪽에 있는 데이터를 삭제할 때)
// 💫 patch = update "partly" (서버에 있는 데이터를 부분적으로 업데이트할 때 사용 (부분 수정))
// => "CRUD"
