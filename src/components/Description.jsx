import Button from '../layout/Button';

const Description = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className="text-center text-2xl font-bold leading-loose">
          Mengapa Kita Harus Menjaga Kebersihan
        </h1>
        <p className="text-center text-xl leading-loose">
          Mencegah pencemaran limbah bukan sekedar pilihan; itu suatu keharusan.
          Dengan meminimalkan polusi, kita melindungi keseimbangan ekosistem,
          memastikan udara dan air lebih bersih, dan berupaya mewujudkan dunia di
          mana alam tumbuh subur bersama kita.
        </p>

        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-36 max-w-[600px] items-center  py-40 px-4 md:px-0">
          <img
            src="https://ik.imagekit.io/irfantonov111/Dampak%20logo.png?updatedAt=1700499551044"
            className="w-[650px] mx-auto pl-20"
          />

          <div>
            <h1 className="py-2 text-3xl font-semibold text-center leading-loose">
              Memahami Dampak Polusi Limbah
            </h1>
            <p className="py-2 text-xl leading-loose">
              Meningkatkan kesadaran mengenai dampak pencemaran lingkungan adalah
              langkah pertama menuju planet yang lebih bersih dan sehat. Dengan
              mempelajari bagaimana polusi mempengaruhi ekosistem, kesehatan manusia,
              dan masa depan kita bersama, kita memberdayakan diri kita sendiri untuk
              membuat pilihan yang tepat yang mendorong perubahan positif.
            </p>
            <div>
              <Button type="daftar" title="Dampak" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-36 max-w-[600px] items-center px-4 md:px-0">
        <div className="md:pl-20">
          <h1 className="py-2 text-3xl font-semibold text-center leading-loose">
            Mengubah Polusi Limbah menjadi Solusi Berkelanjutan
          </h1>
          <p className="py-2 text-xl leading-loose">
            Temukan solusi inovatif untuk mengatasi masalah mendesak polusi
            limbah dan bergabunglah dalam gerakan global menuju masa depan
            yang lebih bersih dan ramah lingkungan. Bersama-sama, kita dapat
            mengurangi sampah, mendaur ulang secara bertanggung jawab, dan
            mendorong praktik berkelanjutan untuk mengurangi dampak buruk
            pencemaran sampah terhadap lingkungan kita.
          </p>
          <div>
            <Button type="daftar" title="Solusi" />
          </div>
        </div>
        <img
          src="https://i.imgur.com/0p2aRjX.png"
          className="w-[650px] pr-10"
        />
      </div>
    </div>
  );
};

export default Description;
