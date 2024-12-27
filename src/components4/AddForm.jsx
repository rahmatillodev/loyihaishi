import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase'; // Firebase konfiguratsiyasi
import { RiNumber0 } from "react-icons/ri";
const AddForm = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState(''); // O'zgartirildi

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Date.now(); // Unikal ID yaratish

    db.collection("users").doc().set({
      name:name,
      date: birthDate, // Nomi moslashtirildi
    })
      .then(() => {
        alert('Ma\'lumot muvaffaqiyatli qo\'shildi!');
      })
      .catch((error) => {
        alert(`Xatolik yuz berdi: ${error.message}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ism:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Tug'ilgan sana:
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Qo'shish</button>
    </form>
  );
};

export default AddForm;
