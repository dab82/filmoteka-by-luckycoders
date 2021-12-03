//data = [{}, {}, {}]
//genres = [{}, {}, {}]
export function dataFormat(data, genres) {
  const formattedData = [...data];
  formattedData.forEach(item => {
    if (item.release_date) {
      item.release_date = item.release_date.slice(0, 4);
    } else if (item.first_air_date) {
      item.release_date = item.first_air_date.slice(0, 4);
      delete item.first_air_date;
    }

    item.popularity = item.popularity.toFixed(1);

    item.genres = item.genre_ids.reduce((acc, id) => {
      let genreToFind = genres.find(genre => genre.id === id);
      if (genreToFind) {
        const genreName = genreToFind.name;
        acc.push(genreName);
      }
      return acc;
    }, []);
    delete item.genre_ids;
  });

  return formattedData;
}
