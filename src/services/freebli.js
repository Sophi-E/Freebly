import axios from 'axios';

export const Config = {
  // is this relevant for axios?
  baseURL : "http://localhost:5000",
  postsAction: "/posts/",
  usersAction: "/users/"
};

export const signInAnonymously = () => {
  return undefined;
};

export const registerViaEmail = (email, password) => {
  return undefined;
};

export const signInViaEmail = (email, password) => {
  return undefined;
};

export const signInViaGoogle = () => {
  return undefined;
};

export const signOut = () => {
  return undefined;
};

export const getAllPosts = async () => {
  const { baseURL: url, postsAction: posts} = Config;
  const response = await axios
  .get(`${url}${posts}`, {
    params: {
      //_limit: 8,
    },
  });
  const allPosts = response.data.map(({id, ...data}) => ({id, data}))
  return allPosts;
};
export const findPostById = async (id)=>{
  const { baseURL: url, postsAction: posts} = Config;
  const response = await axios.get(`${url}${posts}?id=${id}`)
  const result = response.data[0];
  return {id: result.id, data: result};
}
export const findPostByProps = async (props) => {
  // this one might search by user, or by a string within a title, 
  //   or by location. Not sure about implementing this yet, or if it
  //   is even needed - the initial getAllPosts may do.
}

export const addPost = async (dataObj) => {
  // do this to create a unique id for this post
  const { baseURL: url, postsAction: posts} = Config;
  const response = await axios({
    method: 'post',
    url: `${url}${posts}`,
    data: dataObj,
  })
  return response.data;
};

export const updatePost = (postId, dataObj) => {
   return undefined;
};

export const deletePost = (postId) => {
  return undefined;
};
