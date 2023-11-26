import { useContext, useEffect, useState } from 'react';
import { RiChat1Line, RiTreeLine } from 'react-icons/ri';
import { PostContext } from '../../context/PostContext';
import { formatDate } from '../../utils/Utils';
import { PostSkeleton } from '../../utils/Skeleton';
import { UserContext } from '../../context/UserContext';
import CommentsModal from './CommentsModal';

const Posts = () => {
  const { userData } = useContext(UserContext);
  const { posts, loading, handleLike, handleDislike, button, setPostId } = useContext(PostContext);
  console.log('🚀 ~ file: Posts.jsx:12 ~ Posts ~ posts:', posts);

  const [likeCount, setLikeCount] = useState(posts.map((post) => post.Likes?.length || 0));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update like counts when posts change
    setLikeCount(posts.map((post) => post.Likes?.length || 0));
  }, [posts]);

  const handleAddLike = async (postId, userId) => {
    await handleLike(postId, userId);
  };

  const handleRemoveLike = async (id) => {
    await handleDislike(id);
  };

  const handleModalComment = (postId) => {
    if (isOpen) {
      setIsOpen(false);
      document.documentElement.style.overflow = 'auto';
    } else {
      setIsOpen(true);
      setPostId(postId);
      document.documentElement.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse gap-6 ">
        {loading ? (
          <PostSkeleton />
        ) : (
          posts.map((item, index) => (
            <div className="flex gap-5" key={item.id}>
              <img
                className="rounded-full w-12 h-fit object-cover"
                src={!item.User.image ? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' : ''}
                alt="img-profile"
              />
              <div className="flex flex-col gap-3 bg-neutral-200 w-full rounded-lg px-5 py-2">
                <div className="flex flex-col">
                  <h1 className="font-bold">
                    {item.User.firstName} {item.User.lastName}
                  </h1>
                  <p className="text-sm font-light">{formatDate(item.createdAt)}</p>
                </div>
                <p>{item.post}</p>
                {item.image && <img src={item.image} alt="post-images" />}
                <div className="flex gap-4 items-center">
                  <button
                    className={`flex gap-2 text-neutral-500 rounded-lg text-sm cursor-pointer transition-all px-3 py-1 ${item.Likes?.find((item) => item.userId === userData?.id) && 'bg-green-500 text-white'} `}
                    onClick={() => {
                      const likeIndex = item.Likes?.find((item) => item.userId === userData?.id);
                      if (likeIndex) {
                        handleRemoveLike(likeIndex?.id);
                        setLikeCount((prevCounts) => {
                          const newCounts = [...prevCounts];
                          newCounts[index] = Math.max(newCounts[index] - 1, 0);
                          return newCounts;
                        });
                      } else {
                        handleAddLike(item.id, userData.id);
                        setLikeCount((prevCounts) => {
                          const newCounts = [...prevCounts];
                          newCounts[index]++;
                          return newCounts;
                        });
                      }
                    }}
                    disabled={button}
                  >
                    <RiTreeLine className={`${item.Likes?.find((item) => item.userId === userData?.id) && 'fill-white'} fill-green-400 h-full w-6`} /> {likeCount[index]}
                    <p className="max-md:hidden">Pohon</p>
                  </button>

                  <button className="flex gap-2 text-neutral-500 text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1 rounded-lg" onClick={() => handleModalComment(item.id)}>
                    <RiChat1Line className="h-full w-6 fill-green-400" /> {item.Comments.length}
                    <p className="max-md:hidden">Komentar</p>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {isOpen && <CommentsModal handleModalComment={handleModalComment} />}
    </>
  );
};

export default Posts;
