import image1 from '../../assets/images/poster_webinar/poster-architect.jpg';
import image2 from '../../assets/images/poster_webinar/poster-berkarya.jpeg';
import image3 from '../../assets/images/poster_webinar/poster-canon.jpg';
import image4 from '../../assets/images/poster_webinar/poster-corporate.jpg';
import image5 from '../../assets/images/poster_webinar/poster-covid.jpg';
import image6 from '../../assets/images/poster_webinar/poster-cybersecurity.jpg';
import image7 from '../../assets/images/poster_webinar/poster-environmental.jpg';
import image8 from '../../assets/images/poster_webinar/poster-facebook-ads.jpg';
import image9 from '../../assets/images/poster_webinar/poster-juru-bahasa.jpeg';

// needs host rating data and host rating given

const currencyFormatter = new Intl.NumberFormat('in-ID', {
  style: 'currency',
  currency: 'IDR',
});

const data = [
  {
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
    category: 'business',
    date: new Date('November 19, 2021'),
    description: 'webinar bagus sekali',
    EC: true,
    host: 'Arnold Kurniawan',
    platform: 'Zoom',
    poster: image1,
    price: currencyFormatter.format(100000),
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    time: '16:00 - 18:00',
  },
  {
    title: 'Cryptocurrencies for Dummmies - Belajar Kerja Pintar',
    attendee: 200,
    status: 'Waiting',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image2,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image3,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image4,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image5,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image6,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image7,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('16/1/21'),
    time: '16:00 - 18:00',
    poster: image8,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
  {
    title: 'Pendidikan di Era New Normal Sesi 1',
    attendee: 200,
    status: 'On Going',
    rating: 4,
    tickets_bought: 100,
    date: new Date('December 17, 1995 03:24:00'),
    time: '16:00 - 18:00',
    poster: image9,
    speaker: [
      'Prof. Ir. Nirzam, M.Sc., Ph.D., IMP., ASEAN ENg.',
      'dr. Ketut Suarjaya, MPPM.',
      'Dr. Gede Rasben Dantes, S.T., M.TI.',
      'Prof. Zumarudin',
      'Sri Maharaja Wiralandagopala Sri Sundarapandya Dewa Adhiswara',
      'Raden Mas Sujana',
    ],
    platform: 'Zoom',
    category: 'business',
    host: 'Arnold Kurniawan',
    EC: true,
    price: currencyFormatter.format(100000),
    description: 'webinar bagus sekali',
    recommendation: [
      'Junior level professionals with 1-3 years of experience in Design field',
      'Business owner in Design fields',
      'Anyone who is interested in Design topics',
    ],
    benefit: [
      "Speaker's Deck",
      'Knowledge and skills directly from well-curated experts',
    ],
  },
];

export default data;
