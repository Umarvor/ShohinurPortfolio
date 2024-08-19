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
          Salom mening ismim Shahriyorov Shohinur, 26-12-2008 yilda Qashqadaryo viloyati kitob tumani Varganza MFYga  tug'ilganman bolaligimdan dasturlashga qiziqishim sababli 2023-yil yoz oyida IQtidor IT Akademiyasiga keldim va u yerda 1-yil Front-end kursiga o'qib va muvafaqqiyatli tomomlab hozirda o'zim rivojlanishim uchun bir nechta saytlarni yozganman. Men veb-texnologiyalar bilan ishlashni yaxshi ko'raman
          va yangi loyihalarni amalga oshirishga intilaman . Yana qiziqarli loyiha va
          tajribalar uchun doimo izlanishda bo'laman.
        </p>
      </div>
      <div className="profile-image">
        <img src={Logo} alt="Profile" />
      </div>
    </div>
  );
}

export default Profile;
