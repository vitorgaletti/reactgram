import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { uploads } from '../../utils/config';
import Message from '../../components/Message';

import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';

import './styles.css';
import { getUserDetails } from '../../slices/userSlice';

export function Profile() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.user);
  const { user: userAuth } = useSelector(state => state.auth);

  // photo

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <>
            <img
              src={`${uploads}/users/${user.profileImage}`}
              alt={user.name}
            />
            <div className="profile-description">
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
