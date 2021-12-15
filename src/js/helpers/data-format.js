export function dataFormat(data, genres) {
  const formattedData = [...data];

  formattedData.forEach(item => {
    if (item.name) {
      item.title = item.name;
    }

    if (item.original_name) {
      item.original_title = item.original_name;
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
        acc.push(genreToFind.name);
      }
      return acc;
    }, []);

    item.fullGenres = genresArray.map(genre => genre);
    if (item.fullGenres.length === 0) {
      item.fullGenres[0] = 'Genre unknown';
    }

    if (genresArray.length > 3) {
      genresArray.splice(3);
      genresArray[2] = 'Other';
    } else if (genresArray.length === 0) {
      genresArray[0] = 'Genre unknown';
    }

    item.genres = genresArray;

    delete item.first_air_date;
    delete item.genre_ids;
    delete item.adult;
    delete item.video;
    delete item.backdrop_path;
    delete item.media_type;
    delete item.original_language;
    delete item.original_name;
    delete item.origin_country;
    delete item.name;
  });

  return formattedData;
}
