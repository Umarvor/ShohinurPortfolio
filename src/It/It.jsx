import React from 'react';
import './It.css';

// Global va O'zbekiston uchun rasmlar
const images = {
  global: "https://www.flaticon.com/free-icon/ai_12133548",
  uzbekistan: "https://via.placeholder.com/600x400?text=Uzbekistan+IT+Industry"
};

const updates = [
  {
    title: "Dunyo bo'yicha IT sohasidagi o'zgarishlar",
    image: images.global,
    details: [
      "Yapay intellekt va mashina o'qitish: AI va mashina o'qitish texnologiyalari ko'plab sohalarda, jumladan, avtomatlashtirish va tahlilda keng qo'llanilmoqda.",
      "Blokcheyn texnologiyalari: Blokcheyn tizimlari moliya, sog'liqni saqlash va ta'minot zanjirlarida xavfsizlik va shaffoflikni oshirmoqda.",
      "Kibertahdidlarga qarshi kurash: Yangilangan xavfsizlik texnologiyalari va strategiyalari kiberhujumlar va ma'lumotlarni himoya qilish uchun ishlab chiqilmoqda.",
      "Bulutli hisoblash: Bulutli xizmatlar va infratuzilmalarga talab ortib bormoqda, ular bizneslar va startaplar uchun arzon va moslashuvchan yechimlar taqdim etadi."
    ]
  },
  {
    title: "O'zbekistonda IT sohasidagi o'zgarishlar",
    image: images.uzbekistan,
    details: [
      "Startap ekotizimi: O'zbekistonda startaplar soni ortib bormoqda va innovatsion loyihalar ko'paymoqda.",
      "Raqamli ta'lim: IT va dasturlash bo'yicha ta'lim dasturlari kengaymoqda, xususan, kodlash va dasturlash kurslari taqdim etilmoqda.",
      "IT infratuzilmasi: Internet tezligi va kengligi, shuningdek, axborot texnologiyalari infratuzilmasi yaxshilanmoqda.",
      "Raqamli xizmatlar: E-hukumat, moliya va savdo sohalarida raqamli xizmatlar va platformalar rivojlanmoqda."
    ]
  }
];

function ITUpdates() {
  return (
    <div id='portfolio-sectionn' className="updates-container">
      {updates.map((update, index) => (
        <div key={index} className="update-item">
          
          <h2 className="update-title">{update.title}</h2>
          <ul className="update-details">
            {update.details.map((detail, idx) => (
              <li key={idx} className="update-detail">{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ITUpdates;
