import PostInput from './PostInput';
import Posts from './Posts';
import SidebarCommunity from './SidebarCommunity';

function Community() {
  return (
    <div className="flex">
      <SidebarCommunity />
      <div className="flex flex-col max-w-4xl m-auto pt-32 px-4 gap-6 pb-10 ">
        <PostInput />
        <Posts />
      </div>
    </div>
  );
}

export default Community;
