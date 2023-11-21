import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import Button from '../layout/Button';

function FormLogin() {
  const ctx = useContext(UserContext);
  console.log(ctx.users);
  return (
    <div className="flex w-full ">
      <img className="relative filter bg-neutral-400 w-1/2 h-screen max-[980px]:hidden object-cover" src="https://source.unsplash.com/random/1920x1080/?trash" />
      <div className="absolute flex items-end w-1/2 h-screen max-[980px]:hidden overlay">
        <blockquote className="text-white p-10">&quot; Embrace the power of conscious choices, for every reduction in waste is a step towards a cleaner, greener tomorrow.&quot; #LessWasteMoreHope</blockquote>
      </div>
      <form className="flex flex-col m-auto max-w-xl  gap-4 text-lg font-bold justify-center bg-neutral-100 p-10 rounded-lg max-[980px]:h-screen max-[980px]:mx-auto max-[980px]:my-20">
        <img className="pb-10" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" width={300} alt="logo" />
        <h1 className="text-2xl">Login</h1>
        <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <label>Nama depan: </label>
            <input className="rounded-lg w-full" type="text" placeholder="Nama depan" />
          </div>
          <div className="flex flex-col gap-4">
            <label>Nama akhir: </label>
            <input className="rounded-lg w-full" type="text" placeholder="Nama akhir" />
          </div>
        </div>
        <label>Email: </label>
        <input className="rounded-lg w-full" type="email" placeholder="Email" />
        <label>Password: </label>
        <input className="rounded-lg w-full" type="password" placeholder="password" />
        <Button type="login" title="Masuk" />
      </form>
    </div>
  );
}

export default FormLogin;
