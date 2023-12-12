import { Card } from 'flowbite-react';

const NewsDetail = () => {
  return (
    <>
      <div className="w-full mb-10">
        <img className="relative object-cover w-full opacity-70 h-[500px]" src="https://imgur.com/rqq8tpj.png" alt="img-header" />
        <p className="absolute top-52 left-10 text-white font-bold text-2xl w-96 max-[980px]:left-2 max-[450px]:text-lg max-[450px]:w-72">Kepedulian dalam Membuang dan Mengelola Sampah: Tanggung Jawab Bersama Masyarakat dan Pemerintah</p>
      </div>
      <div className="grid grid-cols-3 max-[980px]:grid-cols-1  lg:gap-3 max-w-7xl m-auto mb-10 px-2">
        <div className="col-span-2">
          <h5 className="font-normal text-neutral-500">Author - Kamis, 7 September 2023 </h5>
          <article>
            <p>
              Sampah merupakan salah satu masalah lingkungan yang dihadapi oleh masyarakat modern saat ini. Pertumbuhan populasi, urbanisasi, dan konsumsi yang meningkat telah menyebabkan volume sampah yang dihasilkan semakin melonjak. Oleh
              karena itu, penting bagi semua kalangan masyarakat, termasuk pemerintah, untuk memiliki kepedulian yang tinggi dalam membuang dan mengelola sampah dengan baik. Dalam artikel ini, kita akan membahas mengapa kepedulian ini
              penting, serta langkah-langkah yang dapat diambil oleh masyarakat dan pemerintah untuk mengatasi masalah sampah ini.
            </p>
            <p className="font-bold mt-2">Mengapa kepedulian dalam membuang dan mengelola sampah penting?</p>
            <ul className="list-decimal list-inside">
              <li>
                Kesehatan Masyarakat: Sampah yang tidak dikelola dengan baik dapat menjadi sarang bagi penyakit dan bakteri berbahaya. Jika sampah dibiarkan menumpuk di tempat-tempat umum atau didekat pemukiman penduduk, hal ini dapat
                menyebabkan penyebaran penyakit yang berpotensi membahayakan kesehatan masyarakat.
              </li>
              <li>
                Kerusakan Lingkungan: Sampah yang tidak dibuang atau dikelola dengan benar dapat mencemari lingkungan. Sampah plastik yang terbuang di lautan, misalnya, dapat merusak ekosistem laut dan membahayakan kehidupan laut. Selain
                itu, pembakaran sampah yang tidak terkontrol juga dapat menyebabkan polusi udara dan perubahan iklim.
              </li>
              <li>
                Pemanfaatan Sumber Daya: Sampah yang dikelola dengan baik dapat menjadi sumber daya yang berharga. Dengan mengelola sampah secara efisien, kita dapat mendaur ulang bahan-bahan yang dapat digunakan kembali dan mengurangi
                ketergantungan kita pada bahan baku baru. Ini dapat membantu menjaga keseimbangan lingkungan dan mengurangi pemborosan sumber daya alam.
              </li>
            </ul>
            <p className="font-bold mt-2">Langkah-langkah yang dapat diambil oleh masyarakat:</p>
            <ul className="list-decimal list-inside">
              <li>
                Pengurangan Sampah: Masyarakat dapat mengurangi jumlah sampah yang dihasilkan dengan mengadopsi pola konsumsi yang bijak. Menggunakan kantong belanja kain, membeli produk dengan kemasan minimal, dan menghindari produk sekali
                pakai adalah beberapa contoh langkah-langkah yang dapat diambil untuk mengurangi sampah.
              </li>
              <li>
                Pengelolaan Sampah di Rumah: Masyarakat dapat melakukan pemisahan sampah di rumah dengan memilahnya menjadi kategori yang berbeda, seperti sampah organik dan non-organik, atau sampah kering dan basah. Ini akan memudahkan
                proses pengolahan dan daur ulang sampah di kemudian hari.
              </li>
              <li>
                Penggunaan Kembali dan Daur Ulang: Masyarakat dapat melakukan praktik penggunaan kembali dan daur ulang untuk mengurangi volume sampah yang dibuang. Barang-barang yang masih bisa digunakan dapat disumbangkan atau dijual,
                sedangkan bahan-bahan yang dapat didaur ulang seperti kertas, plastik, dan logam harus dipisahkan dan diolah sesuai dengan prosedur yang tepat.
              </li>
            </ul>
            <p className="font-bold mt-2">Langkah-langkah yang dapat diambil oleh pemerintah:</p>
            <ul className="list-decimal list-inside">
              <li>
                Pendidikan dan Kesadaran Masyarakat: Pemerintah dapat memainkan peran penting dalam meningkatkan kesadaran masyarakat tentang pentingnya membuang dan mengelola sampah dengan benar. Kampanye pendidikan dan program kesadaran
                lingkungan dapat diluncurkan untuk mengedukasi masyarakat tentang praktik-praktik yang baik dalam pengelolaan sampah.
              </li>
              <li>
                Infrastruktur Pengelolaan Sampah: Pemerintah perlu mengembangkan infrastruktur yang memadai untuk pengelolaan sampah. Ini termasuk pembangunan tempat pembuangan akhir yang aman dan sistem pengolahan sampah yang efisien.
                Pemerintah juga dapat mendorong penggunaan teknologi ramah lingkungan untuk mengolah sampah, seperti metode daur ulang, kompos, dan pembangkit listrik dari limbah.
              </li>
              <li>
                Peraturan dan Kebijakan: Pemerintah dapat mengimplementasikan peraturan dan kebijakan yang mendukungpengelolaan sampah yang baik. Hal ini dapat mencakup pembatasan penggunaan plastik sekali pakai, pengenaan pajak atau denda
                terhadap pelanggaran pembuangan sampah ilegal, dan insentif bagi perusahaan yang berinvestasi dalam teknologi pengelolaan sampah yang ramah lingkungan.
              </li>
              <li>
                Kolaborasi dengan Pihak Swasta: Pemerintah dapat bekerja sama dengan sektor swasta dalam mengelola sampah. Kemitraan dengan perusahaan-perusahaan yang memiliki keahlian dan sumber daya dalam pengelolaan sampah dapat membantu
                meningkatkan efisiensi dan efektivitas program pengelolaan sampah yang dilakukan pemerintah.
              </li>
              <li>
                Monitoring dan Evaluasi: Pemerintah perlu melakukan pemantauan dan evaluasi terhadap program pengelolaan sampah yang telah dilaksanakan. Hal ini akan membantu mengidentifikasi keberhasilan dan kelemahan dari program-program
                tersebut, serta memberikan dasar untuk melakukan perbaikan dan peningkatan di masa depan.
              </li>
              <p className="mt-5">
                Kepedulian dalam membuang dan mengelola sampah merupakan tanggung jawab bersama antara masyarakat dan pemerintah. Dengan adanya kesadaran dan tindakan yang konsisten dari semua pihak, kita dapat menciptakan lingkungan yang
                lebih bersih, sehat, dan berkelanjutan. Selain itu, upaya ini juga akan memberikan manfaat jangka panjang bagi generasi mendatang.
              </p>
            </ul>
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
  );
};

export default NewsDetail;
