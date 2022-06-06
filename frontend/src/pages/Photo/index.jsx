import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPhoto } from '../../slices/photoSlice';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { uploads } from '../../utils/config';

import { PhotoItem } from '../../components/PhotoItem';
import { Message } from '../../components/Message';

import './styles.css';

export function Photo() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const { photo, loading, error, message } = useSelector(state => state.photo);

  // comments

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // like and comment

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
    </div>
  );
}
