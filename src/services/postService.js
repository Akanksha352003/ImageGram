import { countAllPosts, createPost, deletePostById, findAllPosts, findPostById, updatePostById } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;
  const user = createPostObject.user;

  const post = await createPost(caption, image, user);

  return post;
}

export const getAllPostsService = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit);
  // calculate total number of posts and total number of pages
  const totalDocuments = await countAllPosts();
  const totalPages = Math.ceil(totalDocuments / limit);
  return { 
    posts, totalDocuments, totalPages 
  }
}

export const deletePostService = async (id, user) => {
  // call the repository function
  const post = await findPostById(id);
  if(post.user != user){
    throw {
      status: 401,
      message: "Unauthorized"
    }
  }
  const response = await deletePostById(id);
  return response;
}

export const updatePostService = async (id, updateObject) => {
  // call the repository function
  const response = await updatePostById(id, updateObject);
  console.log("response from repo", response);
  
  return response;
}