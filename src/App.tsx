import React, { useState } from 'react';
import {
  BookOpen,
  User,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Download,
  ChevronRight,
  ChevronLeft,
  Award,
  Send,
} from 'lucide-react';

// --- DATA SOAL (30 SOAL KERAJAAN SIAK) ---
const questionsData = [
  {
    id: 1,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Kerajaan Siak Sri Indrapura didirikan pada tahun 1723 oleh Raja Kecik (Sultan Abdul Jalil Rahmat Syah). Nilai karakter utama yang ditunjukkan oleh Raja Kecik dalam membangun kerajaan baru setelah dinamika politik di Johor adalah...',
    options: [
      'Keberanian dan kemandirian dalam merintis kedaulatan',
      'Ketergantungan pada kekuatan kolonial',
      'Keinginan untuk membalas dendam selamanya',
      'Sikap pasrah terhadap keadaan politik',
    ],
    answer: 0,
  },
  {
    id: 2,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Kerajaan Siak memiliki konstitusi tertulis yang dikenal dengan nama 'Bab Al-Qawa'id'. Nilai penting dari keberadaan kitab undang-undang ini bagi kehidupan berbangsa saat ini adalah...",
    options: [
      'Pentingnya sistem feodal',
      'Kesadaran akan kepastian dan ketertiban hukum',
      'Dominasi sultan atas rakyatnya',
      'Hanya sebagai pelengkap administrasi Belanda',
    ],
    answer: 1,
  },
  {
    id: 3,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Istana Asserayah Hasyimiah memiliki corak arsitektur perpaduan antara Melayu, Arab, dan Eropa. Nilai yang dapat kita lestarikan dari gaya arsitektur ini dalam kehidupan masyarakat modern adalah...',
    options: [
      'Eksklusivisme budaya lokal',
      'Toleransi dan keterbukaan terhadap akulturasi budaya',
      'Penghapusan identitas budaya asli Melayu',
      'Peniruan mutlak terhadap budaya Barat',
    ],
    answer: 1,
  },
  {
    id: 4,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Balai Kerapatan Tinggi di Siak digunakan sebagai tempat pengadilan. Bangunan ini memiliki dua tangga utama, yaitu tangga besi (untuk yang kalah) dan tangga kayu (untuk yang menang). Filosofi dari arsitektur ini mengajarkan kita tentang nilai...',
    options: [
      'Keadilan, kejujuran, dan konsekuensi hukum',
      'Kesenjangan sosial di mata hukum',
      'Keindahan seni ukir kayu semata',
      'Kekuasaan mutlak hakim pengadilan',
    ],
    answer: 0,
  },
  {
    id: 5,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Sultan Syarif Kasim II menyerahkan kedaulatan kerajaannya kepada Republik Indonesia segera setelah Proklamasi 1945. Nilai karakter paling menonjol yang patut diteladani dari peristiwa ini adalah...',
    options: [
      'Nasionalisme dan rela berkorban',
      'Kecintaan pada jabatan politik',
      'Keinginan memperluas wilayah Siak',
      'Keputusasaan dalam memimpin kerajaan',
    ],
    answer: 0,
  },
  {
    id: 6,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Selain menyerahkan kedaulatan, Sultan Syarif Kasim II juga menyumbangkan kekayaan pribadinya sebesar 13 juta Gulden untuk modal awal Republik Indonesia. Pelajaran moral dari tindakan ini adalah...',
    options: [
      'Materi adalah segalanya dalam peperangan',
      'Kemerdekaan membutuhkan pengorbanan harta dan jiwa yang tulus',
      'Pentingnya mencari sensasi di awal kemerdekaan',
      'Kekayaan kerajaan harus dihabiskan',
    ],
    answer: 1,
  },
  {
    id: 7,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Masyarakat Siak sangat memegang teguh filosofi 'Adat Bersendi Syarak, Syarak Bersendi Kitabullah'. Nilai yang terkandung dalam pepatah ini adalah...",
    options: [
      'Modernisasi tanpa batas',
      'Religiusitas yang menjadi fondasi dalam berbudaya',
      'Pemisahan total antara agama dan negara',
      'Penolakan terhadap hukum positif',
    ],
    answer: 1,
  },
  {
    id: 8,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Di dalam Istana Siak terdapat alat pemutar musik langka bernama 'Komet' yang dibawa dari Jerman. Keberadaan Komet ini menunjukkan nilai...",
    options: [
      'Apresiasi yang tinggi terhadap seni dan teknologi global',
      'Sikap konsumtif raja-raja Melayu',
      'Keterbelakangan teknologi Kerajaan Siak',
      'Ambisi menaklukkan Jerman',
    ],
    answer: 0,
  },
  {
    id: 9,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Sultan Syarif Kasim II dan Permaisuri mendirikan 'Sultanah Latifah School' (sekolah perempuan) pada tahun 1927. Nilai modern apa yang telah diterapkan melalui langkah ini?",
    options: [
      'Eksploitasi tenaga kerja perempuan',
      'Emansipasi wanita dan kesetaraan hak pendidikan',
      'Pemisahan kelas sosial',
      'Diskriminasi terhadap laki-laki',
    ],
    answer: 1,
  },
  {
    id: 10,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Sistem pemerintahan Siak melibatkan 'Datuk Empat Suku'. Peran mereka dalam pemilihan dan penasihatan Sultan mencerminkan nilai...",
    options: [
      'Otokrasi mutlak',
      'Musyawarah mufakat dan demokrasi perwakilan',
      'Pemusatan kekuasaan pada satu suku',
      'Nepotisme kerajaan',
    ],
    answer: 1,
  },
  {
    id: 11,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Mahkota Kesultanan Siak kini tersimpan di Museum Nasional Jakarta. Nilai sejarah yang diajarkan dari tindakan penyerahan benda pusaka ini kepada negara adalah...',
    options: [
      'Ketidaksukaan terhadap barang mewah',
      'Keikhlasan dan loyalitas tertinggi kepada NKRI',
      'Paksaan dari pihak pemerintah pusat',
      'Ketidakmampuan merawat peninggalan masa lalu',
    ],
    answer: 1,
  },
  {
    id: 12,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Peristiwa 'Perang Guntung' menunjukkan perlawanan gigih Kerajaan Siak melawan monopoli VOC. Nilai kepahlawanan dari peristiwa ini adalah...",
    options: [
      'Semangat anti-kolonialisme dan pelindung ekonomi rakyat',
      'Sikap kompromi terhadap penjajah',
      'Keinginan Siak menguasai seluruh perairan dunia',
      'Sifat mudah menyerah karena kalah senjata',
    ],
    answer: 0,
  },
  {
    id: 13,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Masyarakat Riau sangat menjaga kelestarian kain tenun Siak bermotif pucuk rebung. Nilai apa yang didapat pelajar SMA dengan melestarikan tenun Siak?',
    options: [
      'Kecintaan pada identitas dan pelestarian warisan budaya lokal',
      'Gengsi sosial karena harganya mahal',
      'Keinginan bersaing dengan merek fashion Barat',
      'Hanya sekadar memenuhi kewajiban seragam sekolah',
    ],
    answer: 0,
  },
  {
    id: 14,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Menolak tawaran Belanda untuk dijadikan kepala negara bagian (BFO) dan memilih bergerilya, Sultan Syarif Kasim II mengajarkan nilai...',
    options: [
      'Keteguhan prinsip persatuan dan integritas bangsa',
      'Ketakutan pada ancaman militer Belanda',
      'Kekecewaan karena tawarannya kurang tinggi',
      'Ketiadaan visi politik masa depan',
    ],
    answer: 0,
  },
  {
    id: 15,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Kesultanan Siak memiliki hutan adat (suaka alam) yang dilarang dirusak. Ini menunjukkan nilai...',
    options: [
      'Kapitalisme sumber daya alam',
      'Kesadaran konservasi dan cinta lingkungan alam',
      'Mitos dan takhayul masyarakat pedalaman',
      'Persiapan lahan untuk perluasan istana',
    ],
    answer: 1,
  },
  {
    id: 16,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Koleksi peninggalan berbagai senjata di Istana Siak mengajarkan kita nilai...',
    options: [
      'Kewaspadaan nasional dan pentingnya pertahanan negara',
      'Mengajarkan kekerasan untuk menyelesaikan konflik',
      'Hanya sekadar benda antik pajangan rumah',
      'Bukti bahwa diplomasi tidak pernah berhasil',
    ],
    answer: 0,
  },
  {
    id: 17,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Sultan Syarif Kasim II ditetapkan sebagai Pahlawan Nasional. Menjadikan tokoh sejarah sebagai pahlawan nasional adalah upaya melestarikan nilai...',
    options: [
      'Keteladanan dan inspirasi perjuangan bagi generasi muda',
      'Feodalisme di era modern',
      'Beban sejarah bagi pemerintah daerah',
      'Komersialisasi nama tokoh untuk pariwisata',
    ],
    answer: 0,
  },
  {
    id: 18,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Kerajaan Siak memiliki armada laut 'Harimau Buas'. Pemahaman akan sejarah kemaritiman Siak ini penting untuk melestarikan nilai...",
    options: [
      'Kemandirian dan penguasaan geopolitik wilayah laut Nusantara',
      'Kecenderungan untuk menjadi bangsa perompak',
      'Isolasi diri dari perdagangan internasional',
      'Pengabaian pembangunan infrastruktur daratan',
    ],
    answer: 0,
  },
  {
    id: 19,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Pola tata ruang Istana Asserayah Hasyimiah penuh dengan etika ruang (tamu laki-laki, perempuan, ruang sidang). Nilai yang patut dilestarikan adalah...',
    options: [
      'Tata krama, kesantunan, dan norma kepatutan dalam pergaulan',
      'Sifat curiga yang berlebihan antar manusia',
      'Pemborosan ruang bangunan',
      'Penutupan diri dari orang asing',
    ],
    answer: 0,
  },
  {
    id: 20,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Tengku Agung Syarifah Latifah aktif membina kaum perempuan dalam menenun dan membatik. Peran beliau mencerminkan pelestarian nilai...',
    options: [
      'Kemandirian ekonomi dan kewirausahaan bagi perempuan',
      'Monopoli ekonomi oleh keluarga keraton',
      'Menghapuskan peran laki-laki dalam perekonomian',
      'Memaksa rakyat bekerja untuk kerajaan',
    ],
    answer: 0,
  },
  {
    id: 21,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Cara yang paling tepat bagi pelajar SMA saat ini untuk melestarikan nilai sejarah Kesultanan Siak adalah...',
    options: [
      'Menjaga fasilitas cagar budaya saat berkunjung dan meneladani sikap patriotisme pahlawannya',
      'Mengklaim harta karun kerajaan sebagai milik pribadi',
      'Mengubah sejarah aslinya agar lebih menarik di media sosial',
      'Hanya menghafal tahun kejadian tanpa peduli maknanya',
    ],
    answer: 0,
  },
  {
    id: 22,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: "Kedudukan Sultan di Siak diikat oleh asas 'Raja adil raja disembah, raja lalim raja disanggah'. Prinsip ini sejalan dengan pelestarian nilai...",
    options: [
      'Kekuasaan pemimpin yang absolut dan tak tersentuh',
      'Akuntabilitas kepemimpinan dan kontrol sosial dalam politik',
      'Pemberontakan sebagai hobi masyarakat',
      'Kepatuhan buta dari rakyat kepada penguasa',
    ],
    answer: 1,
  },
  {
    id: 23,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Penamaan fasilitas umum seperti Jembatan Tengku Agung Syarifah Latifah memiliki nilai...',
    options: [
      'Menjaga ingatan kolektif masyarakat akan jasa para pendahulu',
      'Kewajiban rutin birokrasi pemerintahan daerah',
      'Menunjukkan superioritas Kabupaten Siak atas daerah lain',
      'Menghindari kebingungan dalam memberikan nama jalan',
    ],
    answer: 0,
  },
  {
    id: 24,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Sultan Syarif Kasim II mendorong pemuda Siak melanjutkan sekolah ke Medan dan Batavia. Nilai yang diperlihatkan Sultan adalah...',
    options: [
      'Visi ke depan bahwa kemajuan bangsa bertumpu pada sumber daya manusia yang terdidik',
      'Keinginan menyingkirkan pesaing politik di Siak',
      'Mamerkan kekayaan kerajaan kepada daerah lain',
      'Kurangnya guru di Kerajaan Siak semata',
    ],
    answer: 0,
  },
  {
    id: 25,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Banyaknya cermin besar di dalam Istana Siak secara filosofis mengajarkan nilai...',
    options: [
      'Introspeksi diri dan menjaga kehormatan tingkah laku',
      'Sikap narsistik dan memuja ketampanan/kecantikan',
      'Kemewahan dan pemborosan uang negara',
      'Taktik memantulkan cahaya agar istana terang benderang',
    ],
    answer: 0,
  },
  {
    id: 26,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Kerajaan Siak pernah bersepakat dengan Belanda untuk menghindari pertumpahan darah, namun tetap menyusun kekuatan secara diam-diam. Taktik ini menunjukkan nilai...',
    options: [
      'Kepengecutan dalam menghadapi peperangan terbuka',
      'Kecerdasan diplomasi dan kebijaksanaan melindungi rakyat',
      'Penundukan mutlak terhadap keinginan Belanda',
      'Sikap tidak konsisten dari para pemimpin kerajaan',
    ],
    answer: 1,
  },
  {
    id: 27,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Merawat sumur tua di Istana Siak yang tak pernah kering mengajarkan nilai...',
    options: [
      'Rasa syukur dan kepedulian terhadap fasilitas sumber kehidupan',
      'Kepercayaan mistik yang irasional',
      'Ketidakmampuan membangun sistem PDAM modern',
      'Kebiasaan kuno yang menghambat kemajuan zaman',
    ],
    answer: 0,
  },
  {
    id: 28,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Sultan Syarif Kasim II menyuplai makanan untuk TKR di Riau pada masa gerilya. Ini memancarkan nilai...',
    options: [
      'Kerja sama dan gotong royong komponen sipil-militer',
      'Intervensi raja dalam urusan militer modern',
      'Cara sultan untuk membeli pengaruh militer',
      'Pemborosan aset makanan masyarakat Riau',
    ],
    answer: 0,
  },
  {
    id: 29,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Selain bahasa Melayu, bahasa Arab dan Belanda juga banyak dipelajari di Istana Siak. Tradisi ini penting untuk dilestarikan sebagai nilai...',
    options: [
      'Rasa rendah diri terhadap bahasa penjajah',
      'Wawasan global dan kemampuan komunikasi internasional',
      'Penghilangan bahasa persatuan Indonesia',
      'Kecenderungan untuk memecah belah masyarakat',
    ],
    answer: 1,
  },
  {
    id: 30,
    section: 'Sejarah Lokal - Kerajaan Siak',
    type: 'single',
    text: 'Pesan moral dan nilai tertinggi dari perjalanan Kesultanan Siak Sri Indrapura bagi masa depan bangsa Indonesia adalah...',
    options: [
      'Pentingnya memperkaya diri sebelum menyumbang untuk negara',
      'Mendahulukan kepentingan, keutuhan, dan kejayaan NKRI di atas segala kebanggaan kedaerahan',
      'Menginginkan kembali sistem kerajaan di masa depan',
      'Mengharap pamrih berupa jabatan tinggi di pemerintahan pusat',
    ],
    answer: 1,
  },
];

export default function App() {
  const [step, setStep] = useState('intro'); // 'intro', 'quiz', 'result'
  const [student, setStudent] = useState({
    name: '',
    nis: '',
    kelas: 'X MIPA 1',
  });
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
  const GOOGLE_SHEET_URL =
    'https://script.google.com/macros/s/AKfycbw4BsaRGEKDhLitVhXWxH05KSPMJRQAegRvMm363pRWGwwq6oP-VhvPa_lIy-GC7Kr97A/exec';

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

      // Ambil seluruh soal dari dataKerajaan Siak
      const poolSoal = questionsData;

      // Acak array soal dan tampilkan SEMUA 30 SOAL (gunakan slice(0, 30) atau biarkan penuh)
      const randomSoal = shuffleArray(poolSoal).slice(0, 30);

      setActiveQuestions(randomSoal);
      setStep('quiz');
      window.scrollTo(0, 0);
    } else {
      setErrorMsg('Mohon isi Nama dan NIS terlebih dahulu.');
    }
  };

  const handleAnswerSingle = (optIdx) => {
    setAnswers({ ...answers, [currentIdx]: optIdx });
  };

  const handleAnswerMultiple = (optIdx) => {
    const currentAns = answers[currentIdx] || [];
    let newAns;
    if (currentAns.includes(optIdx)) {
      newAns = currentAns.filter((i) => i !== optIdx);
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
            isCorrect = q.answers.every((a) => userAns.includes(a));
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

    const finalScore = Math.round(
      (correctCount / activeQuestions.length) * 100
    );
    setScoreData({
      score: finalScore,
      correct: correctCount,
      total: activeQuestions.length,
      detail,
    });
    setStep('result');
    window.scrollTo(0, 0);
  };

  const submitToSpreadsheet = async () => {
    if (GOOGLE_SHEET_URL === 'MASUKKAN_URL_APPS_SCRIPT_ANDA_DISINI') {
      alert(
        'Tautan Google Sheet belum diatur oleh Guru. Anda masih dapat mengunduh CSV cadangan.'
      );
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
        body: formData,
      });
      setSubmitSuccess(true);
    } catch (error) {
      alert(
        'Terjadi kesalahan saat mengirim. Silakan unduh CSV sebagai cadangan.'
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCSV = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'SEKOLAH,SMA N 8 DUMAI\n';
    csvContent += 'MATA PELAJARAN,SEJARAH INDONESIA (KERAJAAN SIAK)\n';
    csvContent += 'TANGGAL,' + new Date().toLocaleDateString('id-ID') + '\n\n';

    csvContent += 'NAMA SISWA,NIS,KELAS,SKOR AKHIR,BENAR,SALAH\n';
    csvContent += `"${student.name}","${student.nis}","${student.kelas}",${
      scoreData.score
    },${scoreData.correct},${scoreData.total - scoreData.correct}\n\n`;

    csvContent += 'NO SOAL (ID),STATUS JAWABAN\n';
    scoreData.detail.forEach((item) => {
      csvContent += `${item.id},${item.correct ? 'Benar' : 'Salah'}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `Nilai_Sejarah_Siak_${student.kelas.replace(
        / /g,
        '_'
      )}_${student.name.replace(/ /g, '_')}.csv`
    );
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
            <h1 className="text-2xl font-bold text-white">
              Kuis Sejarah: Siak
            </h1>
            <p className="text-green-100 mt-1">Ujian & Latihan Interaktif</p>
          </div>

          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">
                SMA N 8 DUMAI
              </h2>
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
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                    value={student.name}
                    onChange={(e) =>
                      setStudent({ ...student, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  NIS (Nomor Induk Siswa)
                </label>
                <div className="relative">
                  <GraduationCap className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    required
                    className="pl-10 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Contoh: 2100123"
                    value={student.nis}
                    onChange={(e) =>
                      setStudent({ ...student, nis: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Kelas
                </label>
                <select
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                  value={student.kelas}
                  onChange={(e) =>
                    setStudent({ ...student, kelas: e.target.value })
                  }
                >
                  <optgroup label="Kelas X">
                    <option>X MIPA 1</option>
                    <option>X MIPA 2</option>
                    <option>X MIPA 3</option>
                    <option>X IPS 1</option>
                    <option>X IPS 2</option>
                  </optgroup>
                  <optgroup label="Kelas XI">
                    <option>XI MIPA 1</option>
                    <option>XI MIPA 2</option>
                    <option>XI MIPA 3</option>
                    <option>XI IPS 1</option>
                    <option>XI IPS 2</option>
                  </optgroup>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
              >
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
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                SMA N 8 DUMAI • {student.kelas}
              </div>
              <div className="font-bold text-slate-800">{student.name}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-green-600">
                Soal {currentIdx + 1} / {activeQuestions.length}
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-green-600 h-1.5 transition-all duration-300"
              style={{
                width: `${((currentIdx + 1) / activeQuestions.length) * 100}%`,
              }}
            ></div>
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
              {q.type === 'single' &&
                q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswerSingle(i)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex gap-3
                    ${
                      answers[currentIdx] === i
                        ? 'border-green-500 bg-green-50'
                        : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'
                    }
                  `}
                  >
                    <span
                      className={`font-bold shrink-0 ${
                        answers[currentIdx] === i
                          ? 'text-green-600'
                          : 'text-slate-500'
                      }`}
                    >
                      {getLabel(i)}.
                    </span>
                    <span className="text-slate-700">{opt}</span>
                  </button>
                ))}

              {q.type === 'multiple' && (
                <>
                  <div className="text-sm text-amber-600 font-medium mb-2 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />{' '}
                    <i>Pilih lebih dari satu jawaban benar.</i>
                  </div>
                  {q.options.map((opt, i) => {
                    const isChecked = (answers[currentIdx] || []).includes(i);
                    return (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${
                          isChecked
                            ? 'border-green-500 bg-green-50'
                            : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'
                        }
                      `}
                      >
                        <div className="mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                            checked={isChecked}
                            onChange={() => handleAnswerMultiple(i)}
                          />
                        </div>
                        <span className="text-slate-700 leading-tight">
                          {opt}
                        </span>
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
                        <th className="p-3 font-semibold text-slate-700 w-3/5">
                          Pernyataan
                        </th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">
                          Tepat
                        </th>
                        <th className="p-3 font-semibold text-slate-700 text-center w-1/5">
                          Tidak Tepat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.statements.map((stmt, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                        >
                          <td className="p-3 text-slate-700">{stmt}</td>
                          <td className="p-3 text-center">
                            <input
                              type="radio"
                              name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={
                                (answers[currentIdx] || [])[i] === 'Tepat'
                              }
                              onChange={() => handleAnswerTF(i, 'Tepat')}
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="radio"
                              name={`q${currentIdx}_s${i}`}
                              className="w-5 h-5 text-green-600 focus:ring-green-500"
                              checked={
                                (answers[currentIdx] || [])[i] === 'Tidak Tepat'
                              }
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
              onClick={() => {
                setCurrentIdx(Math.max(0, currentIdx - 1));
                window.scrollTo(0, 0);
              }}
              disabled={currentIdx === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors
                ${
                  currentIdx === 0
                    ? 'text-slate-400 bg-slate-200 cursor-not-allowed'
                    : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50'
                }
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
                onClick={() => {
                  setCurrentIdx(
                    Math.min(activeQuestions.length - 1, currentIdx + 1)
                  );
                  window.scrollTo(0, 0);
                }}
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
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Cek Hasil?
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                Apakah Anda yakin ingin menyelesaikan kuis ini? Pastikan semua
                soal telah terjawab.
              </p>
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
              <p className="text-green-100 text-lg">
                Berikut adalah hasil pekerjaan Anda.
              </p>

              <svg
                className="absolute -bottom-1 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div className="p-8 pt-4">
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">
                    Siswa
                  </div>
                  <div className="font-bold text-slate-800">{student.name}</div>
                  <div className="text-sm text-slate-600">{student.nis}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">
                    Kelas
                  </div>
                  <div className="font-bold text-slate-800">
                    {student.kelas}
                  </div>
                  <div className="text-sm text-slate-600">SMA N 8 Dumai</div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-12 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-green-600">
                    {scoreData.score}
                  </div>
                  <div className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">
                    Skor Akhir
                  </div>
                </div>
                <div className="h-16 w-px bg-slate-200"></div>
                <div className="text-left space-y-2">
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle2 className="w-5 h-5" /> {scoreData.correct}{' '}
                    Benar
                  </div>
                  <div className="flex items-center gap-2 text-red-500 font-medium">
                    <XCircle className="w-5 h-5" />{' '}
                    {scoreData.total - scoreData.correct} Salah
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-left flex gap-4 mb-6">
                <Send className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">
                    Kirim Nilai Otomatis
                  </h4>
                  <p className="text-blue-800 text-sm mt-1 mb-3">
                    Klik tombol di bawah ini untuk mengirim hasil Anda langsung
                    ke *database* Bapak/Ibu Guru.
                  </p>

                  {submitSuccess ? (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-md text-sm font-bold border border-green-300">
                      <CheckCircle2 className="w-4 h-4" /> Nilai Berhasil
                      Terkirim!
                    </div>
                  ) : (
                    <button
                      onClick={submitToSpreadsheet}
                      disabled={isSubmitting}
                      className={`inline-flex justify-center items-center gap-2 font-bold py-2 px-4 rounded-md transition-colors text-sm
                        ${
                          isSubmitting
                            ? 'bg-blue-300 text-blue-800 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        }`}
                    >
                      {isSubmitting
                        ? 'Mengirim Data...'
                        : 'Kirim Nilai ke Guru Sekarang'}
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
