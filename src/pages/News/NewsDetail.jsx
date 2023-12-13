import { Card, Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { formatDate } from '../../utils/Utils';

const NewsDetail = () => {
  const { newsDetail, loadingDetail } = useContext(NewsContext);
  console.log('🚀 ~ file: NewsDetail.jsx:8 ~ NewsDetail ~ loadingDetail:', loadingDetail);
  return (
    <div>
      {loadingDetail ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="w-full mb-10">
            <img className="relative object-cover w-full opacity-70 h-[500px]" src={newsDetail.image} alt="img-header" />
            <p className="absolute top-52 left-10 text-white font-bold text-2xl w-96 max-[980px]:left-2 max-[450px]:text-lg max-[450px]:w-72">{newsDetail.title}</p>
          </div>
          <div className="grid grid-cols-3 max-[980px]:grid-cols-1  lg:gap-3 max-w-7xl m-auto mb-10 px-2">
            <div className="col-span-2">
              <h5 className="font-normal text-neutral-500">
                Author: {newsDetail.User?.firstName} {newsDetail.User?.lastName} • {formatDate(newsDetail.updatedAt)}
              </h5>
              <article>
                <p>{newsDetail.description}</p>
              </article>
            </div>
            <div>
              <h1 className=" font-bold text-2xl mb-2 ">Berita Terkini</h1>
              <div className="flex flex-col gap-4">
                <Card className="" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="https://imgur.com/rqq8tpj.png" horizontal>
                  <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">Kepedulian dalam Membuang dan Mengelola Sampah: Tanggung Jawab Bersama Masyarakat dan Pemerintah</h5>
                  <p className="font-normal text-xs text-gray-700 dark:text-gray-400">Kamis, 7 September 2023</p>
                </Card>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsDetail;
