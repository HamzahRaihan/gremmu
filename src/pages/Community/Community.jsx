import PostInput from './PostInput';
import Posts from './Posts';

function Community() {
  return (
    <div className="flex flex-col max-w-6xl m-auto pt-32 px-2 gap-10 pb-10">
      <PostInput />
      <Posts />
    </div>
  );
}

export default Community;
