import { useState, useEffect } from 'react';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';

import { useSelector, useDispatch } from 'react-redux';
import { getPhoto, like } from '../../slices/photoSlice';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { uploads } from '../../utils/config';

import { PhotoItem } from '../../components/PhotoItem';
import { Message } from '../../components/Message';

import './styles.css';
import { LikeContainer } from '../../components/LikeContainer';

export function Photo() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector(state => state.auth);

  const { photo, loading, error, message } = useSelector(state => state.photo);

  // comments

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  function handleLike() {
    dispatch(like(photo._id));

    resetMessage();
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
    </div>
  );
}
