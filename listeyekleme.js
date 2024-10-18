// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım. 
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.


let isimSayisi = prompt('Kaç adet isim eklemek istersin?');
let isimListesi = [];

for (let i = 0; i < isimSayisi; i++) {
  let isim = prompt('Bir isim gir.');
  isimListesi.push(isim); 
}
console.log("İsim listesi-> ", isimListesi);

let arananIsim = prompt('Hangi ismi aramak istiyorsunuz?');
let isimAdedi = 0;
for (let i = 0; i < isimListesi.length; i++) {
  if (isimListesi[i] === arananIsim) {
    isimAdedi++;
  }
}

if (isimAdedi > 0) { // burası için araştırma yaparak kodun anlatmak istediğini kavrayarak yazdım. çok zorlandım ancak
  // sonuç olarak kavradım.
  console.log(`${arananIsim} ismi listenizde ${isimAdedi} adet bulundu.`);
} else {
  console.log(`${arananIsim} ismi listenizde bulunmamaktadır.`);
}
