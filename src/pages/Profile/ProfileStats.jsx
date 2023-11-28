import { Tooltip } from 'flowbite-react';
import PropTypes from 'prop-types';
import { UserPoints } from './UserPoints';
import { UserBadge } from './UserBadge';

const ProfileStats = (props) => {
  const { userById, desktop } = props;

  return (
    <div className={`flex flex-col w-full justify-between p-4 rounded-md gap-4 ${desktop && 'max-[980px]:hidden'}`}>
      {userById.points > 0 ? (
        <>
          <div className="flex w-full flex-col">
            <h1 className="border-b border-neutral-400 pb-2">Total Point</h1>
            <UserPoints userById={userById} />
          </div>
          <div className="flex w-full flex-col ">
            <div className="flex justify-between w-full">
              <h1 className="mb-2">Badge</h1>
              <Tooltip content="Buat post untuk mendapatkan badge">
                <div className="rounded-full bg-neutral-100 border border-neutral-200 w-5 h-5 flex items-center justify-center">
                  <p>?</p>
                </div>
              </Tooltip>
            </div>

            <div className="border-t w-full border-neutral-400 pb-2 pt-2">
              {userById.points < 100 ? (
                <div>belum punya badge</div>
              ) : (
                <div className="w-20">
                  <UserBadge userById={userById} />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

ProfileStats.propTypes = {
  userById: PropTypes.any,
  desktop: PropTypes.string,
};

export default ProfileStats;
