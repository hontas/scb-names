const toJson = (resp) => resp.json();

export const getNewbornNameTopList = () =>
  fetch('http://localhost:3000/api/names').then(toJson);

export const getNewbornNameTopListByYear = (year) =>
  fetch(`http://localhost:3000/api/names?year=${year}`).then(toJson);
