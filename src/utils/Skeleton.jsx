import { RiChat1Line, RiTreeLine } from 'react-icons/ri';

export const PostSkeleton = () => {
  const skeleton = () => {
    return (
      <div className="flex gap-5">
        <div className="animate-pulse rounded-full w-12 h-10 bg-neutral-400"></div>
        <div className="flex flex-col gap-3 bg-neutral-200 w-full rounded-lg px-5 py-2">
          <div className="flex flex-col gap-2">
            <h1 className="animate-pulse h-3 w-36 bg-neutral-500"></h1>
            <p className="animate-pulse h-2 w-44 bg-neutral-400"></p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="h-2 w-36 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-80 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-52 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-80 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-56 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-20 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-96 bg-neutral-400 animate-pulse"></p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center text-neutral-500 rounded-lg text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1">
              <RiTreeLine className="fill-green-400 h-full w-6" />
              <div className="animate-pulse h-2 w-10 bg-neutral-400"></div>
            </div>
            <div className="flex gap-2 text-neutral-500 items-center text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1 rounded-lg">
              <RiChat1Line className="h-full w-6 fill-green-400" /> <div className="animate-pulse h-2 w-10 bg-neutral-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {Array(5)
        .fill()
        .map((_, index) => (
          <div key={index}>{skeleton()}</div>
        ))}
    </>
  );
};

export const CommentSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden overscroll-none z-50 py-10 px-10 h-full">
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="rounded-full bg-neutral-400 h-14 w-10 object-cover z-10 animate-pulse"></div>
          <div className="h-full"></div>
        </div>

        <div className="flex flex-col h-full w-full overflow-auto gap-3">
          <div className="flex gap-2 items-center">
            <h1 className="h-5 w-36 bg-neutral-600 animate-pulse"></h1> • <h1 className="h-5 w-36 bg-neutral-400 animate-pulse"></h1>
          </div>
          <div className="flex flex-wrap gap-4">
            <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 p-5 rounded-lg">
        <div className="border-b border-neutral-800 pb-2 mb-2 ">
          <div className="h-4 w-36 bg-neutral-400 animate-pulse"></div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="rounded-full bg-neutral-400 h-10 w-10 object-cover z-10 animate-pulse"></div>
            <div className="h-full"></div>
          </div>

          <div className="flex flex-col h-full w-full overflow-auto gap-3">
            <div className="flex gap-2 items-center">
              <h1 className="h-5 w-36 bg-neutral-600 animate-pulse"></h1> • <h1 className="h-5 w-36 bg-neutral-400 animate-pulse"></h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
