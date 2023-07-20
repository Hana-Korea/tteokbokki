import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Navbar from './Navbar';

function Header() {
  return (
    <div className='flex'>
      <div className='flex items-center w-[50rem] h-[10rem]'>
        <div className='w-[15rem] h-[10rem]'>
          <img src='images/logo_white.png' />
        </div>
        <div className='text-[3rem]  w-[6rem] sm:invisible md:visible'>
          양떡
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <Navbar />
        <Avatar />
        <div className='w-[17rem] flex items-center h-full'>
          <Link to='/login'>
            <div className='text-[1.4rem]'>회원가입/로그인</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
