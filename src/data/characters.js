// Contoh konten untuk MVP. Silakan ganti deskripsi dan gambar dengan materi final WONGKLIK.
export const characters = [
  {
    id: 'arjuna',
    name: 'Arjuna',
    title: 'Ksatria yang tenang',
    role: 'Pandawa',
    origin: 'Mahabharata',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=85',
    accent: 'sage',
    summary: 'Dikenal karena ketenangan, ketekunan, dan kemahirannya dalam memanah.',
    story: 'Arjuna adalah salah satu Pandawa dalam kisah Mahabharata. Ia dikenal sebagai pemanah ulung yang mengutamakan latihan, fokus, dan tanggung jawab. Dalam berbagai pementasan Wayang, kisah Arjuna dapat menjadi pengingat bahwa kemampuan perlu diimbangi kebijaksanaan.',
    traits: ['Tekun', 'Fokus', 'Bijaksana'],
    quote: 'Ketajaman kemampuan tumbuh dari latihan dan pengendalian diri.'
  },
  {
    id: 'semar',
    name: 'Semar',
    title: 'Pamomong yang bijaksana',
    role: 'Punakawan',
    origin: 'Tradisi pewayangan Jawa',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1000&q=85',
    accent: 'clay',
    summary: 'Tokoh penuh kebijaksanaan yang mengingatkan pemimpin agar tetap membumi.',
    story: 'Semar merupakan tokoh Punakawan yang sangat dikenal dalam tradisi pewayangan Jawa. Ia sering hadir sebagai pamomong atau penasihat. Melalui humor dan nasihatnya, Semar menyampaikan nilai kerendahan hati, kepedulian, dan keberanian untuk mengingatkan mereka yang berkuasa.',
    traits: ['Rendah hati', 'Peduli', 'Bijaksana'],
    quote: 'Kebijaksanaan juga berarti berani mengingatkan dengan tulus.'
  },
  {
    id: 'gatotkaca',
    name: 'Gatotkaca',
    title: 'Ksatria berotot kawat',
    role: 'Pandawa',
    origin: 'Mahabharata dan tradisi pewayangan',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=85',
    accent: 'gold',
    summary: 'Sosok kuat dan pemberani yang sering dikaitkan dengan pengabdian.',
    story: 'Gatotkaca adalah tokoh ksatria yang populer dalam pewayangan Indonesia. Ia sering digambarkan memiliki kekuatan luar biasa dan kemampuan terbang. Kisahnya kerap mengangkat keberanian, kesetiaan, dan pengorbanan untuk melindungi orang lain.',
    traits: ['Berani', 'Setia', 'Melindungi'],
    quote: 'Kekuatan menjadi berarti ketika digunakan untuk melindungi.'
  },
  {
    id: 'srikandi',
    name: 'Srikandi',
    title: 'Pemanah yang tangguh',
    role: 'Ksatria',
    origin: 'Mahabharata',
    image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1000&q=85',
    accent: 'rose',
    summary: 'Tokoh perempuan pemberani yang dikenal karena keteguhan hatinya.',
    story: 'Srikandi dikenal dalam kisah Mahabharata dan berbagai tradisi pewayangan sebagai sosok yang berani dan mahir memanah. Dalam pementasan, ia dapat menjadi lambang keteguhan, keberanian, dan kesempatan bagi setiap orang untuk mengambil peran penting.',
    traits: ['Teguh', 'Mandiri', 'Berani'],
    quote: 'Keberanian tumbuh saat kita percaya pada tujuan yang benar.'
  },
  {
    id: 'bima',
    name: 'Bima',
    title: 'Ksatria yang teguh',
    role: 'Pandawa',
    origin: 'Mahabharata',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1000&q=85',
    accent: 'ink',
    summary: 'Pandawa yang kuat, terus terang, dan memegang teguh prinsip.',
    story: 'Bima, juga dikenal sebagai Werkudara, adalah salah satu Pandawa. Ia sering digambarkan memiliki kekuatan besar, keberanian, dan sifat terus terang. Kisahnya menyoroti keteguhan hati, kesetiaan kepada keluarga, dan keberanian menghadapi tantangan.',
    traits: ['Teguh', 'Jujur', 'Setia'],
    quote: 'Pegang prinsip, tetapi gunakan kekuatan dengan tanggung jawab.'
  },
  {
    id: 'petruk',
    name: 'Petruk',
    title: 'Humor yang menyimpan makna',
    role: 'Punakawan',
    origin: 'Tradisi pewayangan Jawa',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=85',
    accent: 'sage',
    summary: 'Punakawan yang jenaka, dengan kritik sosial yang dekat dengan kehidupan.',
    story: 'Petruk adalah salah satu Punakawan dalam tradisi pewayangan Jawa. Kelucuannya bukan sekadar hiburan: dialog Petruk sering digunakan untuk menyampaikan kritik dan refleksi tentang kehidupan sehari-hari dengan cara yang mudah diterima.',
    traits: ['Jenaka', 'Kritis', 'Adaptif'],
    quote: 'Tawa kadang membuka pintu untuk memahami kebenaran.'
  }
]

export const getCharacter = (id) => characters.find((character) => character.id === id)
