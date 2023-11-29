import { Link } from 'react-router-dom';
import Button from '../../layout/Button';

const CTAHomepage = () => {
  return (
    <div className="relative h-96 overflow-hidden top-8">
      <div className="absolute flex flex-col gap-10 w-full justify-center text-center top-5 font-bold px-10">
        <div className="m-auto">
          <h1 className="font-extrabold mb-2 lg:text-4xl md:text-3xl sm:text-2xl text-2xl">Dukung Perubahan Bersama Kami</h1>
          <p className="font-thin max-w-xl m-auto lg:text-xl md:text-xl sm:text-md max-[500px]:text-md">Bergabunglah dengan Ribuan Individu yang Peduli dengan Lingkungan.</p>
        </div>
        <div className="max-w-lg m-auto">
          <Link to="/register">
            <Button type="daftar" title="Daftar" />
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 object-cover">
        <img
          className="object-cover h-screen"
          src="https://s3-alpha-sig.figma.com/img/822b/cf59/0d4068d6f134d3f015068c04824c2cb9?Expires=1701648000&Signature=DsRhvO4S8vPz6nuvE9UfQZuBVXIHgZmPPtNqX1AvuDA1zM868j9EdU3RBDgVsqnTxLDMQrnVwI0~xudPMyLlPruHC7911qi6rNYViDulsJldCqO~7OPmptZ~gUzPe163WWCzfkZ3Zxrx4puXdtgDyhLQPx5tR7k3sbfmmCjR6BMs0-xNlDyFYmBDknA-RGGIqLo7O5WIUMLbrGg93v3eEx8~XHLuvw0K3YXslmCBSBuaaIKeUcZN-jtU8AM~s2PRCfbooyGRGtzEefi2oyR~ttqTlj3to0DDLReRfTk0gH3VZh1hkoj5XSyQzBQwppXxPa-E-vFgytKcZKUmvh6wZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="background"
        />
      </div>
    </div>
  );
};

export default CTAHomepage;
