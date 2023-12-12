import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const NewsContext = createContext(null);

const NewsContextDispatch = createContext(null);

const NewsProvider = ({ children }) => {
  const [news, dispatch] = useReducer();
  return (
    <NewsContext.Provider value={news}>
      <NewsContextDispatch.Provider value={dispatch}>{children}</NewsContextDispatch.Provider>
    </NewsContext.Provider>
  );
};

export default NewsProvider;

NewsProvider.propTypes = {
  children: PropTypes.node,
};
