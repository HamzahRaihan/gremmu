import { useContext, useEffect, useState } from 'react';
import { RiChat1Line, RiTreeLine } from 'react-icons/ri';
import { PostContext } from '../../context/PostContext';
import { formatDate } from '../../utils/Utils';
import { PostSkeleton } from '../../utils/Skeleton';
import { UserContext } from '../../context/UserContext';

const Posts = () => {
  const { userData } = useContext(UserContext);
  console.log('🚀 ~ file: Posts.jsx:12 ~ Posts ~ userData:', userData);
  const { posts, loading, handleLike, handleDislike, button } = useContext(PostContext);
  const [likeCount, setLikeCount] = useState(posts.map((post) => post.Likes?.length || 0));

  console.log('🚀 ~ file: Posts.jsx:13 ~ Posts ~ likeCount:', likeCount);
  console.log('🚀 ~ file: Posts.jsx:7 ~ Posts ~ posts:', posts);

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

  return (
    <div className="flex flex-col gap-6">
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
              <div className="flex gap-4 items-center">
                <button
                  className={`flex gap-2 text-neutral-500 rounded-lg text-sm cursor-pointer transition-all px-3 py-1 ${item.Likes?.find((item) => item.userId === userData.id) && 'bg-green-500 text-white'} `}
                  onClick={() => {
                    const likeIndex = item.Likes?.find((item) => item.userId === userData.id);
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
                  <RiTreeLine className={`${item.Likes?.find((item) => item.userId === userData.id) && 'fill-white'} fill-green-400 h-full w-6`} /> {likeCount[index]} Pohon
                </button>

                <div className="flex gap-2 text-neutral-500 text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1 rounded-lg">
                  <RiChat1Line className="h-full w-6 fill-green-400" /> {item.Comments.length} Komentar
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
