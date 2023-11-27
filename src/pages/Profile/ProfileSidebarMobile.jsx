import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import ProfileStats from './ProfileStats';

const ProfileSidebarMobile = () => {
  const { userById } = useContext(UserContext);

  return (
    <div className="p-4 fixed z-50 h-full w-96 max-[400px]:w-72 max-[300px]:w-52 bg-white pt-28">
      <div className="flex flex-col items-center">
        <img className="rounded-full w-28 " src={`${userById.image ? userById.image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}`} alt="profile-img" />
        <p className="font-bold text-xl">
          {userById.firstName} {userById.lastName}
        </p>
      </div>

      <ProfileStats userById={userById} />
    </div>
  );
};

export default ProfileSidebarMobile;
