import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ACCOUNT_KEY, TOKEN } from '../constants/Key';

export const PostContext = createContext({
  handlePost: async () => {},
  handleLike: async () => {},
  handleDislike: async () => {},
  posts: [],
  commentsByPost: [],
  loading: true,
  loadingDetailed: true,
  button: true,
  buttonPost: true,
  buttonComment: true,
  setPostId: () => {},
  detailedPost: async () => {},
  handleComment: async () => {},
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingDetailed, setLoadingDetailed] = useState(true);
  const [button, setButton] = useState(false);
  const [buttonPost, setButtonPost] = useState(false);
  const [buttonComment, setButtonComment] = useState(false);
  const [detailedPost, setDetailedPost] = useState([]);
  const [commentsByPost, setCommentsByPost] = useState([]);
  console.log('🚀 ~ file: PostContext.jsx:31 ~ PostContextProvider ~ commentsByPost:', commentsByPost);
  const [postId, setPostId] = useState(0);

  const token = localStorage.getItem(TOKEN);

  const parsedUserData = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
  const id = parsedUserData?.id;

  // Render Posts
  const getPosts = async () => {
    await axios
      .get('https://backend-final-project-fs13.vercel.app/posts')
      .then((response) => {
        const postsData = response.data.data;
        setPosts(postsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Internal server error', error.message);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const getPostById = async () => {
      setLoadingDetailed(true);
      const { data } = await axios.get(`https://backend-final-project-fs13.vercel.app/posts/${postId}`);
      setDetailedPost(data.data);
      setLoadingDetailed(false);
    };
    getPostById();
  }, [postId]);

  // Render Comments

  useEffect(() => {
    const getCommentsByPostId = async () => {
      await axios
        .get(`https://backend-final-project-fs13.vercel.app/comments/${postId}/posts`)
        .then((response) => {
          const data = response.data.data;
          setCommentsByPost(data);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
      setLoading(false);
    };
    getCommentsByPostId();
  }, [postId]);

  // Handle Posts
  const handlePost = async (post, fileUrl) => {
    setButtonPost(true);
    await axios
      .post(
        'https://backend-final-project-fs13.vercel.app/posts',
        {
          post,
          image: fileUrl,
          userId: id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => console.error(error.message));
    await getPosts();
    setButtonPost(false);
  };

  // Handle Like and Dislike
  const handleLike = async (postId, userId) => {
    setButton(true);
    await axios
      .post(
        'https://backend-final-project-eight.vercel.app/likes',
        {
          postId,
          userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => console.error(error.message));
    await getPosts();
    setButton(false);
  };

  const handleDislike = async (id) => {
    setButton(true);
    await axios
      .delete(`https://backend-final-project-eight.vercel.app/likes/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => console.error(error.message));
    await getPosts();
    setButton(false);
  };

  // Handle Comment
  const handleComment = async (comment) => {
    setButtonComment(true);
    const { data } = await axios.post(
      'https://backend-final-project-fs13.vercel.app/comments',
      {
        postId: postId,
        userId: id,
        comment: comment,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCommentsByPost((prevComments) => [...prevComments, data.data]);
    await getPosts();
    setButtonComment(false);
  };

  return (
    <PostContext.Provider
      value={{
        handlePost,
        handleLike,
        handleDislike,
        posts,
        commentsByPost,
        loading,
        loadingDetailed,
        button,
        buttonPost,
        buttonComment,
        setPostId,
        detailedPost,
        handleComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node,
};
