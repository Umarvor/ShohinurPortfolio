import React from 'react';
import './Ozim.css'; // CSS faylni import qilish
import Logo from '../img/image.png'
function Profile() {
  return (
    <div id='portfolio-sectionnn' className="profile-container">
      <br />
      <div className="profile-info">
        <h1>O'zim haqimda!</h1>
        <p>
          Salom mening ismim Shohinur familyam Shahriyorov 26-dekabr 2008-yilda tug'ulganman. Yashash manzilim Qashqadaryo viloyati kitob tumani Varganza MFY. Hozirda tumandagi 96-maktabning metematika-fizika fanlarini chuqurlashtirib o'tadigan sinfga o'qiyman. Yoshligimdan dasturlash va kiberxafsizkikka qiziqqanim sababli  IT yo'nalishida  o'qimoqchiman. O'tgan 2023 yil yoz oyida kitob tumandagi IQTIDOR IT maktabigqa front-end kursiga o'qishga bordim va u yerni muvofiqiyatli tamomlab "Junior dasturchi sertifikatiga ega bo'dim" hozida ber nechta saytlar dasturchisiman.Kelajakdagi maqsadim Ozbekiston respublikasini rivojlanishiga hissa qo'shish va yetuk dasturchi bo'lish va eng asosisi "Shoh Group " IT kompaniyasiga asos solishdir!
        </p>
      </div>
      <div className="profile-image">
        <img src={Logo} alt="Profile" />
      </div>
    </div>
  );
}

export default Profile;
