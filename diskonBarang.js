export const diskonBarang = (qty, total) => {
  const diskon = 1 / 100; // -> 0.01
  let totalKeselurahan = 0;
  if (qty > 10) {
    const potonganHarga = total * diskon; // -> 2000
    totalKeselurahan = total - potonganHarga;
    console.log(
      `Yeay, kamu mendapatkan diskon sebesar : ${potonganHarga} | total yang perlu kamu bayar : ${totalKeselurahan}`
    );
  } else {
    console.log(
      "Kamu tidak mendapatkan diskon. Total yang perlu kamu bayar " +
        totalKeselurahan
    );
  }
};
