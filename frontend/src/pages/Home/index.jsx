import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos, like } from '../../slices/photoSlice';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

import { Link } from 'react-router-dom';

import { LikeContainer } from '../../components/LikeContainer';
import { PhotoItem } from '../../components/PhotoItem';

import './styles.css';

export function Home() {
  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector(state => state.auth);

  const { photos, loading } = useSelector(state => state.photo);

  // Load all photos

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  // Like a photo
  function handleLike(photo) {
    dispatch(like(photo._id));

    resetMessage();
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      {photos &&
        photos.map(photo => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      {photos?.length === 0 && (
        <h2>
          Ainda não há fotoso publicadas,
          <Link to={`/users/${user._id}`}>clique aqui</Link>
        </h2>
      )}
    </div>
  );
}
