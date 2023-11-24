const Posts = () => {
  return (
    <div className="flex gap-5">
      <img className="rounded-full w-12 h-fit object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="img-profile" />
      <div className="bg-neutral-200 w-full rounded-lg px-5 py-2">
        <div className="flex flex-col">
          <h1 className="font-bold">John Doe</h1>
          <p className="text-sm font-light">35 September 2023, 23:07</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo aliquam? Aliquid, nemo cupiditate ratione dicta laborum mollitia odit voluptate esse sed, doloribus iste atque error quos vitae veritatis ea.</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
