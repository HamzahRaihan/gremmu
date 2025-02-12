import { useContext } from 'react';
import { PetitionContext } from '../../context/PetitionContext';
import { Spinner } from 'flowbite-react';

const Participation = () => {
  const { participate, loadingPart } = useContext(PetitionContext);

  return (
    <div className="mt-2 border border-neutral-200 p-4 rounded-lg h-96 overflow-y-auto overflow-x-hidden">
      <p className="text-center text-xl font-bold mb-4">Partisipan</p>
      <div className="flex-col gap-1">
        {loadingPart ? (
          <Spinner />
        ) : (
          <ol className="list-decimal list-inside">
            {participate.map((item) => (
              <li key={item.userId} className=" border border-neutral-200 rounded-lg hover:bg-neutral-200 transition-all p-2">
                {item.User.firstName} {item.User.lastName}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Participation;
