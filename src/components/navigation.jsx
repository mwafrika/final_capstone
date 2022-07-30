import React from 'react';
import {
  MdFacebook,
  MdOutlineEmail,
  MdCall,
  MdOutlineLanguage,
  MdOutlineBuildCircle,
} from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/user';
import logo from '../assets/images/motor-logo.png';

export default function navigation() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout(navigate));
  }

  return (
    <>
      <div className='row-span-2 flex justify-center'>
        <img
          className='self-center'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='row-span-4 flex justify-center
                     sm:max-h-[990px]'
      >
        <div className='self-center w-full'>
          <ul className='flex flex-col gap-3'>
            <li className='activeflex justify-center hover:bg-main' key='bike_link'>
              <NavLink to='/bikes' className='w-full p-1 flex justify-center'>Bikes</NavLink>
            </li>
            {
              user && (
                <>
                  <li className='flex justify-center hover:bg-main hover:text-white' key='add_bike_link'>
                    <NavLink to='/add-bike' className='w-full p-1 flex justify-center'>Add Bike</NavLink>
                  </li>
                  <li className='flex justify-center hover:bg-main hover:text-white' key='reservation_link'>
                    <NavLink to='/reservations' className='w-full p-1 flex justify-center'>Reservations</NavLink>
                  </li>
                  <li className='flex justify-center hover:bg-main hover:text-white' key='logout_link'>
                    <button
                      type='button'
                      onClick={() => handleLogout()}
                      className='w-full p-2 flex justify-center'
                    >
                      Logout
                    </button>
                  </li>
                </>
              )
            }
            {
              (user === null) && (
                <>
                  <li className='flex justify-center hover:bg-main hover:text-white' key='login_link'>
                    <NavLink to='/login' className='w-full p-1 flex justify-center'>Login</NavLink>
                  </li>
                  <li className='flex justify-center hover:bg-main hover:text-white' key='registration_link'>
                    <NavLink to='/registration' className='w-full p-1 flex justify-center'>Registration</NavLink>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
      <div className='row-span-2 justify-self-center self-end h-3/4'>
        <div className='grid grid-rows-2 gap-2'>
          <ul className='flex gap-2 justify-center'>
            <li>
              <MdFacebook />
            </li>
            <li>
              <MdOutlineEmail />
            </li>
            <li>
              <MdCall />
            </li>
            <li>
              <MdOutlineLanguage />
            </li>
            <li>
              <MdOutlineBuildCircle />
            </li>
          </ul>
          <footer>
            <p>&#169; 2020 All right Reserved</p>
          </footer>
        </div>
      </div>
    </>
  );
}
