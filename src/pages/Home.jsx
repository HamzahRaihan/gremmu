import Button from '../layout/Button';

const Home = () => {
  return (
    <div className=" w-full h-screen home bg-no-repeat bg-cover bg-left md:bg-center flex  items-center px-5 lg:px-[72px] ">
      <div className="max-w-[400px] md:max-w-[450px] lg:max-w-[500px] flex flex-col gap-7">
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-green-500">CIPTAKAN LINGKUNGAN BERSIH UNTUK LINGKUNGAN SEHAT BERKELANJUTAN.</h1>

        <p className="py-2 text-lg leading-loose">GreenWorldAware adalah website untuk anda yang sadar lingkungan, memberikan informasi, tips, dan wadah untuk membantu anda membuat kontribusi kebersihan demi bumi yang lebih bersih.</p>
        <div>
          <Button type="daftar" title="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Home;
