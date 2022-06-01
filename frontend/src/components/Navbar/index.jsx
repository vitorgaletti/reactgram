import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../slices/authSlice';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill
} from 'react-icons/bs';

import './styles.css';

export function Navbar() {
  const { auth } = useAuth();
  const { user } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  }

  return (
    <nav id="nav">
      <Link to="/">
        <h2>ReactGram</h2>
      </Link>
      <form id="search-form">
        <BsSearch />
        <input type="text" placeholder="Pesquisar" />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/profile" />
              <BsFillPersonFill />
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>

            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
