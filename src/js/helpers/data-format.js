//data = [{}, {}, {}]
//genres = [{}, {}, {}]
// const data = [
//   {
//     genre_ids: [80, 18],
//     original_language: 'es',
//     id: 71446,
//     poster_path: '/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
//     vote_average: 8.3,
//     overview:
//       'To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.',
//     name: 'Money Heist',
//     original_name: 'La Casa de Papel',
//     origin_country: ['ES'],
//     vote_count: 15029,
//     backdrop_path: '/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg',
//     first_air_date: '2017-05-02',
//     popularity: 853.478,
//     media_type: 'tv',
//   },
//   {
//     overview:
//       'King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.',
//     release_date: '2021-10-13',
//     adult: false,
//     backdrop_path: '/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg',
//     vote_count: 512,
//     genre_ids: [28, 18, 36],
//     original_language: 'en',
//     id: 617653,
//     original_title: 'The Last Duel',
//     poster_path: '/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg',
//     title: 'The Last Duel',
//     video: false,
//     vote_average: 7.6,
//     popularity: 393.917,
//     media_type: 'movie',
//   },
//   {
//     release_date: '2021-09-30',
//     adult: false,
//     backdrop_path: '/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
//     genre_ids: [878, 28, 12],
//     vote_count: 3801,
//     original_language: 'en',
//     original_title: 'Venom: Let There Be Carnage',
//     id: 580489,
//     title: 'Venom: Let There Be Carnage',
//     video: false,
//     vote_average: 7.2,
//     poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
//     overview:
//       'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
//     popularity: 12080.737,
//     media_type: 'movie',
//   },
//   {
//     release_date: '2021-09-13',
//     adult: false,
//     backdrop_path: '/p1eneBfZCGbbzicwksOhIaibUwk.jpg',
//     genre_ids: [18, 37],
//     vote_count: 102,
//     original_language: 'en',
//     original_title: 'The Power of the Dog',
//     id: 600583,
//     title: 'The Power of the Dog',
//     video: false,
//     vote_average: 6.7,
//     poster_path: '/zWMAdiQGV4V3qCq2z9ku3Dh5q2f.jpg',
//     overview:
//       'A domineering, magnetic rancher responds with mocking cruelty when his brother brings home a new wife and her son, until the unexpected comes to pass.',
//     popularity: 56.148,
//     media_type: 'movie',
//   },
//   {
//     backdrop_path: '/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg',
//     genre_ids: [10759, 18],
//     first_air_date: '2021-11-24',
//     original_language: 'en',
//     id: 88329,
//     poster_path: '/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg',
//     vote_average: 8.7,
//     original_name: 'Hawkeye',
//     origin_country: ['US'],
//     vote_count: 497,
//     overview:
//       'Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a superhero. The two are forced to work together when a presence from Barton’s past threatens to derail far more than the festive spirit.',
//     name: 'Hawkeye',
//     popularity: 4655.139,
//     media_type: 'tv',
//   },
//   {
//     backdrop_path: '/nB8Z2lDOOSpZgTRLUVYSJ74RPof.jpg',
//     original_name: 'Lost in Space',
//     origin_country: ['US'],
//     original_language: 'en',
//     name: 'Lost in Space',
//     vote_average: 7.6,
//     vote_count: 943,
//     id: 75758,
//     first_air_date: '2018-04-13',
//     poster_path: '/y8NJnTXzb4rio9uvVYFVrXEMofU.jpg',
//     overview:
//       "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers.",
//     genre_ids: [10765, 10759, 18],
//     popularity: 277.301,
//     media_type: 'tv',
//   },
//   {
//     original_language: 'en',
//     original_title: "Ron's Gone Wrong",
//     poster_path: '/gA9QxSravC2EVEkEKgyEmDrfL0e.jpg',
//     id: 482321,
//     video: false,
//     vote_average: 8.2,
//     overview:
//       "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
//     release_date: '2021-10-15',
//     adult: false,
//     backdrop_path: '/axMEROxH94BveBZBfPctWX4qLe4.jpg',
//     vote_count: 94,
//     genre_ids: [16, 878, 10751, 35],
//     title: "Ron's Gone Wrong",
//     popularity: 294.994,
//     media_type: 'movie',
//   },
//   {
//     original_language: 'en',
//     original_title: 'No Time to Die',
//     poster_path: '/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
//     video: false,
//     vote_average: 7.5,
//     title: 'No Time to Die',
//     overview:
//       'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
//     release_date: '2021-09-29',
//     id: 370172,
//     adult: false,
//     backdrop_path: '/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg',
//     vote_count: 2296,
//     genre_ids: [12, 28, 53],
//     popularity: 1947.176,
//     media_type: 'movie',
//   },
//   {
//     origin_country: ['ES'],
//     original_language: 'es',
//     backdrop_path: '/bVUiZVA8iPwdEc0lX5nwEr6MwdM.jpg',
//     poster_path: '/g0wLsOFpvK5nX5hsIAwXHrpnFLI.jpg',
//     name: 'Money Heist: From Tokyo to Berlin',
//     vote_count: 18,
//     first_air_date: '2021-09-03',
//     id: 132719,
//     vote_average: 7.3,
//     overview:
//       'The filmmakers and actors behind "Money Heist" characters like Tokyo and the Professor talk about the emotional and artistic process of filming Money Heist.',
//     genre_ids: [99],
//     original_name: 'La Casa de Papel: de Tokio a Berlín',
//     popularity: 300.663,
//     media_type: 'tv',
//   },
//   {
//     backdrop_path: '/VlHt27nCqOuTnuX6bku8QZapzO.jpg',
//     genre_ids: [28, 12, 878, 14],
//     original_language: 'en',
//     original_title: 'Spider-Man: No Way Home',
//     poster_path: '/5pVJ9SuuO72IgN6i9kMwQwnhGHG.jpg',
//     video: false,
//     vote_average: 0.0,
//     vote_count: 0,
//     overview:
//       'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
//     release_date: '2021-12-15',
//     title: 'Spider-Man: No Way Home',
//     id: 634649,
//     adult: false,
//     popularity: 2880.481,
//     media_type: 'movie',
//   },
//   {
//     original_language: 'ja',
//     original_name: 'ジョジョの奇妙な冒険',
//     origin_country: ['JP'],
//     vote_average: 8.8,
//     first_air_date: '2012-10-06',
//     vote_count: 723,
//     id: 45790,
//     poster_path: '/nFgAjD7DqiMPS290IYL4fAg8k59.jpg',
//     overview:
//       'Follow the intergenerational feud between the Joestar Family and various forces of evil, the most prominent of which is Dio Brando and his followers.',
//     backdrop_path: '/3FYkR2L4aTauQ7bbRFsxKGt8uj6.jpg',
//     name: "JoJo's Bizarre Adventure",
//     genre_ids: [16, 10759, 10765],
//     popularity: 279.759,
//     media_type: 'tv',
//   },
//   {
//     genre_ids: [10749, 35, 18],
//     original_language: 'en',
//     id: 810873,
//     poster_path: '/bfZPNzAwUQZ6FZQi1d136KLr3wl.jpg',
//     title: 'Single All the Way',
//     vote_average: 6.2,
//     overview:
//       'Desperate to avoid his family’s judgment about his perpetual single status, Peter convinces his best friend Nick to join him for the holidays and pretend that they’re now in a relationship. But when Peter’s mother sets him up on a blind date with her handsome trainer James, the plan goes awry.',
//     release_date: '2021-12-02',
//     vote_count: 5,
//     video: false,
//     adult: false,
//     backdrop_path: '/6A5ugY49ukHmMLaMRwkjaKouzCn.jpg',
//     original_title: 'Single All the Way',
//     popularity: 47.244,
//     media_type: 'movie',
//   },
//   {
//     genre_ids: [18],
//     original_language: 'en',
//     id: 777270,
//     poster_path: '/3yD7Swwnk5n4OznZkoXcKhT8bO9.jpg',
//     title: 'Belfast',
//     vote_average: 7.0,
//     overview:
//       'Buddy is a young boy on the cusp of adolescence, whose life is filled with familial love, childhood hijinks, and a blossoming romance. Yet, with his beloved hometown caught up in increasing turmoil, his family faces a momentous choice: hope the conflict will pass or leave everything they know behind for a new life.',
//     release_date: '2021-11-11',
//     vote_count: 17,
//     video: false,
//     adult: false,
//     backdrop_path: '/4RSN2vVKk7M9QhpQfomQjW1JDiU.jpg',
//     original_title: 'Belfast',
//     popularity: 16.341,
//     media_type: 'movie',
//   },
//   {
//     id: 509967,
//     adult: false,
//     backdrop_path: '/eFw5YSorHidsajLTayo1noueIxI.jpg',
//     genre_ids: [28, 53, 35],
//     original_language: 'en',
//     original_title: '6 Underground',
//     poster_path: '/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg',
//     video: false,
//     vote_average: 6.3,
//     vote_count: 3463,
//     overview:
//       'After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.',
//     release_date: '2019-12-10',
//     title: '6 Underground',
//     popularity: 45.355,
//     media_type: 'movie',
//   },
//   {
//     genre_ids: [16, 14, 28, 12],
//     original_language: 'zh',
//     id: 795607,
//     poster_path: '/1j0KEGm2fSihFwl1sgM5mu2XE3S.jpg',
//     title: 'Green Snake',
//     vote_average: 7.7,
//     overview:
//       "While trying to free her sister from Fahai's clutches, Xiao Qing/Verta winds up in a dystopian city and meets a mysterious man who can't recall his past lives.  The sequel to Light Chaser's animated film about the legend of the White Snake.",
//     release_date: '2021-07-23',
//     vote_count: 11,
//     video: false,
//     adult: false,
//     backdrop_path: '/5QWHHjwIPoaJYHNVL0D00bxDUUC.jpg',
//     original_title: '白蛇2：青蛇劫起',
//     popularity: 17.032,
//     media_type: 'movie',
//   },
//   {
//     original_language: 'en',
//     original_title: 'Dune',
//     poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
//     video: false,
//     vote_average: 8.0,
//     overview:
//       "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
//     release_date: '2021-09-15',
//     id: 438631,
//     title: 'Dune',
//     adult: false,
//     backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
//     vote_count: 4450,
//     genre_ids: [878, 12],
//     popularity: 1014.218,
//     media_type: 'movie',
//   },
//   {
//     backdrop_path: '/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg',
//     genre_ids: [10765, 18, 10759],
//     first_air_date: '2021-11-18',
//     original_language: 'en',
//     id: 71914,
//     poster_path: '/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg',
//     vote_average: 8.0,
//     original_name: 'The Wheel of Time',
//     origin_country: ['US'],
//     vote_count: 374,
//     overview:
//       'Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.',
//     name: 'The Wheel of Time',
//     popularity: 2459.594,
//     media_type: 'tv',
//   },
//   {
//     original_language: 'en',
//     original_title: 'Shang-Chi and the Legend of the Ten Rings',
//     poster_path: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
//     video: false,
//     vote_average: 7.9,
//     title: 'Shang-Chi and the Legend of the Ten Rings',
//     overview:
//       'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
//     release_date: '2021-09-01',
//     id: 566525,
//     adult: false,
//     backdrop_path: '/cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
//     vote_count: 3879,
//     genre_ids: [28, 12, 14],
//     popularity: 3492.685,
//     media_type: 'movie',
//   },
//   {
//     adult: false,
//     backdrop_path: '/4v64DRdMtx8fQGUZ7hE1R2iChCr.jpg',
//     genre_ids: [35, 10749],
//     id: 763152,
//     original_language: 'es',
//     original_title: 'Donde caben dos',
//     overview:
//       'Multiple stories about the oscillating world of couple relationships and how difficult it can be to separate sex from love.',
//     poster_path: '/rpp4L7UIdXDAxn5UQBs2FkpTgWA.jpg',
//     release_date: '2021-07-30',
//     title: 'More the Merrier',
//     video: false,
//     vote_average: 6.0,
//     vote_count: 7,
//     popularity: 11.827,
//     media_type: 'movie',
//   },
//   {
//     adult: false,
//     backdrop_path: '/1WQ4bHXzS7DpGppkS2PcpFvpY7T.jpg',
//     id: 13189,
//     genre_ids: [18, 14, 10770, 10751],
//     original_language: 'en',
//     original_title: 'A Christmas Carol',
//     poster_path: '/kGmpIkjVRWHQ97AiEXC0pLt5VtY.jpg',
//     video: false,
//     vote_average: 7.3,
//     overview:
//       'An old bitter miser who makes excuses for his uncaring nature learns real compassion when three ghosts visit him on Christmas Eve.',
//     release_date: '1984-10-09',
//     vote_count: 204,
//     title: 'A Christmas Carol',
//     popularity: 29.486,
//     media_type: 'movie',
//   },
// ];

import { genres } from '../common/genres';

export function dataFormat(data, genres) {
  const formattedData = [...data];

  formattedData.forEach(item => {
    if (item.name) {
      item.title = item.name;
    }

    if (item.release_date) {
      item.release_date = item.release_date.slice(0, 4);
    } else if (item.first_air_date) {
      item.release_date = item.first_air_date.slice(0, 4);
    }

    item.popularity = Number(item.popularity).toFixed(1);

    const genresArray = item.genre_ids.reduce((acc, id) => {
      let genreToFind = genres.find(genre => genre.id === id);
      if (genreToFind) {
        const genreName = genreToFind.name;
        acc.push(genreName);
      }
      return acc;
    }, []);

    if (genresArray.length >= 3) {
      genresArray.splice(3);
      genresArray[2] = 'Other';
    }

    item.genres = genresArray;
  });

  return formattedData;
}

// console.log(dataFormat(data, genres));


// const formattedData = dataFormat(data, genres);
// import itemsTemplate from '../../templates/movies-items.hbs';
// document
//   .querySelector('.list-card')
//   .insertAdjacentHTML('afterbegin', itemsTemplate({ ...formattedData }));
