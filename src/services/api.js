import axios from 'axios';

const APIkey = '30462047-0f8848268f4f2ac11df1ed33d';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const getImages = async (query, page) => {
  const params = `&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await axios.get(`?q=${query}${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
