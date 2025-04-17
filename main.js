const quotes = [
  {
    text: "Kesuksesan tidak datang kepada orang yang menunggu, tetapi kepada mereka yang bekerja keras mencapainya.",
    author: "Adi Setiya",
  },
  {
    text: "Jangan takut gagal, karena kegagalan adalah bagian dari kesuksesan.",
    author: "B.J. Habibie",
  },
  {
    text: "Belajar dari masa lalu, hidup di masa kini, dan rencanakan masa depan.",
    author: "Anonim",
  },
  {
    text: "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
    author: "Anonim",
  },
  {
    text: "Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
    author: "Tim Notke",
  },
  {
    text: "Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
    author: "Vivian Greene",
  },
  {
    text: "Orang sukses adalah mereka yang terus mencoba walau pernah gagal.",
    author: "Soekarno",
  },
  {
    text: "Impian besar membutuhkan keberanian besar untuk mewujudkannya.",
    author: "Mario Teguh",
  },
  {
    text: "Sukses adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
    author: "Colin Powell",
  },
  {
    text: "Setiap langkah kecil hari ini adalah pondasi untuk kesuksesan esok.",
    author: "Anonim",
  },
  {
    text: "Waktu adalah aset paling berharga yang kita miliki.",
    author: "Anonim",
  },
  {
    text: "Kamu tidak perlu menjadi hebat untuk memulai, tapi kamu harus memulai untuk menjadi hebat.",
    author: "Zig Ziglar",
  },
  {
    text: "Keberhasilan sejati datang ketika kita tidak menyerah.",
    author: "Anonim",
  },
  {
    text: "Hidup adalah pilihan. Pilihlah yang terbaik dan perjuangkan itu.",
    author: "Anonim",
  },
  {
    text: "Jangan biarkan ketakutan menghentikanmu dari mencoba.",
    author: "Anonim",
  },
  { text: "Berbuat baik tidak pernah sia-sia.", author: "Anonim" },
  {
    text: "Kunci dari perubahan adalah fokus pada membangun yang baru, bukan melawan yang lama.",
    author: "Socrates",
  },
  {
    text: "Percaya diri adalah langkah pertama menuju kesuksesan.",
    author: "Anonim",
  },
  {
    text: "Hidup bukan hanya tentang menunggu, tapi juga tentang menciptakan kesempatan.",
    author: "Anonim",
  },
  {
    text: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.",
    author: "Steve Jobs",
  },
  {
    text: "Tidak ada jalan pintas menuju tempat yang layak dituju.",
    author: "Beverly Sills",
  },
  {
    text: "Bangun lebih pagi, kerja lebih keras, hasil lebih nyata.",
    author: "Anonim",
  },
  {
    text: "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    author: "Henry Ford",
  },
  {
    text: "Keberanian adalah ketika kamu tetap melangkah walaupun takut.",
    author: "Nelson Mandela",
  },
  {
    text: "Jangan tunda apa yang bisa kamu lakukan hari ini.",
    author: "Anonim",
  },
  {
    text: "Bermimpilah besar dan jangan takut gagal.",
    author: "Norman Vaughan",
  },
  {
    text: "Jangan lelah berbuat baik, karena pada waktunya kamu akan menuai hasilnya.",
    author: "Galatia 6:9",
  },
  {
    text: "Kesuksesan adalah hasil dari keputusan yang tepat.",
    author: "Anonim",
  },
  { text: "Hargai proses, karena di sanalah kamu tumbuh.", author: "Anonim" },
  {
    text: "Setiap orang punya waktu yang sama. Gunakan dengan bijak.",
    author: "Anonim",
  },
  {
    text: "Kita tidak bisa mengubah arah angin, tapi kita bisa menyesuaikan layar.",
    author: "Anonim",
  },
  { text: "Kesederhanaan adalah kunci dari kebahagiaan.", author: "Anonim" },
  {
    text: "Semua mimpi bisa menjadi kenyataan jika kita memiliki keberanian untuk mengejarnya.",
    author: "Walt Disney",
  },
  {
    text: "Ketika satu pintu tertutup, pintu lain akan terbuka.",
    author: "Alexander Graham Bell",
  },
  {
    text: "Bersyukurlah atas apa yang kamu miliki, dan kamu akan memiliki lebih.",
    author: "Oprah Winfrey",
  },
  { text: "Berhenti menunda, mulailah sekarang juga!", author: "Anonim" },
  {
    text: "Setiap hari adalah kesempatan untuk belajar hal baru.",
    author: "Anonim",
  },
  { text: "Kamu lebih kuat dari yang kamu pikirkan.", author: "Anonim" },
  {
    text: "Jangan takut menjadi berbeda, takutlah jika kamu sama seperti orang lain.",
    author: "Anonim",
  },
  {
    text: "Semangat adalah bahan bakar utama menuju keberhasilan.",
    author: "Anonim",
  },
  { text: "Menyerah adalah satu-satunya kegagalan sejati.", author: "Anonim" },
  {
    text: "Berani mencoba adalah langkah awal menuju kesuksesan.",
    author: "Anonim",
  },
  {
    text: "Tindakan kecil yang dilakukan terus-menerus lebih baik daripada rencana besar yang tak pernah dilaksanakan.",
    author: "Anonim",
  },
  {
    text: "Sukses adalah perjalanan, bukan tujuan akhir.",
    author: "Zig Ziglar",
  },
  {
    text: "Bekerjalah seakan kamu tidak butuh uang. Cintailah seakan kamu tak pernah disakiti.",
    author: "Satchel Paige",
  },
  { text: "Setiap masalah pasti membawa pelajaran.", author: "Anonim" },
  { text: "Pikiran positif menciptakan kehidupan positif.", author: "Anonim" },
  {
    text: "Jangan bandingkan dirimu dengan orang lain, bandingkan dengan dirimu yang kemarin.",
    author: "Anonim",
  },
  { text: "Kamu bisa, selama kamu percaya.", author: "Anonim" },
  {
    text: "Diam bukan berarti lemah, kadang itu adalah cara terbaik untuk melihat segalanya dengan jelas.",
    author: "Anonim",
  },
  {
    text: "Ketika kamu menyerah, ingat alasan mengapa kamu memulai.",
    author: "Anonim",
  },
  {
    text: "Orang bijak belajar dari kegagalan, bukan menyerah karena kegagalan.",
    author: "Anonim",
  },
  {
    text: "Hidup adalah perjalanan panjang, bukan perlombaan singkat.",
    author: "Anonim",
  },
  {
    text: "Percayalah, masa sulit tidak akan selamanya tinggal.",
    author: "Anonim",
  },
  {
    text: "Bakat membawamu ke puncak, tapi karakter yang menjagamu tetap di sana.",
    author: "John Wooden",
  },
  { text: "Berhenti mengeluh, mulailah bersyukur.", author: "Anonim" },
  {
    text: "Lakukan yang terbaik hari ini, agar tidak menyesal esok hari.",
    author: "Anonim",
  },
  { text: "Kebahagiaan datang dari hati yang ikhlas.", author: "Anonim" },
  {
    text: "Jangan biarkan komentar orang lain menentukan siapa kamu.",
    author: "Anonim",
  },
  {
    text: "Hidup ini terlalu singkat untuk disia-siakan pada hal yang tidak penting.",
    author: "Anonim",
  },
  { text: "Kegigihan akan selalu mengalahkan rasa takut.", author: "Anonim" },
  {
    text: "Jangan hanya menunggu motivasi, tapi jadilah disiplin.",
    author: "Anonim",
  },
  {
    text: "Waktu yang tepat tak pernah datang, kamulah yang membuatnya tepat.",
    author: "Anonim",
  },
  { text: "Mulai dulu, sempurna nanti.", author: "Anonim" },
  {
    text: "Seseorang yang kuat adalah dia yang tetap tersenyum dalam kesulitan.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan bukanlah akhir, kegagalan bukanlah kehancuran.",
    author: "Winston Churchill",
  },
  {
    text: "Tidak semua orang akan mengerti jalanmu, itu bukan masalah.",
    author: "Anonim",
  },
  {
    text: "Semakin kamu bersyukur, semakin banyak yang bisa kamu nikmati.",
    author: "Anonim",
  },
  {
    text: "Ketika kamu jatuh, bangun lagi. Itulah keberanian.",
    author: "Anonim",
  },
  {
    text: "Setiap orang punya waktu dan jalannya masing-masing.",
    author: "Anonim",
  },
  {
    text: "Jadilah versi terbaik dari dirimu, bukan salinan dari orang lain.",
    author: "Anonim",
  },
  {
    text: "Mereka yang sabar akan mendapatkan hasil terbaik.",
    author: "Anonim",
  },
  {
    text: "Tujuan hidup bukanlah menjadi sempurna, tapi menjadi nyata.",
    author: "Anonim",
  },
  {
    text: "Kegagalan bukan akhir dari segalanya, tapi awal dari pelajaran berharga.",
    author: "Anonim",
  },
  { text: "Kamu tidak sendirian, kamu hanya sedang diuji.", author: "Anonim" },
  { text: "Berani melangkah berarti siap tumbuh.", author: "Anonim" },
  {
    text: "Jangan takut kalah, takutlah jika tidak pernah mencoba.",
    author: "Anonim",
  },
  { text: "Jalan menuju sukses tidak pernah lurus.", author: "Anonim" },
  { text: "Hargai proses, bukan hanya hasil.", author: "Anonim" },
  {
    text: "Jika kamu ingin dihargai, mulailah menghargai diri sendiri.",
    author: "Anonim",
  },
  {
    text: "Jangan berhenti karena lelah, berhentilah karena selesai.",
    author: "Anonim",
  },
  { text: "Masalah adalah batu loncatan, bukan penghalang.", author: "Anonim" },
  { text: "Keikhlasan adalah kunci hati yang tenang.", author: "Anonim" },
  { text: "Bersyukur akan selalu membuatmu merasa cukup.", author: "Anonim" },
  { text: "Mimpimu valid, meski orang lain meremehkannya.", author: "Anonim" },
  { text: "Buktikan dengan aksi, bukan hanya kata-kata.", author: "Anonim" },
  {
    text: "Tertawalah walau hari berat, itu tandanya kamu kuat.",
    author: "Anonim",
  },
  {
    text: "Ketika satu pintu tertutup, Tuhan sudah siapkan pintu yang lebih baik.",
    author: "Anonim",
  },
  { text: "Belajarlah dari alam: diam, tapi kuat.", author: "Anonim" },
  {
    text: "Jangan hanya ingin cepat sukses, tapi mau sabar dalam proses.",
    author: "Anonim",
  },
  {
    text: "Rasa takut hanyalah bayangan. Langkahi, dan kamu akan menang.",
    author: "Anonim",
  },
  {
    text: "Terus bergerak, walau perlahan. Diam bukan pilihan.",
    author: "Anonim",
  },
  {
    text: "Yang luar biasa butuh waktu. Sabar dan terus melangkah.",
    author: "Anonim",
  },
  { text: "Berani gagal adalah tanda kamu berani sukses.", author: "Anonim" },
  {
    text: "Kebaikan kecil jauh lebih baik daripada niat besar yang tak dilakukan.",
    author: "Anonim",
  },
  {
    text: "Satu tindakan nyata lebih baik dari seribu niat baik.",
    author: "Anonim",
  },
  {
    text: "Jangan habiskan hidupmu untuk membahagiakan semua orang.",
    author: "Anonim",
  },
  {
    text: "Mimpi itu bukan untuk ditunda, tapi untuk diperjuangkan.",
    author: "Anonim",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("buttonQuote");

function generateQuotes() {
  const random = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[random];

  quote.classList.remove("fade-in");
  author.classList.remove("fade-in");

  setTimeout(() => {
    quote.textContent = `"${newQuote.text}"`;
    author.textContent = `-${newQuote.author}`;
    quote.classList.add("fade-in");
    author.classList.add("fade-in");
  }, 200);
}

button.addEventListener("click", generateQuotes);

generateQuotes();

function copyText(){
  const text = quote.innerText
  navigator.clipboard.writeText(text)

  .then(() => {
    alert("Kutipan berhasil disalin!");
  })
  .catch(err => {
    alert("Gagal menyalin kutipan.");
    console.error(err);
  });
}

document.getElementById("buttonSalin").addEventListener('click', () => {
  copyText()
})