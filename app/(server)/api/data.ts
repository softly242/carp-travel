export const DATA = [
  {
    backgroundUrl: '/bgServices1-1280.jpg',
    content: {
      number: '01/05',
      image: '/services1-1280.jpg',
      titleCall: 'Feel the adrenaline rush',
      item: 'ATVs Traveling',
      title:
        'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    },
  },

  {
    backgroundUrl: '/bgServices2-1280.jpg',
    content: {
      number: '02/05',
      image: '/services2-1280.jpg',
      titleCall: 'Destroy your limitations',
      item: 'Rock climbing',
      title:
        'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    },
  },
  {
    backgroundUrl: '/bgServices3-1280.jpg',
    content: {
      number: '03/05',
      image: '/services3-1280.jpg',
      titleCall: 'Get Inspired',
      item: 'Hot air ballooning',
      title:
        'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    },
  },
  {
    backgroundUrl: '/bgServices4-1280.jpg',
    content: {
      number: '04/05',
      image: '/services4-1280.jpg',
      titleCall: 'Overcome your fears',
      item: 'Skydiving',
      title:
        'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird is eye view forever.',
    },
  },
  {
    backgroundUrl: '/bgServices5-1280.jpg',
    content: {
      number: '05/05',
      image: '/services5-1280.jpg',
      titleCall: 'Trust the flow',
      item: 'Rafting',
      title:
        'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    },
  },
];

export type DataType = typeof DATA;

export async function getAll() {
  const promise = new Promise((res) => {
    setTimeout(() => res(DATA), 1500);
  });
  return await promise;
}

export async function getDataByItem(item: string) {
  const promise = new Promise((res)=> {
    setTimeout(()=>res(DATA.find((x)=> x.content.item === item)),1500);
  });
  return await promise;
}