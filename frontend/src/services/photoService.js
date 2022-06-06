import { api, requestConfig } from '../utils/config';

// Publish an user photo

async function publishPhoto(data, token) {
  const config = requestConfig('POST', data, token, true);

  try {
    const res = await fetch(`${api}/photos`, config)
      .then(res => res.json())
      .catch(err => err);

    return res;
  } catch (error) {
    console.log(error);
  }
}

// Get user photos
async function getUserPhotos(id, token) {
  const config = requestConfig('GET', null, token);

  try {
    const res = await fetch(`${api}/photos/user/${id}`, config)
      .then(res => res.json())
      .catch(err => err);

    return res;
  } catch (error) {
    console.log(error);
  }
}

// Delete a photo
async function deletePhoto(id, token) {
  const config = requestConfig('DELETE', '', token);

  try {
    const res = await fetch(`${api}/photos/${id}`, config)
      .then(res => res.json())
      .catch(err => err);

    return res;
  } catch (error) {
    console.log(error);
  }
}

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto
};

export default photoService;
