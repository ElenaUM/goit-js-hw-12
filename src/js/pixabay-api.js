import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pixabay.com',
});

const END_POINT = '/api/';

export async function getPhotos(query, page) {
  query = query.toLowerCase().split(' ').join('+').toString();

  const params = {
    key: '44587704-58c585ec777ca11520d849bef',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15,
  };

  const result = await api.get(END_POINT, { params });
  return result.data;
}
