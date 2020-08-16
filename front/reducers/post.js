const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "제로초",
    },
    content: "첫ㅂ 번째 게시글 #해시태그 #익스프레스",
    Images: [{
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    }, {
      src: "https://www.w3schools.com/w3css/img_lights.jpg",
    }],
    Comments: [{
      User: {
        nickname: "neror",
      },
      content: "와 장난 아니네요.",
    }, {
      User: {
        nickname: "hero",
      },
      content: "오호 ㅋㅋ",
    }],
  }],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미",
  User: {
    id: 1,
    nickname: "인중초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
