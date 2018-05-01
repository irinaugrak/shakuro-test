import React from 'react';
import {Link} from 'react-router-dom';

import './NotFound.css';

const NotFound = () =>
  <div className='not-found'>
    <h1 className='not-found__title'>404 Страница не найдена</h1>
    <p className='not-found__text'>Для продолжения работы вернитесь на <Link className='not-found__link' to='/'>главную страницу</Link></p>
  </div>;

export default NotFound;