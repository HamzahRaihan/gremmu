import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ACCOUNT_KEY, TOKEN } from '../constants/Key';
import { useParams } from 'react-router-dom';

export const PostContext = createContext({
  handlePost: async () => {},
  handleLike: async () => {},
  handleDislike: async () => {},
  posts: [],
  postsById: [],
  commentsByPost: [],
  loading: true,
  loadingDetailed: true,
  loadingPostById: true,
  button: true,
  buttonPost: true,
  buttonComment: true,
  setPostId: () => {},
  detailedPost: async () => {},
  handleComment: async () => {},
  handleDeletePost: async () => {},
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [detailedPost, setDetailedPost] = useState([]);
  const [commentsByPost, setCommentsByPost] = useState([]);
  const [postId, setPostId] = useState(1);
  const [postsById, setPostsById] = useState([]);
  console.log('🚀 ~ file: PostContext.jsx:36 ~ PostContextProvider ~ postsById:', postsById);

  // loading state
  const [loading, setLoading] = useState(true);
  const [loadingDetailed, setLoadingDetailed] = useState(true);
  const [loadingPostById, setLoadingPostById] = useState(true);

  // loading state for button after clicked
  const [button, setButton] = useState(false);
  const [buttonPost, setButtonPost] = useState(false);
  const [buttonComment, setButtonComment] = useState(false);

  const token = localStorage.getItem(TOKEN);

  const parsedUserData = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
  const id = parsedUserData?.id;

  const { userId } = useParams();

  // Render Posts
  const getPosts = async () => {
    await axios
      .get('https://backend-final-project-fs13.vercel.app/posts')
      .then((response) => {
        const postsData = response.data.data;
        setLoading(false);
        setPosts(postsData);
      })
      .catch((error) => {
        console.error('Internal server error', error.message);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setLoadingDetailed(true);
    const getDetailedPostById = async () => {
      const { data } = await axios.get(`https://backend-final-project-fs13.vercel.app/posts/${postId}`);
      setDetailedPost(data.data);
    };
    setLoadingDetailed(false);
    getDetailedPostById();
  }, [postId]);

  const getPostsByUserId = async () => {
    await axios
      .get(`https://backend-final-project-eight.vercel.app/users/${userId}/posts`)
      .then((response) => {
        setPostsById(response.data.data);
        setLoadingPostById(false);
      })
      .catch((error) => {
        console.error('Internal server error', error.message);
      });
  };
  useEffect(() => {
    getPostsByUserId();
  }, [userId]);

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

  const handleDeletePost = async (id) => {
    setLoading(true);
    await axios.delete(`https://backend-final-project-fs13.vercel.app/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    await getPosts();
    setLoading(false);
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
    await getPostsByUserId();
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
    await getPostsByUserId();
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
        postsById,
        commentsByPost,
        loading,
        loadingDetailed,
        loadingPostById,
        button,
        buttonPost,
        buttonComment,
        setPostId,
        detailedPost,
        handleComment,
        handleDeletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node,
};
