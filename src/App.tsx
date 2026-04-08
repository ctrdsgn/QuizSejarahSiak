import React, { useState, useEffect } from 'react';
import { BookOpen, User, GraduationCap, CheckCircle2, XCircle, Download, ChevronRight, ChevronLeft, Award, Send } from 'lucide-react';

// --- DATA SOAL (LENGKAP 60 SOAL) ---
const questionsData = [
  // BAGIAN I: SOAL KELAS 10
  // A. PENGANTAR ILMU SEJARAH
  {
    id: 1, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Sejarawan R. Moh. Ali mendefinisikan sejarah sebagai ilmu yang menyelidiki perkembangan mengenai peristiwa dan kejadian di masa lampau. Berdasarkan pengertian tersebut, apa ciri utama sejarah sebagai ilmu?",
    options: [
      "Disusun berdasarkan kesaksian lisan dari para pelaku sejarah",
      "Mengkaji peristiwa masa lalu secara sistematis dan berdasarkan bukti",
      "Menyelidiki perubahan dan kesinambungan tradisi dalam masyarakat",
      "Mempelajari semua peristiwa yang pernah terjadi di masa lampau",
      "Menyusun narasi tentang kejadian di masa lalu berdasarkan imajinasi"
    ],
    answer: 1
  },
  {
    id: 2, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Konsep sebab-akibat (causaal) dalam ilmu sejarah mengacu pada...",
    options: [
      "Hubungan antara peristiwa masa lalu dengan kondisi masa kini",
      "Keterkaitan antara suatu peristiwa dengan akibat yang ditimbulkannya",
      "Proses perubahan yang terjadi secara bertahap dalam masyarakat",
      "Kesinambungan nilai-nilai tradisional dari generasi ke generasi",
      "Perbedaan perkembangan sejarah antar wilayah dan zaman"
    ],
    answer: 1
  },
  {
    id: 3, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Manakah yang termasuk sumber sejarah primer?",
    options: [
      "Buku teks sejarah yang ditulis oleh sejarawan modern",
      "Prasasti yang dibuat pada masa pemerintahan Raja Airlangga",
      "Artikel jurnal ilmiah tentang kerajaan-kerajaan Hindu-Buddha",
      "Dokumenter televisi tentang perjuangan kemerdekaan Indonesia",
      "Ensiklopedia sejarah Indonesia yang diterbitkan tahun 2020"
    ],
    answer: 1
  },
  {
    id: 4, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "multiple",
    text: "Seorang peneliti sedang mengkaji tentang kehidupan masyarakat Jawa pada abad ke-19. Manakah sumber berikut yang dapat digunakan sebagai sumber primer untuk penelitian ini? (Pilih lebih dari satu)",
    options: [
      "Babad Tanah Jawi yang ditulis pada abad ke-19",
      "Surat-surat pribadi tokoh pergerakan nasional",
      "Buku sejarah Indonesia karangan sejarawan modern",
      "Foto-foto dokumentasi masa kolonial Belanda",
      "Tesis akademik tentang sejarah sosial Jawa"
    ],
    answers: [0, 1, 3]
  },
  {
    id: 5, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Peristiwa pembunuhan para jenderal pada 30 September 1965 mengakibatkan perubahan besar dalam politik Indonesia, termasuk munculnya Orde Baru. Hubungan antara kedua peristiwa ini menggambarkan konsep...",
    options: [
      "Perubahan historis",
      "Keberlanjutan sejarah",
      "Sebab-akibat (causaal)",
      "Periodisasi sejarah",
      "Kronologi sejarah"
    ],
    answer: 2
  },
  {
    id: 6, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Penggunaan istilah 'budaya gotong royong' dalam kehidupan masyarakat Indonesia modern merupakan contoh...",
    options: [
      "Perubahan radikal dalam sistem sosial",
      "Keberlanjutan nilai-nilai tradisional",
      "Pengaruh globalisasi terhadap budaya lokal",
      "Konflik antara budaya modern dan tradisional",
      "Terputusnya hubungan dengan masa lalu"
    ],
    answer: 1
  },
  {
    id: 7, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "tf",
    text: "Dalam menyusun karya tulis ilmiah tentang sejarah, seorang penulis harus memahami perbedaan antara sumber primer dan sekunder. Tentukan Tepat atau Tidak Tepat untuk pernyataan berikut!",
    statements: [
      "Sumber primer adalah sumber yang dibuat pada masa peristiwa terjadi atau oleh saksi mata",
      "Sumber sekunder selalu lebih akurat daripada sumber primer",
      "Buku pelajaran sejarah termasuk sumber sekunder",
      "Artefak peninggalan masa lalu termasuk sumber primer"
    ],
    answers: ["Tepat", "Tidak Tepat", "Tepat", "Tepat"]
  },
  {
    id: 8, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Periodisasi sejarah Indonesia dari masa kerajaan Hindu-Buddha, Islam, penjajahan, hingga era reformasi menggambarkan konsep...",
    options: [
      "Keberlanjutan sejarah",
      "Perubahan dan perkembangan historis",
      "Sebab-akibat peristiwa",
      "Kronologi absolut",
      "Historiografi nasional"
    ],
    answer: 1
  },
  {
    id: 9, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Pemikiran Bung Karno tentang 'Marhaenisme' yang menggabungkan unsur sosialisme, nasionalisme, dan agama masih relevan dalam konteks politik Indonesia modern. Hal ini menunjukkan bahwa...",
    options: [
      "Sejarah tidak pernah berubah",
      "Nilai-nilai historis dapat memberikan pembelajaran untuk masa kini",
      "Indonesia tidak mengalami perkembangan politik",
      "Sistem pemerintahan Indonesia tetap sama sejak kemerdekaan",
      "Tokoh sejarah tidak memiliki pengaruh terhadap generasi muda"
    ],
    answer: 1
  },
  {
    id: 10, section: "Kelas 10 - Pengantar Ilmu Sejarah", type: "single",
    text: "Seorang arkeolog menemukan sebuah candi yang terkubur di bawah tanah. Untuk menentukan kapan candi tersebut dibangun, arkeolog tersebut dapat menggunakan metode...",
    options: [
      "Analisis teks sejarah kontemporer",
      "Penanggalan radiokarbon (C-14)",
      "Wawancara dengan masyarakat setempat",
      "Studi literatur dari buku-buku sejarah",
      "Perbandingan dengan bangunan modern"
    ],
    answer: 1
  },

  // B. PERIODE KERAJAAN HINDU-BUDDHA DAN ISLAM
  {
    id: 11, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Kerajaan Sriwijaya yang berpusat di Palembang merupakan kerajaan maritim terkuat pada masanya. Keberhasilan Sriwijaya dalam menguasai perdagangan di Selat Malaka disebabkan oleh...",
    options: [
      "Kerjasama dengan kerajaan-kerajaan di India",
      "Pengendalian jalur perdagangan dan kekuatan angkatan laut",
      "Penyebaran agama Buddha ke seluruh Nusantara",
      "Pembangunan candi-candi megah sebagai daya tarik wisata",
      "Aliansi dengan kerajaan Majapahit"
    ],
    answer: 1
  },
  {
    id: 12, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Candi Borobudur yang dibangun oleh Raja Samaratungga dari dinasti Syailendra merupakan peninggalan agama...",
    options: [
      "Hindu Siwa",
      "Hindu Wisnu",
      "Buddha Mahayana",
      "Buddha Hinayana",
      "Agama Jawa Kuno"
    ],
    answer: 2
  },
  {
    id: 13, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Kitab Negarakertagama yang ditulis oleh Mpu Prapanca pada masa pemerintahan Hayam Wuruk berisi tentang...",
    options: [
      "Ajaran agama Hindu yang dianut di Jawa",
      "Sejarah dan kebesaran kerajaan Majapahit",
      "Tata cara upacara keagamaan di candi",
      "Pedoman pemerintahan bagi raja-raja Jawa",
      "Kode etik bagi masyarakat Jawa"
    ],
    answer: 1
  },
  {
    id: 14, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "multiple",
    text: "Kerajaan-kerajaan Islam di Indonesia, seperti Demak, Aceh, Mataram Islam, dan Ternate-Tidore, telah memberikan pengaruh besar terhadap perkembangan budaya masyarakat. Manakah yang merupakan peninggalan budaya dari masa kerajaan Islam yang masih berlanjut di masa kini? (Pilih lebih dari satu)",
    options: [
      "Upacara Kasada",
      "Tradisi Sekaten",
      "Tradisi Tabuik",
      "Wayang Topeng Malangan",
      "Tari Reog Ponorogo"
    ],
    answers: [1, 2]
  },
  {
    id: 15, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Walisongo berperan penting dalam penyebaran Islam di Jawa. Salah satu strategi yang digunakan oleh Walisongo adalah...",
    options: [
      "Menghancurkan peninggalan kerajaan Hindu-Buddha",
      "Melakukan penaklukan militer terhadap kerajaan-kerajaan Jawa",
      "Menggunakan pendekatan kultural dan akulturasi dengan budaya lokal",
      "Memaksa rakyat untuk memeluk Islam dengan ancaman hukuman",
      "Mengisolasi diri dari masyarakat yang belum beragama Islam"
    ],
    answer: 2
  },
  {
    id: 16, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Kesultanan Aceh Darussalam di bawah Sultan Iskandar Muda mencapai puncak kejayaannya. Kesuksesan Aceh dalam menguasai perdagangan rempah-rempah di wilayah ini menunjukkan bahwa...",
    options: [
      "Kerajaan Islam hanya fokus pada penyebaran agama",
      "Islam tidak menghalangi perkembangan ekonomi dan politik",
      "Kerajaan Islam selalu bermusuhan dengan bangsa Eropa",
      "Sistem ekonomi kerajaan Islam tertutup dari perdagangan internasional",
      "Agama Islam menghambat perkembangan ilmu pengetahuan"
    ],
    answer: 1
  },
  {
    id: 17, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Teori Brahmana yang menjelaskan masuknya Hindu-Buddha ke Indonesia menyatakan bahwa...",
    options: [
      "Agama Hindu-Buddha dibawa oleh pedagang dari India",
      "Agama Hindu-Buddha dibawa oleh para Brahmana yang diutus langsung dari India",
      "Agama Hindu-Buddha tersebar melalui perkawinan antara raja-raja Indonesia dengan putri-putri dari India",
      "Agama Hindu-Buddha masuk secara alami melalui kontak budaya",
      "Agama Hindu-Buddha dibawa oleh tentara-tentara India"
    ],
    answer: 1
  },
  {
    id: 18, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "tf",
    text: "Masuknya Islam ke Nusantara membawa perubahan signifikan dalam berbagai aspek kehidupan masyarakat. Tentukan Tepat atau Tidak Tepat untuk pernyataan berikut!",
    statements: [
      "Islam masuk ke Indonesia melalui jalur perdagangan dan para pedagang Arab, Gujarat, dan Persia",
      "Masuknya Islam menyebabkan hilangnya seluruh budaya dan tradisi lokal",
      "Kerajaan Demak merupakan kerajaan Islam pertama di Jawa",
      "Masuknya Islam membawa perubahan dalam sistem hukum masyarakat"
    ],
    answers: ["Tepat", "Tidak Tepat", "Tepat", "Tepat"]
  },
  {
    id: 19, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Prasasti Canggal yang ditemukan di Jawa Tengah menyebutkan tentang...",
    options: [
      "Berdirinya kerajaan Majapahit",
      "Pemujaan terhadap dewa Siwa oleh Raja Sanjaya",
      "Penyebaran agama Buddha di Indonesia",
      "Hubungan dagang antara Indonesia dan India",
      "Pembangunan candi Borobudur"
    ],
    answer: 1
  },
  {
    id: 20, section: "Kelas 10 - Kerajaan Hindu-Buddha & Islam", type: "single",
    text: "Sunan Kalijaga, salah satu anggota Walisongo, dikenal dengan strategi dakwahnya yang menggunakan wayang sebagai media. Hal ini menunjukkan bahwa...",
    options: [
      "Islam menolak seluruh bentuk kesenian tradisional",
      "Penyebaran Islam dapat dilakukan dengan mengadaptasi budaya lokal",
      "Wayang adalah ajaran agama Islam",
      "Sunan Kalijaga tidak menguasai ilmu agama",
      "Islam hanya dapat diterima oleh kalangan bangsawan"
    ],
    answer: 1
  },

  // C. PERLAWANAN TERHADAP BANGSA EROPA
  {
    id: 21, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Motif utama bangsa Eropa datang ke Nusantara pada abad ke-16 adalah...",
    options: [
      "Menyebarkan agama Kristen ke seluruh dunia",
      "Mencari rempah-rempah dan kekayaan alam",
      "Membantu perkembangan peradaban di Nusantara",
      "Melakukan penelitian ilmiah tentang keanekaragaman hayati",
      "Membangun hubungan diplomatik dengan kerajaan-kerajaan lokal"
    ],
    answer: 1
  },
  {
    id: 22, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "VOC (Vereenigde Oostindische Compagnie) didirikan pada tahun 1602 dengan tujuan utama...",
    options: [
      "Menyebarluaskan agama Protestan di wilayah jajahan",
      "Memonopoli perdagangan rempah-rempah di Nusantara",
      "Membantu perkembangan ekonomi masyarakat pribumi",
      "Membangun infrastruktur di wilayah koloni",
      "Melakukan penelitian ilmiah di wilayah timur"
    ],
    answer: 1
  },
  {
    id: 23, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "tf",
    text: "Sultan Hasanuddin merupakan salah satu penguasa lokal yang tidak mau tunduk pada monopoli dagang VOC sehingga menimbulkan konflik bersenjata. Pada akhirnya VOC berhasil memaksa Sultan Hasanuddin untuk melakukan perundingan di Bongaya pada 18 November 1667. Pilihlah Tepat atau Tidak Tepat!",
    statements: [
      "VOC berusaha melemahkan Gowa karena posisinya yang strategis dalam perdagangan di kawasan timur kepulauan Nusantara",
      "Sultan Hasanuddin bersedia menandatangani Perjanjian Bongaya untuk memperoleh konsesi dagang yang lebih luas",
      "Perjanjian Bongaya memperkuat kedudukan VOC dalam monopoli perdagangan di Nusantara"
    ],
    answers: ["Tepat", "Tidak Tepat", "Tepat"]
  },
  {
    id: 24, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Perang Padri yang terjadi di Sumatera Barat pada awal abad ke-19 merupakan perlawanan terhadap...",
    options: [
      "Penjajahan Belanda dan adat istiadat yang bertentangan dengan Islam",
      "Penjajahan Inggris yang ingin menguasai tambang emas",
      "Serangan Portugis yang ingin menguasai perdagangan rempah-rempah",
      "Ekspansi kerajaan Aceh ke wilayah Minangkabau",
      "Penjajahan Jepang yang ingin menguasai sumber daya alam"
    ],
    answer: 0
  },
  {
    id: 25, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Pangeran Diponegoro memimpin Perang Jawa (1825-1830) melawan Belanda. Salah satu faktor pemicu perlawanan ini adalah...",
    options: [
      "Keinginan Pangeran Diponegoro untuk memperluas wilayah kekuasaannya",
      "Intervensi Belanda dalam urusan internal kerajaan Yogyakarta dan penghinaan terhadap keluarga kerajaan",
      "Persaingan dagang antara pedagang Belanda dan pedagang pribumi",
      "Penyebaran agama Kristen oleh misionaris Belanda",
      "Keinginan Pangeran Diponegoro untuk memperoleh kekayaan dari Belanda"
    ],
    answer: 1
  },
  {
    id: 26, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Politik Devide et Impera (pecah dan perintah) yang diterapkan oleh Belanda di Nusantara bertujuan untuk...",
    options: [
      "Membantu perkembangan kerajaan-kerajaan lokal",
      "Melemahkan kerajaan-kerajaan lokal dengan membuat mereka saling bermusuhan",
      "Menyebarluaskan agama dan budaya Eropa",
      "Membangun infrastruktur yang merata di seluruh wilayah",
      "Meningkatkan kesejahteraan rakyat pribumi"
    ],
    answer: 1
  },
  {
    id: 27, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Perang Aceh yang berlangsung dari tahun 1873 hingga 1904 merupakan perlawanan terpanjang dalam sejarah Indonesia. Perlawanan ini dipicu oleh...",
    options: [
      "Keinginan Belanda untuk menguasai sumber daya alam Aceh",
      "Penolakan rakyat Aceh terhadap penjajahan Belanda dengan semangat jihad",
      "Perselisihan antara kesultanan Aceh dengan kerajaan-kerajaan tetangga",
      "Keinginan Aceh untuk memperluas wilayah kekuasaannya",
      "Tekanan ekonomi dari pedagang asing"
    ],
    answer: 1
  },
  {
    id: 28, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "multiple",
    text: "Sistem tanam paksa yang diberlakukan oleh Belanda pada masa Gubernur Jenderal Van den Bosch menyebabkan berbagai dampak bagi masyarakat Indonesia. Manakah yang termasuk dampak negatif dari sistem tanam paksa? (Pilih lebih dari satu)",
    options: [
      "Masyarakat harus menyisihkan sebagian tanahnya untuk menanam tanaman ekspor",
      "Masyarakat mendapatkan upah yang sangat rendah",
      "Masyarakat kehilangan waktu untuk menggarap tanah sendiri",
      "Meningkatnya ekspor hasil pertanian Indonesia ke Eropa",
      "Masyarakat mengalami kemiskinan dan kelaparan"
    ],
    answers: [0, 1, 2, 4]
  },
  {
    id: 29, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Kongsi Dagang Inggris yang beroperasi di Indonesia sebelum kedatangan VOC dikenal dengan nama...",
    options: [
      "British East India Company",
      "Royal Dutch Company",
      "Portuguese Trading Company",
      "Spanish East India Company",
      "French Colonial Company"
    ],
    answer: 0
  },
  {
    id: 30, section: "Kelas 10 - Perlawanan Bangsa Eropa", type: "single",
    text: "Perlawanan rakyat Indonesia terhadap penjajahan sebelum abad ke-20 umumnya bersifat...",
    options: [
      "Terorganisir dengan baik dan memiliki persenjataan modern",
      "Spontan, sporadis, dan berbasis pada wilayah atau suku tertentu",
      "Dipimpin oleh para intelektual dengan ideologi nasionalisme",
      "Didukung penuh oleh negara-negara sahabat",
      "Terintegrasi dalam gerakan kemerdekaan nasional"
    ],
    answer: 1
  },

  // BAGIAN II: SOAL KELAS 11
  // A. PERGERAKAN NASIONAL SAMPAI PROKLAMASI
  {
    id: 31, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Politik Etis yang dicanangkan oleh Ratu Wilhelmina pada tahun 1901 bertujuan untuk...",
    options: [
      "Memberikan kemerdekaan kepada bangsa Indonesia",
      "Memperbaiki kesejahteraan rakyat pribumi melalui program edukasi, kesehatan, dan transmigrasi",
      "Mengakhiri sistem tanam paksa dan kerja rodi",
      "Memberikan hak politik kepada seluruh rakyat Indonesia",
      "Menghentikan eksploitasi sumber daya alam Indonesia"
    ],
    answer: 1
  },
  {
    id: 32, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Budi Utomo yang didirikan pada tahun 1908 merupakan organisasi pergerakan nasional pertama di Indonesia. Organisasi ini bergerak di bidang...",
    options: [
      "Politik dan kemerdekaan",
      "Sosial dan pendidikan",
      "Ekonomi dan perdagangan",
      "Agama dan kepercayaan",
      "Militer dan pertahanan"
    ],
    answer: 1
  },
  {
    id: 33, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Sarekat Islam (SI) yang didirikan di Solo pada tahun 1912 awalnya merupakan organisasi...",
    options: [
      "Politik radikal yang menuntut kemerdekaan",
      "Perdagangan untuk melawan kaum Cina",
      "Keagamaan untuk penyebaran Islam",
      "Pendidikan untuk mencerdaskan rakyat",
      "Buruh untuk melawan eksploitasi perusahaan"
    ],
    answer: 1
  },
  {
    id: 34, section: "Kelas 11 - Pergerakan Nasional", type: "multiple",
    text: "Indische Partij yang didirikan oleh E.F.E. Douwes Dekker, Cipto Mangunkusumo, dan Suwardi Suryaningrat (Tiga Serangkai) merupakan partai politik pertama yang menuntuk kemerdekaan Indonesia. Manakah ciri-ciri perjuangan Indische Partij berikut? (Pilih lebih dari satu)",
    options: [
      "Menuntuk kemerdekaan Indonesia secara terbuka",
      "Menggunakan strategi non-kooperasi dengan pemerintah kolonial",
      "Menolak bantuan dari bangsa asing",
      "Menggunakan bahasa Indonesia dalam setiap kegiatan",
      "Menekankan persatuan antara berbagai golongan masyarakat"
    ],
    answers: [0, 4]
  },
  {
    id: 35, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Jepang menduduki Indonesia pada tahun 1942. Salah satu kebijakan Jepang yang berdampak positif bagi pergerakan kemerdekaan Indonesia adalah...",
    options: [
      "Memberikan kemerdekaan langsung kepada Indonesia",
      "Membentuk organisasi pemuda dan memberikan pelatihan militer",
      "Menghapuskan sistem pendidikan di Indonesia",
      "Menghentikan semua kegiatan politik",
      "Membebaskan semua tahanan politik tanpa syarat"
    ],
    answer: 1
  },
  {
    id: 36, section: "Kelas 11 - Pergerakan Nasional", type: "tf",
    text: "Selama pendudukan Jepang (1942-1945), berbagai kebijakan diterapkan yang mempengaruhi kehidupan masyarakat Indonesia. Tentukan Tepat atau Tidak Tepat!",
    statements: [
      "Jepang membentuk BPUPK sebagai persiapan kemerdekaan Indonesia",
      "Romusha adalah sistem kerja paksa yang menyebabkan penderitaan rakyat",
      "Jepang memberikan kemerdekaan kepada Indonesia pada tahun 1943",
      "Organisasi seperti PETA dan Barisan Pelopor dibentuk oleh Jepang"
    ],
    answers: ["Tepat", "Tepat", "Tidak Tepat", "Tepat"]
  },
  {
    id: 37, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Rapat PPKI pada tanggal 18 Agustus 1945 menghasilkan keputusan penting, yaitu...",
    options: [
      "Menetapkan UUD 1945 dan memilih presiden serta wakil presiden",
      "Membubarkan BPUPK dan menghentikan persiapan kemerdekaan",
      "Menunda proklamasi kemerdekaan Indonesia",
      "Meminta bantuan Jepang untuk mempertahankan kemerdekaan",
      "Membentuk pemerintahan darurat"
    ],
    answer: 0
  },
  {
    id: 38, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Pada masa-masa akhir pendudukannya di Indonesia, Jepang semakin terdesak dalam Perang Asia Timur Raya. Untuk memperoleh dukungan rakyat Indonesia, Jepang menjanjikan kemerdekaan dan membentuk BPUPK sebagai langkah awal persiapan. Apa alasan paling tepat Jepang membentuk BPUPK?",
    options: [
      "Menjaga citra baiknya di mata rakyat Indonesia setelah kekalahan mulai tampak",
      "Memperlihatkan kepada dunia bahwa mereka mendukung kemerdekaan bangsa-bangsa Asia",
      "Percaya bahwa rakyat Indonesia sudah siap memimpin negaranya sendiri tanpa intervensi asing",
      "Menghindari tekanan dari negara-negara Barat dengan menunjukkan kemajuan politik di wilayah jajahannya",
      "Terdesak dalam perang dan perlu dukungan rakyat Indonesia, maka memberi janji kemerdekaan sebagai strategi politik"
    ],
    answer: 4
  },
  {
    id: 39, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Semangat Sumpah Pemuda 1928 yang menekankan persatuan bangsa masih relevan dengan kondisi Indonesia modern. Hal ini menunjukkan bahwa...",
    options: [
      "Indonesia tidak mengalami perkembangan sebagai bangsa",
      "Nilai-nilai perjuangan historis dapat menjadi inspirasi untuk membangun persatuan",
      "Generasi muda tidak perlu mempelajari sejarah",
      "Tantangan bangsa Indonesia tidak pernah berubah",
      "Sumpah Pemuda tidak memiliki makna historis"
    ],
    answer: 1
  },
  {
    id: 40, section: "Kelas 11 - Pergerakan Nasional", type: "single",
    text: "Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal 17 Agustus 1945 di Jalan Pegangsaan Timur No. 56 Jakarta oleh...",
    options: [
      "Moh. Hatta dan Sutan Sjahrir",
      "Soekarno dan Moh. Hatta",
      "Sutan Sjahrir dan Amir Sjarifuddin",
      "Tan Malaka dan Soekarno",
      "Ki Hajar Dewantara dan Moh. Hatta"
    ],
    answer: 1
  },

  // B. REVOLUSI KEMERDEKAAN SAMPAI DEMOKRASI TERPIMPIN
  {
    id: 41, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Agresi Militer Belanda I yang terjadi pada tahun 1947 dikenal dengan nama operasi...",
    options: ["Operatie Kraai", "Operatie Product", "Operatie Gagak", "Operatie Linggarjati", "Operatie Renville"],
    answer: 1
  },
  {
    id: 42, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Konferensi Meja Bundar (KMB) yang berlangsung dari 23 Agustus hingga 2 November 1949 menghasilkan keputusan bahwa...",
    options: [
      "Belanda mengakui kedaulatan Indonesia secara penuh",
      "Indonesia menjadi negara federal dengan nama RIS",
      "Indonesia tetap menjadi koloni Belanda",
      "Indonesia menjadi protektorat PBB",
      "Indonesia dan Belanda membentuk uni politik"
    ],
    answer: 1
  },
  {
    id: 43, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Pemberontakan PKI di Madiun pada tahun 1948 dipimpin oleh...",
    options: ["D.N. Aidit", "Musso", "Tan Malaka", "Amir Sjarifuddin", "Sudisman"],
    answer: 1
  },
  {
    id: 44, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "tf",
    text: "Pada masa Demokrasi Liberal, Indonesia mengalami ketidakstabilan politik akibat sering bergantinya kabinet. Untuk mengatasi hal ini, pemerintah mengeluarkan UU No. 7 Tahun 1953 yang mengatur pelaksanaan Pemilu 1955. Pilih Tepat atau Tidak Tepat!",
    statements: [
      "Pemilu 1955 bertujuan menyederhanakan partai politik dan mewujudkan sistem parlementer yang stabil",
      "Salah satu hasil Pemilu 1955 adalah terbentuknya sistem pemerintahan presidensial yang kuat dan stabil",
      "Partisipasi pemilih dalam Pemilu 1955 menunjukkan antusiasme rakyat terhadap demokrasi"
    ],
    answers: ["Tepat", "Tidak Tepat", "Tepat"]
  },
  {
    id: 45, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Ciri khas sistem pemerintahan pada masa Demokrasi Liberal (1950-1959) adalah...",
    options: [
      "Presiden memiliki kekuasaan yang sangat kuat",
      "Kabinet sering berganti karena tidak adanya partai mayoritas",
      "Tidak ada kebebasan berpendapat dan berorganisasi",
      "Sistem ekonomi terpusat sepenuhnya di tangan pemerintah",
      "Militer memegang peranan utama dalam pemerintahan"
    ],
    answer: 1
  },
  {
    id: 46, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Dekrit Presiden 5 Juli 1959 mengembalikan ke...",
    options: [
      "UUD 1949 dan sistem pemerintahan parlementer",
      "UUD 1945 dan sistem demokrasi terpimpin",
      "Konstituante dan sistem federal",
      "RIS dan bentuk negara serikat",
      "Sistem pemerintahan monarki konstitusional"
    ],
    answer: 1
  },
  {
    id: 47, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "multiple",
    text: "Masa Demokrasi Terpimpin (1959-1965) ditandai dengan berbagai kebijakan yang mempengaruhi kehidupan politik dan ekonomi Indonesia. Manakah yang termasuk ciri-ciri masa Demokrasi Terpimpin? (Pilih lebih dari satu)",
    options: [
      "Penguasaan Guided Democracy dan Guided Economy",
      "Pembubaran partai-partai politik dan penggabungan menjadi partai-partai tunggal",
      "Peningkatan peran militer dalam politik",
      "Kebebasan pers dan ekspresi yang sangat luas",
      "Konfrontasi dengan Malaysia dan keluarnya Indonesia dari PBB"
    ],
    answers: [0, 1, 2, 4]
  },
  {
    id: 48, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Peristiwa Rengasdengklok pada tanggal 16 Agustus 1945 merupakan upaya...",
    options: [
      "Menghindari campur tangan Jepang dalam proklamasi kemerdekaan",
      "Membentuk pemerintahan darurat",
      "Melakukan perlawanan bersenjata terhadap Sekutu",
      "Membubarkan BPUPK dan PPKI",
      "Menyelamatkan para pemimpin dari penangkapan Belanda"
    ],
    answer: 0
  },
  {
    id: 49, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "G30S/PKI yang terjadi pada tahun 1965 mengakibatkan berubahnya tatanan politik Indonesia. Hal ini menunjukkan bahwa...",
    options: [
      "Indonesia tidak mampu mempertahankan sistem demokrasi",
      "Konflik politik dapat mengubah arah sejarah suatu bangsa",
      "Militer tidak pernah terlibat dalam politik",
      "Sistem demokrasi terpimpin berhasil dengan baik",
      "Partai komunis mendapat dukungan mayoritas rakyat"
    ],
    answer: 1
  },
  {
    id: 50, section: "Kelas 11 - Revolusi & Demokrasi Terpimpin", type: "single",
    text: "Hasil Pemilu 1955 menunjukkan bahwa...",
    options: [
      "Satu partai memperoleh mayoritas suara",
      "Terjadi pembagian suara yang merata di antara banyak partai",
      "Tidak ada partai yang memperoleh suara signifikan",
      "Partai-partai Islam dominan dalam politik Indonesia",
      "Partai komunis tereliminasi dari politik Indonesia"
    ],
    answer: 1
  },

  // C. ORDE BARU SAMPAI REFORMASI
  {
    id: 51, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Orde Baru yang dipimpin oleh Soeharto mulai berkuasa pada tahun...",
    options: ["1965", "1966", "1967", "1968", "1970"],
    answer: 1
  },
  {
    id: 52, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Kebijakan Dwifungsi ABRI pada masa Orde Baru berarti...",
    options: [
      "ABRI berfungsi sebagai alat pertahanan dan keamanan negara",
      "ABRI berperan sebagai kekuatan sosial politik di samping fungsi pertahanan",
      "ABRI dibubarkan dan digantikan dengan polisi",
      "ABRI hanya bertugas dalam operasi militer",
      "ABRI tidak boleh terlibat dalam urusan sipil"
    ],
    answer: 1
  },
  {
    id: 53, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Pembangunan Jabotabek dan berbagai proyek infrastruktur lainnya pada masa Orde Baru didanai terutama dari...",
    options: [
      "Pajak dalam negeri",
      "Bantuan luar negeri dan utang luar negeri",
      "Ekspor hasil pertanian",
      "Penjualan sumber daya alam non-migas",
      "Kontribusi dari BUMN"
    ],
    answer: 1
  },
  {
    id: 54, section: "Kelas 11 - Orde Baru & Reformasi", type: "tf",
    text: "Masa Orde Baru (1966-1998) ditandai dengan berbagai kebijakan yang berdampak pada kehidupan politik, ekonomi, dan sosial masyarakat Indonesia. Tentukan Tepat atau Tidak Tepat!",
    statements: [
      "Pembangunan ekonomi Orde Baru berhasil menurunkan angka kemiskinan dan meningkatkan pertumbuhan ekonomi",
      "Sistem politik Orde Baru sangat terbuka dengan kebebasan pers dan multipartai yang penuh",
      "Korupsi, kolusi, dan nepotisme (KKN) menjadi masalah serius pada masa Orde Baru",
      "Dwifungsi ABRI memberikan peran besar bagi militer dalam politik"
    ],
    answers: ["Tepat", "Tidak Tepat", "Tepat", "Tepat"]
  },
  {
    id: 55, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Reformasi yang dimulai pada tahun 1998 dipicu oleh berbagai faktor. Salah satu faktor utama adalah...",
    options: [
      "Keberhasilan pembangunan ekonomi yang merata",
      "Krisis ekonomi multidimensional dan tuntutan demokratisasi",
      "Kemenangan Indonesia dalam bidang olahraga internasional",
      "Keberhasilan sistem pemerintahan Orde Baru",
      "Dukungan penuh dari negara-negara Barat"
    ],
    answer: 1
  },
  {
    id: 56, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Presiden Soeharto mengundurkan diri pada tanggal...",
    options: ["12 Mei 1998", "15 Mei 1998", "18 Mei 1998", "21 Mei 1998", "25 Mei 1998"],
    answer: 3
  },
  {
    id: 57, section: "Kelas 11 - Orde Baru & Reformasi", type: "multiple",
    text: "Sebutkan faktor-faktor utama penyebab lahirnya Reformasi di Indonesia pada tahun 1998! (Pilih lebih dari satu)",
    options: [
      "Ketidakmampuan pemerintah menangani krisis ekonomi yang melanda seluruh sektor",
      "Kemenangan kubu oposisi dalam pemilihan umum yang demokratis",
      "Desakan internasional agar Indonesia menerima bantuan IMF dengan syarat reformasi",
      "Kekecewaan masyarakat terhadap rezim Orde Baru yang dianggap antidemokratis",
      "Suksesnya pembangunan infrastruktur nasional secara merata"
    ],
    answers: [0, 2, 3]
  },
  {
    id: 58, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Amandemen UUD 1945 yang dilakukan pada masa Reformasi menghasilkan perubahan penting, yaitu...",
    options: [
      "Penguatan kekuasaan presiden",
      "Pembatasan masa jabatan presiden dan penguatan DPR",
      "Penghapusan sistem pemilu",
      "Pembubaran partai-partai politik",
      "Penghapusan kebebasan berpendapat"
    ],
    answer: 1
  },
  {
    id: 59, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Keberhasilan pembangunan ekonomi pada masa Orde Baru yang diikuti dengan praktik KKN memberikan pelajaran bahwa...",
    options: [
      "Pembangunan ekonomi tidak penting bagi kemajuan bangsa",
      "Pertumbuhan ekonomi harus diimbangi dengan good governance",
      "Sistem otoriter lebih baik untuk pembangunan",
      "Utang luar negeri tidak berdampak pada ekonomi",
      "Demokrasi menghambat pembangunan ekonomi"
    ],
    answer: 1
  },
  {
    id: 60, section: "Kelas 11 - Orde Baru & Reformasi", type: "single",
    text: "Peran mahasiswa dan pelajar dalam memicu terjadinya Reformasi 1998 menunjukkan bahwa...",
    options: [
      "Generasi muda tidak memiliki peran dalam sejarah",
      "Mahasiswa dapat menjadi agen perubahan dalam masyarakat",
      "Pendidikan tidak berpengaruh terhadap kesadaran politik",
      "Reformasi hanya bisa terjadi dengan intervensi asing",
      "Sistem otoriter tidak bisa diubah"
    ],
    answer: 1
  }
];

export default function App() {
  const [step, setStep] = useState('intro'); // 'intro', 'quiz', 'result'
  const [student, setStudent] = useState({ name: '', nis: '', kelas: 'X MIPA 1' });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scoreData, setScoreData] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  
  // State untuk pengiriman ke Google Sheet
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- MASUKKAN URL GOOGLE APPS SCRIPT DI SINI ---
  const GOOGLE_SHEET_URL = 'MASUKKAN_URL_APPS_SCRIPT_ANDA_DISINI'; 

  // Helper untuk mendapatkan abjad pilihan ganda
  const getLabel = (idx) => String.fromCharCode(65 + idx);

  // Fungsi untuk mengacak urutan array (algoritma Fisher-Yates)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (student.name && student.nis) {
      setErrorMsg('');
      // Tentukan filter kelas (Kelas 10 atau Kelas 11) berdasarkan pilihan dropdown
      const isKelas11 = student.kelas.startsWith('XI');
      const gradeFilter = isKelas11 ? 'Kelas 11' : 'Kelas 10';
      
      // Ambil seluruh soal yang sesuai dengan jenjang kelas siswa
      const poolSoal = questionsData.filter(q => q.section.includes(gradeFilter));
      
      // Acak array soal dan potong hanya 10 soal saja untuk siswa ini
      const randomSoal = shuffleArray(poolSoal).slice(0, 10);
      
      setActiveQuestions(randomSoal);
      setStep('quiz');
      window.scrollTo(0, 0);
    } else {
      setErrorMsg("Mohon isi Nama dan NIS terlebih dahulu.");
    }
  };

  const handleAnswerSingle = (optIdx) => {
    setAnswers({ ...answers, [currentIdx]: optIdx });
  };

  const handleAnswerMultiple = (optIdx) => {
    const currentAns = answers[currentIdx] || [];
    let newAns;
    if (currentAns.includes(optIdx)) {
      newAns = currentAns.filter(i => i !== optIdx);
    } else {
      newAns = [...currentAns, optIdx].sort();
    }
    setAnswers({ ...answers, [currentIdx]: newAns });
  };

  const handleAnswerTF = (statementIdx, value) => {
    const currentAns = answers[currentIdx] || [];
    const newAns = [...currentAns];
    newAns[statementIdx] = value;
    setAnswers({ ...answers, [currentIdx]: newAns });
  };

  const calculateScore = () => {
    let correctCount = 0;
    let detail = [];

    activeQuestions.forEach((q, idx) => {
      const userAns = answers[idx];
      let isCorrect = false;

      if (userAns !== undefined) {
        if (q.type === 'single') {
          isCorrect = userAns === q.answer;
        } else if (q.type === 'multiple') {
          if (Array.isArray(userAns) && userAns.length === q.answers.length) {
            isCorrect = q.answers.every(a => userAns.includes(a));
          }
        } else if (q.type === 'tf') {
          if (Array.isArray(userAns)) {
            isCorrect = q.answers.every((a, i) => userAns[i] === a);
          }
        }
      }

      if (isCorrect) correctCount++;
      detail.push({ id: q.id, correct: isCorrect });
    });

    const finalScore = Math.round((correctCount / activeQuestions.length) * 100);
    setScoreData({ score: finalScore, correct: correctCount, total: activeQuestions.length, detail });
    setStep('result');
    window.scrollTo(0, 0);
  };

  const submitToSpreadsheet = async () => {
    if (GOOGLE_SHEET_URL === 'MASUKKAN_URL_APPS_SCRIPT_ANDA_DISINI') {
      alert("Tautan Google Sheet belum diatur oleh Guru. Anda masih dapat mengunduh CSV cadangan.");
      return;
    }

    setIsSubmitting(true);
    
    // Menyiapkan data yang dikirim
    const formData = new FormData();
    formData.append('nama', student.name);
    formData.append('nis', student.nis);
    formData.append('kelas', student.kelas);
    formData.append('skor', scoreData.score);
    formData.append('benar', scoreData.correct);
    formData.append('salah', scoreData.total - scoreData.correct);

    try {
      // Mengirim POST request secara asinkron ke Google Apps Script
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Penting untuk melewati error CORS dari browser
        body: formData
      });
      setSubmitSuccess(true);
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim. Silakan unduh CSV sebagai cadangan.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "SEKOLAH,SMA N 8 DUMAI\n";
    csvContent += "MATA PELAJARAN,SEJARAH INDONESIA\n";
    csvContent += "TANGGAL," + new Date().toLocaleDateString('id-ID') + "\n\n";
    
    csvContent += "NAMA SISWA,NIS,KELAS,SKOR AKHIR,BENAR,SALAH\n";
    csvContent += `"${student.name}","${student.nis}","${student.kelas}",${scoreData.score},${scoreData.correct},${scoreData.total - scoreData.correct}\n\n`;

    csvContent += "NO SOAL,STATUS JAWABAN\n";
    scoreData.detail.forEach(item => {
      csvContent += `${item.id},${item.correct ? 'Benar' : 'Salah'}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Nilai_Sejarah_${student.kelas.replace(/ /g, '_')}_${student.name.replace(/ /g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  // --- VIEW: INTRO ---
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-green-600 p-6 text-center flex flex-col items-center">
            {/* Tempat Logo */}
            <img 
              src="logo-kuning.png" 
              alt="Logo SMAN 8 Dumai" 
              className="w-24 h-24 object-contain mb-3 drop-shadow-md bg-white rounded-full p-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Ikon Pengganti jika gambar logo gagal dimuat */}
            <BookOpen className="w-12 h-12 text-white mx-auto mb-3 hidden" />
            <h1 className="text-2xl font-bold text-white">Bank Soal Sejarah</h1>
            <p className="text-green-100 mt-1">Ujian & Latihan Interaktif</p>
          </div>
          
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">SMA N 8 DUMAI</h2>
              <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Tahun Ajaran 2025/2026
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm font-medium text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleStart} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                    value={student.name} onChange={e => setStudent({...student, name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">NIS (Nomor Induk Siswa)</label>
                <div className="relative">
                  <GraduationCap className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input 
                    type="number" required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Contoh: 2100123"
                    value={student.nis} onChange={e => setStudent({...student, nis: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kelas</label>
                <select 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                  value={student.kelas} onChange={e => setStudent({...student, kelas: e.target.value})}
                >
                  <optgroup label="Kelas X">
                    <option>X 1</option>
                    <option>X 2</option>

                  </optgroup>
                </select>
              </div>
              
              <button type="submit" className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                Mulai Kuis <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ ---
  if (step === 'quiz') {
    const q = activeQuestions[currentIdx];
    const isLast = currentIdx === activeQuestions.length - 1;

    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-20">
        {/* Header / Nav */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">SMA N 8 DUMAI • {student.kelas}</div>
              <div className="font-bold text-slate-800">{student.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-green-600">Soal {currentIdx + 1} / {activeQuestions.length}</div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div className="bg-green-600 h-1.5 transition-all duration-300" style={{ width: `${((currentIdx + 1) / activeQuestions.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Question Container */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="mb-2 text-sm font-bold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-md">
              {q.section}
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-slate-800 mt-3 mb-6 leading-relaxed">
              {currentIdx + 1}. {q.text}
            </h3>

            {/* Render Options based on Type */}
            <div className="space-y-3">
              {q.type === 'single' && q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswerSingle(i)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all flex gap-3
                    ${answers[currentIdx] === i ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'}
                  `}
                >
                  <span className={`font-bold shrink-0 ${answers[currentIdx] === i ? 'text-green-600' : 'text-slate-500'}`}>{getLabel(i)}.</span>
                  <span className="text-slate-700">{opt}</span>
                </button>
              ))}

              {q.type === 'multiple' && (
                <>
                  <div className="text-sm text-amber-600 font-medium mb-2 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4"/> <i>Pilih lebih dari satu jawaban benar.</i>
                  </div>
                  {q.options.map((opt, i) => {
                    const isChecked = (answers[currentIdx] || []).includes(i);
                    return (
                      <label key={i} className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${isChecked ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'}
                      `}>
                        <div className="mt-0.5 shrink-0">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                            checked={isChecked}
                            onChange={() => handleAnswerMultiple(i)}
                          />
                        </div>
                        <span className="text-slate-700 leading-tight">{opt}</span>
                      </label>
                    );
                  })}
                </>
              )}

              {q.type === 'tf' && (
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-3 font-semibold text-slate-700 w-3/5">Pernyataan</th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">Tepat</th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">Tidak Tepat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.statements.map((stmt, i) => (
                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                          <td className="p-3 text-slate-700">{stmt}</td>
                          <td className="p-3 text-center">
                            <input 
                              type="radio" name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={(answers[currentIdx] || [])[i] === 'Tepat'}
                              onChange={() => handleAnswerTF(i, 'Tepat')}
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input 
                              type="radio" name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={(answers[currentIdx] || [])[i] === 'Tidak Tepat'}
                              onChange={() => handleAnswerTF(i, 'Tidak Tepat')}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button 
              onClick={() => { setCurrentIdx(Math.max(0, currentIdx - 1)); window.scrollTo(0, 0); }}
              disabled={currentIdx === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors
                ${currentIdx === 0 ? 'text-slate-400 bg-slate-200 cursor-not-allowed' : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50'}
              `}
            >
              <ChevronLeft className="w-5 h-5" /> Sebelumnya
            </button>

            {isLast ? (
              <button 
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-md transition-colors"
              >
                Cek Jawaban <CheckCircle2 className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={() => { setCurrentIdx(Math.min(activeQuestions.length - 1, currentIdx + 1)); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 shadow-md transition-colors"
              >
                Selanjutnya <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Modal Konfirmasi */}
        {showConfirm && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Cek Hasil?</h3>
              <p className="text-slate-600 mb-6 text-sm">Apakah Anda yakin ingin menyelesaikan kuis ini? Pastikan semua soal telah terjawab.</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 rounded-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    calculateScore();
                  }}
                  className="flex-1 py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Ya, Hitung
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- VIEW: RESULT ---
  if (step === 'result') {
    return (
      <div className="min-h-screen bg-slate-50 p-4 py-10 font-sans">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-8 text-center">
            <div className="bg-green-600 p-8 text-white relative">
              <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h1 className="text-3xl font-bold mb-2">Kuis Selesai!</h1>
              <p className="text-green-100 text-lg">Berikut adalah hasil pekerjaan Anda.</p>
              
              <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            
            <div className="p-8 pt-4">
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">Siswa</div>
                  <div className="font-bold text-slate-800">{student.name}</div>
                  <div className="text-sm text-slate-600">{student.nis}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">Kelas</div>
                  <div className="font-bold text-slate-800">{student.kelas}</div>
                  <div className="text-sm text-slate-600">SMA N 8 Dumai</div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-12 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-green-600">{scoreData.score}</div>
                  <div className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Skor Akhir</div>
                </div>
                <div className="h-16 w-px bg-slate-200"></div>
                <div className="text-left space-y-2">
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle2 className="w-5 h-5"/> {scoreData.correct} Benar
                  </div>
                  <div className="flex items-center gap-2 text-red-500 font-medium">
                    <XCircle className="w-5 h-5"/> {scoreData.total - scoreData.correct} Salah
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-left flex gap-4 mb-6">
                <Send className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">Kirim Nilai Otomatis</h4>
                  <p className="text-blue-800 text-sm mt-1 mb-3">Klik tombol di bawah ini untuk mengirim hasil Anda langsung ke *database* Bapak/Ibu Guru.</p>
                  
                  {submitSuccess ? (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-md text-sm font-bold border border-green-300">
                      <CheckCircle2 className="w-4 h-4" /> Nilai Berhasil Terkirim!
                    </div>
                  ) : (
                    <button 
                      onClick={submitToSpreadsheet}
                      disabled={isSubmitting}
                      className={`inline-flex justify-center items-center gap-2 font-bold py-2 px-4 rounded-md transition-colors text-sm
                        ${isSubmitting ? 'bg-blue-300 text-blue-800 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'}`}
                    >
                      {isSubmitting ? 'Mengirim Data...' : 'Kirim Nilai ke Guru Sekarang'}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={generateCSV}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 text-sm border border-slate-300"
                >
                  <Download className="w-4 h-4" /> Unduh CSV Cadangan
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg transition-colors border border-red-200 text-sm"
                >
                  Ulangi
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
}