import React from "react";
import { ContactUs } from "../../components/ContactUs";
import Footer from "../../layout/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="container p-4 m-auto">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5 my-5">
            <h1 className="text-body-emphasis">Tentang Kami</h1>
            <p className="col-lg-8 mx-auto fs-5">
              GreenWorldWare adalah sebuah website yang berisikan tentang artikel, video edukasi, kuis seputar dampak pencemaran lingkungan dan tempat bagi para pengguna website berkontribusi untuk membagikan kegiatannya tentang peduli
              lingkungan seperti langkah-langkah apa yang dapat diambil oleh masyarakat dan pemerintah untuk mengatasi masalah sampah dan lain-lain.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 py-0">
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/hero-aboutus.png?updatedAt=1697193730049" alt="Image" className="w-100" />
          </div>
          <div className="col-sm-6">
            <div className="">
              <h2 className="text-lg py-3">Visi</h2>
              <p className="fs-5">
                Visi kami adalah menciptakan dunia di mana lingkungan alam dapat berkembang dengan seimbang, tanpa terpengaruh oleh pencemaran dan kerusakan yang tidak perlu. Kami ingin melihat generasi masa depan menikmati alam yang indah,
                udara bersih, air yang sehat, dan lingkungan yang lestari.
              </p>
            </div>
            <div className="">
              <h2 className="text-lg py-3">Misi</h2>
              <ol className="fs-5">
                <li>
                  Pendidikan dan Kesadaran: Kami berupaya meningkatkan kesadaran masyarakat tentang pentingnya menjaga kebersihan lingkungan. Kami menyelenggarakan seminar, lokakarya, dan kampanye pendidikan untuk memberikan pengetahuan dan
                  keterampilan yang diperlukan untuk bertindak secara bertanggung jawab terhadap lingkungan.
                </li>
                <li>
                  Aksi Lingkungan: Kami tidak hanya berbicara, kami juga bertindak. Kami secara aktif terlibat dalam proyek-proyek pembersihan dan pelestarian lingkungan. Mulai dari membersihkan pantai hingga penanaman pohon, kami bekerja
                  bersama komunitas lokal untuk menciptakan perubahan nyata.
                </li>
                <li>
                  Inovasi Berkelanjutan: Kami selalu mencari solusi inovatif untuk permasalahan lingkungan. Dengan bekerja sama dengan ahli lingkungan dan teknologi, kami berusaha mengembangkan produk dan layanan yang ramah lingkungan.
                </li>
                <li>
                  Kemitraan dan Kolaborasi: Kami percaya bahwa perubahan besar hanya bisa dicapai melalui kerja sama. Kami bekerja sama dengan organisasi lingkungan, pemerintah, bisnis, dan masyarakat sipil untuk mencapai tujuan bersama.
                </li>
                <li>
                  Keterbukaan dan Akuntabilitas: Kami bertanggung jawab atas tindakan kami dan selalu berusaha untuk tetap terbuka terhadap umpan balik dari masyarakat. Kami ingin memastikan bahwa setiap tindakan kami berkontribusi pada
                  keberlanjutan dan kebersihan lingkungan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-5 text-center mt-5">
        <div className="row py-lg-5">
          <div className="col mx-auto">
            <h2 className="py-3 text-lg-center">Temui Tim</h2>
          </div>
        </div>
        <div className="row justify-content-center gap-3">
          <div className="card shadow-lg" style={{ width: "23rem" }}>
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-medium fs-4">Hamzah Raihan Ikhsanul Fikri</h3>
              <p className="card-text">Fullstack Web Development</p>
            </div>
          </div>
          <div className="card shadow-lg" style={{ width: "23rem" }}>
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-medium fs-4">Irfan Hananto</h3>
              <p className="card-text foo">Fullstack Web Development</p>
            </div>
          </div>
          <div className="card shadow-lg" style={{ width: "23rem" }}>
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/male.png?updatedAt=1697361198103" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-medium fs-4">Alzi Rahmana Putra</h3>
              <p className="card-text">Fullstack Web Development</p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
