import coverChairmanPenalty from '../../assets/legends/christian-chukwu/optimized/story/cover-chairman-penalty-home.png';
import comicPage01Preview from '../../assets/legends/christian-chukwu/optimized/story/comic-page-01-home.png';
import comicPage01 from '../../assets/legends/christian-chukwu/comic/comic-page-01.png';
import comicPage02 from '../../assets/legends/christian-chukwu/comic/comic-page-02.png';
import comicPage03 from '../../assets/legends/christian-chukwu/comic/comic-page-03.png';
import comicPage04 from '../../assets/legends/christian-chukwu/comic/comic-page-04.png';
import comicPage05 from '../../assets/legends/christian-chukwu/comic/comic-page-05.png';
import comicPage06 from '../../assets/legends/christian-chukwu/comic/comic-page-06.png';
import comicPage07 from '../../assets/legends/christian-chukwu/comic/comic-page-07.png';
import comicPage08 from '../../assets/legends/christian-chukwu/comic/comic-page-08.png';
import graphicChairman01 from '../../assets/legends/christian-chukwu/optimized/graphics/graphic-chairman-01-home.png';
import graphicChampions03 from '../../assets/legends/christian-chukwu/optimized/story/graphic-champions-03-home.png';
import graphicKaduna02 from '../../assets/legends/christian-chukwu/optimized/graphics/graphic-kaduna-02-hub.png';
import collectionHeroMain from '../../assets/legends/christian-chukwu/optimized/collection/collection-hero-main-home.png';
import tee01Home from '../../assets/legends/christian-chukwu/optimized/apparel/tee-01-home.png';
import tee02Home from '../../assets/legends/christian-chukwu/optimized/apparel/tee-02-home.png';
import tee03Home from '../../assets/legends/christian-chukwu/optimized/apparel/tee-03-home.png';
import cardC01Front from '../../assets/legends/christian-chukwu/cards/C01 — THE LEGEND-FRONT.png';
import cardC01Back from '../../assets/legends/christian-chukwu/cards/C01 — THE LEGEND-BACK.png';
import cardC02Front from '../../assets/legends/christian-chukwu/cards/C02 — THE MOMENT-FRONT.png';
import cardC02Back from '../../assets/legends/christian-chukwu/cards/C02 — THE MOMENT-BACK.png';
import cardC03Front from '../../assets/legends/christian-chukwu/cards/C03 — THE GLORY-FRONT.png';
import cardC03Back from '../../assets/legends/christian-chukwu/cards/C03 — THE GLORY-BACK.png';
import cardC04Front from '../../assets/legends/christian-chukwu/cards/C04 — THE CAPTAIN-FRONT.png';
import cardC04Back from '../../assets/legends/christian-chukwu/cards/C04 — THE CAPTAIN-BACK.png';
import cardC05Front from '../../assets/legends/christian-chukwu/cards/C05 — THE LEGACY-FRONT.png';
import cardC05Back from '../../assets/legends/christian-chukwu/cards/C05 — THE LEGACY-BACK.png';

const christianChukwu = {
  slug: 'christian-chukwu',
  legendNumber: '001',
  name: 'Christian Chukwu',
  nickname: 'Chairman',
  shortTitle: 'Captain. Leader. Ranger.',
  number: '5',
  roles: [
    'Rangers International F.C. legend',
    'Captain',
    'Defender',
    'Nigeria captain',
    'Coach',
    'Mentor',
  ],
  summary:
    'Christian Chukwu was a Rangers International F.C. player and captain who later captained Nigeria and moved into coaching.',
  years: null,
  collection: 'RANGERS LEGENDS 001',
  hero: {
    image: graphicChairman01,
    alt: 'Christian Chukwu concept artwork for Rangers Legends 001',
    status: 'NEEDS CLEANUP',
  },
  assets: {
    hero: {
      src: graphicChairman01,
      alt: 'Christian Chukwu illustrated portrait concept artwork',
      status: 'NEEDS CLEANUP',
    },
    featured: {
      src: graphicChairman01,
      alt: 'Christian Chukwu illustrated portrait concept artwork',
      status: 'NEEDS CLEANUP',
    },
    covers: [
      {
        id: 'cover-main',
        file: 'src/assets/legends/christian-chukwu/covers/cover-chairman-main.png',
        alt: 'Christian Chukwu cover concept artwork',
        status: 'NEEDS CLEANUP',
      },
      {
        id: 'cover-penalty',
        src: coverChairmanPenalty,
        alt: 'Christian Chukwu penalty cover concept artwork',
        status: 'NEEDS CLEANUP',
      },
    ],
    storyPreview: [
      {
        id: 'the-wound',
        year: '1975',
        title: 'The Wound',
        src: comicPage01Preview,
        alt: 'Concept comic artwork preview for The Wound',
        status: 'NEEDS CLEANUP',
      },
      {
        id: 'the-moment',
        year: '1977',
        title: 'The Moment',
        src: coverChairmanPenalty,
        alt: 'Concept comic artwork preview for The Moment',
        status: 'NEEDS CLEANUP',
      },
      {
        id: 'the-glory',
        year: '1977',
        title: 'The Glory',
        src: graphicChampions03,
        alt: 'Concept graphic artwork preview for The Glory',
        status: 'NEEDS CLEANUP',
      },
    ],
    hubStoryPreview: [
      {
        id: 'the-wound',
        year: '1975',
        title: 'The Wound',
        src: comicPage02,
        alt: 'Comic page concept artwork preview for 1975 The Wound',
        status: 'NEEDS CLEANUP',
      },
      {
        id: 'the-moment',
        year: '1977',
        title: 'The Moment',
        src: comicPage06,
        alt: 'Comic page concept artwork preview for 1977 The Moment',
        status: 'NEEDS CLEANUP',
      },
      {
        id: 'the-glory',
        year: '1977',
        title: 'The Glory',
        src: comicPage08,
        alt: 'Comic page concept artwork preview for 1977 The Glory',
        status: 'NEEDS CLEANUP',
      },
    ],
    film: {
      keyArt: {
        src: coverChairmanPenalty,
        alt: 'Christian Chukwu cinematic concept artwork for the Chairman film',
        status: 'NEEDS CLEANUP',
      },
    },
    collection: {
      hero: {
        src: collectionHeroMain,
        alt: 'Rangers Legends 001 collection concept artwork',
        status: 'NEEDS CLEANUP',
      },
      experience: {
        file: 'src/assets/legends/christian-chukwu/collection/collection-collector-experience.png',
        alt: 'Rangers Legends 001 collector experience concept artwork',
        status: 'NEEDS CLEANUP',
      },
    },
  },
  comicPages: [
    {
      id: 'comic-page-01',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-01.png',
      src: comicPage01,
      number: 1,
      alt: 'Christian Chukwu comic page 01 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-02',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-02.png',
      src: comicPage02,
      number: 2,
      alt: 'Christian Chukwu comic page 02 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-03',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-03.png',
      src: comicPage03,
      number: 3,
      alt: 'Christian Chukwu comic page 03 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-04',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-04.png',
      src: comicPage04,
      number: 4,
      alt: 'Christian Chukwu comic page 04 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-05',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-05.png',
      src: comicPage05,
      number: 5,
      alt: 'Christian Chukwu comic page 05 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-06',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-06.png',
      src: comicPage06,
      number: 6,
      alt: 'Christian Chukwu comic page 06 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-07',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-07.png',
      src: comicPage07,
      number: 7,
      alt: 'Christian Chukwu comic page 07 concept artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'comic-page-08',
      file: 'src/assets/legends/christian-chukwu/comic/comic-page-08.png',
      src: comicPage08,
      number: 8,
      alt: 'Christian Chukwu comic page 08 concept artwork',
      status: 'NEEDS CLEANUP',
    },
  ],
  film: {
    status: 'Coming Soon',
    title: 'Chairman',
    eyebrow: 'Rangers Legends Film 001',
    subtitle: 'A Rangers Legends Film',
    keyArt: {
      src: coverChairmanPenalty,
      alt: 'Christian Chukwu cinematic concept artwork for the Chairman film',
      status: 'NEEDS CLEANUP',
    },
    synopsis:
      'A cinematic journey through the defining moments of Christian Chukwu’s story — from setback and pressure to continental glory, national leadership, and a legacy that outlived the final whistle.',
    beats: [
      {
        marker: '1975',
        title: 'The Wound',
        image: comicPage02,
        alt: 'Comic page concept artwork representing the 1975 film beat',
        status: 'NEEDS CLEANUP',
      },
      {
        marker: '1977',
        title: 'The Moment',
        image: coverChairmanPenalty,
        alt: 'Chairman penalty concept artwork representing the 1977 film beat',
        status: 'NEEDS CLEANUP',
      },
      {
        marker: '1977',
        title: 'The Glory',
        image: graphicChampions03,
        alt: 'African Champions concept artwork representing the glory film beat',
        status: 'NEEDS CLEANUP',
      },
      {
        marker: '1980',
        title: 'The Nation',
        image: comicPage08,
        alt: 'Comic page concept artwork representing the nation film beat',
        status: 'NEEDS CLEANUP',
      },
      {
        marker: 'Forever',
        title: 'The Legacy',
        image: graphicChairman01,
        alt: 'Christian Chukwu portrait concept artwork representing the legacy film beat',
        status: 'NEEDS CLEANUP',
      },
    ],
    legacyStatement: [
      'Some men win matches.',
      'Some men lead teams.',
      'And some leave something behind...',
      'that keeps moving long after they stop.',
    ],
  },
  graphics: [
    {
      id: 'graphic-chairman-01',
      number: '01',
      label: 'Graphic 01',
      title: 'Chairman / No. 5',
      shortTitle: 'Chairman',
      theme: 'The Man',
      statement: 'The man. The captain. The legacy.',
      src: graphicChairman01,
      alt: 'Christian Chukwu Chairman No. 5 concept graphic artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'graphic-kaduna-02',
      number: '02',
      label: 'Graphic 02',
      title: 'Kaduna 1977',
      shortTitle: 'Kaduna 1977',
      theme: 'The Moment',
      statement: 'Pressure turned into image, memory, and myth.',
      src: graphicKaduna02,
      alt: 'Kaduna 1977 concept graphic artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'graphic-champions-03',
      number: '03',
      label: 'Graphic 03',
      title: 'African Champions 1977',
      shortTitle: 'African Champions',
      theme: 'The Glory',
      statement: 'A victory transformed into a lasting symbol.',
      src: graphicChampions03,
      alt: 'African Champions 1977 concept graphic artwork',
      status: 'NEEDS CLEANUP',
    },
  ],
  apparel: [
    {
      id: 'tee-01',
      number: '01',
      name: 'TEE 01',
      label: 'The Man',
      headline: 'The Man.',
      subject: ['Christian Chukwu', 'Chairman', 'No. 5'],
      title: 'TEE 01 - THE MAN / CHAIRMAN',
      image: tee01Home,
      alt: 'TEE 01 The Man Chairman concept shirt mockup',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'tee-02',
      number: '02',
      name: 'TEE 02',
      label: 'The Moment',
      headline: 'The Moment.',
      subject: ['Kaduna', '1977'],
      title: 'TEE 02 - THE MOMENT / KADUNA 1977',
      image: tee02Home,
      alt: 'TEE 02 The Moment Kaduna 1977 concept shirt mockup',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'tee-03',
      number: '03',
      name: 'TEE 03',
      label: 'The Glory',
      headline: 'The Glory.',
      subject: ['African', 'Champions'],
      title: 'TEE 03 - THE GLORY / AFRICAN CHAMPIONS',
      image: tee03Home,
      alt: 'TEE 03 The Glory African Champions concept shirt mockup',
      status: 'NEEDS CLEANUP',
    },
  ],
  cards: [
    {
      id: 'c01',
      number: 'C01',
      title: 'C01 - THE LEGEND',
      displayTitle: 'The Legend',
      front: cardC01Front,
      back: cardC01Back,
      alt: 'C01 The Legend concept card front artwork',
      frontAlt: 'C01 The Legend concept card front artwork',
      backAlt: 'C01 The Legend concept card back artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'c02',
      number: 'C02',
      title: 'C02 - THE MOMENT',
      displayTitle: 'The Moment',
      front: cardC02Front,
      back: cardC02Back,
      alt: 'C02 The Moment concept card front artwork',
      frontAlt: 'C02 The Moment concept card front artwork',
      backAlt: 'C02 The Moment concept card back artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'c03',
      number: 'C03',
      title: 'C03 - THE GLORY',
      displayTitle: 'The Glory',
      front: cardC03Front,
      back: cardC03Back,
      alt: 'C03 The Glory concept card front artwork',
      frontAlt: 'C03 The Glory concept card front artwork',
      backAlt: 'C03 The Glory concept card back artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'c04',
      number: 'C04',
      title: 'C04 - THE CAPTAIN',
      displayTitle: 'The Captain',
      front: cardC04Front,
      back: cardC04Back,
      alt: 'C04 The Captain concept card front artwork',
      frontAlt: 'C04 The Captain concept card front artwork',
      backAlt: 'C04 The Captain concept card back artwork',
      status: 'NEEDS CLEANUP',
    },
    {
      id: 'c05',
      number: 'C05',
      title: 'C05 - THE LEGACY',
      displayTitle: 'The Legacy',
      front: cardC05Front,
      back: cardC05Back,
      alt: 'C05 The Legacy concept card front artwork',
      frontAlt: 'C05 The Legacy concept card front artwork',
      backAlt: 'C05 The Legacy concept card back artwork',
      status: 'NEEDS CLEANUP',
    },
  ],
  timeline: [],
  verifiedNotes: [],
};

export default christianChukwu;
