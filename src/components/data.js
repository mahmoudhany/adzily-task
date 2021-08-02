export const singers = [
  { id: 0, name: 'Taylor Swift', img: 'https://i1.sndcdn.com/avatars-000500544273-6kcyh0-t500x500.jpg', isSelected: false },
  { id: 1, name: 'Imagine Dragons', img: 'https://www.imaginedragonsmusic.com/sites/g/files/aaj7266/f/styles/suzuki_breakpoints_image_mobile-md_sq/public/release/201810/5232b1dcb43188537b7f9f1e77cad1f9a38870d1.jpg?itok=u3EZe7j8', isSelected: false },
  { id: 2, name: 'Anne Marie', img: 'http://pm1.narvii.com/6528/bdc703c38c513e0b582fbbe4c79aa0508244424d_00.jpg', isSelected: false },
];

export const albums = [
  {
    id: 0,
    singerID: 0,
    name: '1989',
    cover: 'https://s.abcnews.com/images/Entertainment/ABC_taylor_swift_jef_140818_4x3_992.jpg',
    isSelected: false
  },
  { id: 1, singerID: 0, name: 'evermore', cover: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png', isSelected: false },
  { id: 2, singerID: 0, name: 'Folklore', cover: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png', isSelected: false },
  { id: 3, singerID: 1, name: 'Origins', cover: 'https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png', isSelected: false },
  { id: 4, singerID: 1, name: 'Evolve', cover: 'https://upload.wikimedia.org/wikipedia/en/b/b5/ImagineDragonsEvolve.jpg', isSelected: false },
  { id: 5, singerID: 2, name: 'Therapy', cover: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Anne-Marie_-_Therapy_%28Album_Cover%29.png', isSelected: false },
  { id: 6, singerID: 2, name: 'Speak Your Mind', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a1/SpeakYourMindAlbum.png', isSelected: false },
];


export const songs = [
  { singerID: 0, albumID: 0, id: 0, name: "Blank Space", isSelected: false, price: 10 },
  { singerID: 0, albumID: 0, id: 1, name: 'Style', isSelected: false, price: 10 },
  { singerID: 0, albumID: 0, id: 2, name: 'This Love', isSelected: false, price: 10 },
  { singerID: 0, albumID: 0, id: 3, name: '1989', isSelected: false, price: 10 },
  { singerID: 0, albumID: 1, id: 4, name: 'willow', isSelected: false, price: 12 },
  { singerID: 0, albumID: 1, id: 5, name: 'evermore', isSelected: false, price: 12 },
  { singerID: 0, albumID: 1, id: 6, name: 'gold rush', isSelected: false, price: 12 },
  { singerID: 0, albumID: 2, id: 7, name: 'seven', isSelected: false, price: 15 },
  { singerID: 0, albumID: 2, id: 8, name: 'betty', isSelected: false, price: 15 },
  { singerID: 0, albumID: 2, id: 9, name: 'peace', isSelected: false, price: 15 },
  { singerID: 0, albumID: 2, id: 10, name: 'hoax', isSelected: false, price: 15 },
  { singerID: 1, albumID: 3, id: 11, name: 'natural', isSelected: false, price: 10 },
  { singerID: 1, albumID: 3, id: 12, name: 'boomerang', isSelected: false, price: 10 },
  { singerID: 1, albumID: 3, id: 13, name: 'Demons', isSelected: false, price: 10 },
  { singerID: 1, albumID: 4, id: 14, name: 'believer', isSelected: false, price: 10 },
  { singerID: 1, albumID: 4, id: 15, name: 'thunder', isSelected: false, price: 10 },
  { singerID: 1, albumID: 4, id: 16, name: 'rise up', isSelected: false, price: 10 },
  { singerID: 2, albumID: 5, id: 17, name: 'therapy', isSelected: false, price: 14 },
  { singerID: 2, albumID: 5, id: 18, name: 'beautiful', isSelected: false, price: 14 },
  { singerID: 2, albumID: 5, id: 19, name: 'breathing', isSelected: false, price: 14 },
  { singerID: 2, albumID: 6, id: 20, name: 'ciao adios', isSelected: false, price: 11 },
  { singerID: 2, albumID: 6, id: 21, name: 'alarm', isSelected: false, price: 11 },
  { singerID: 2, albumID: 6, id: 22, name: '2002', isSelected: false, price: 11 },
  { singerID: 2, albumID: 6, id: 23, name: 'perfect', isSelected: false, price: 11 },
]
