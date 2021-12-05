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
