import { RiChat1Line, RiTreeLine } from 'react-icons/ri';

const Posts = () => {
  return (
    <div className="flex gap-5">
      <img className="rounded-full w-12 h-fit object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="img-profile" />
      <div className="flex flex-col gap-4 bg-neutral-200 w-full rounded-lg px-5 py-2">
        <div className="flex flex-col">
          <h1 className="font-bold">John Doe</h1>
          <p className="text-sm font-light">35 September 2023, 23:07</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo aliquam? Aliquid, nemo cupiditate ratione dicta laborum mollitia odit voluptate esse sed, doloribus iste atque error quos vitae veritatis ea.</p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-neutral-500 rounded-lg text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1">
            <RiTreeLine className="fill-green-400 h-full w-6" /> 0 Pohon
          </div>
          <div className="flex gap-2 text-neutral-500 text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1 rounded-lg">
            <RiChat1Line className="h-full w-6 fill-green-400" /> 0 Komentar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
