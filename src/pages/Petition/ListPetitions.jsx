const ListPetitions = () => {
  return (
    <a href="#" className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full md:border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-s-lg" src="https://source.unsplash.com/random/800×900/?computer" alt="image" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  );
};

export default ListPetitions;
