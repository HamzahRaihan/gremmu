import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TOKEN } from '../constants/Key';

export const PostContext = createContext({
  handlePost: async () => {},
  handleLike: async () => {},
  handleDislike: async () => {},
  posts: [],
  loading: true,
  button: true,
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [button, setButton] = useState(false);
  const token = localStorage.getItem(TOKEN);

  const getPosts = async () => {
    await axios
      .get('https://backend-final-project-fs13.vercel.app/posts')
      .then((response) => {
        const postsData = response.data.data;
        setPosts(postsData);
      })
      .catch((error) => {
        console.error('Internal server error', error.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleLike = async (postId, userId) => {
    setButton(true);
    await axios.post(
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
    );
    await getPosts();
    setButton(false);
  };

  const handleDislike = async (id) => {
    setButton(true);
    await axios.delete(`https://backend-final-project-eight.vercel.app/likes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    await getPosts();
    setButton(false);
  };

  return <PostContext.Provider value={{ handleLike, handleDislike, posts, loading, button }}>{children}</PostContext.Provider>;
};

PostContextProvider.propTypes = {
  children: PropTypes.node,
};
