import styles from './NavBar.module.scss';
import cartImage from '../assets/cart.png';
import userIcon from '../assets/user-icon.png';
import { useContext, useEffect, useState } from 'react';
import { PageChangerContext } from '../_contexts';
import { CartPage } from '../page/CartPage';
import { WelcomePage } from '../page/WelcomePage';

const MainComponent = () => {
  const [user, setUser] = useState(undefined);
  const {changePage}  = useContext(PageChangerContext);

  return (
    <div id={styles.NavBar} className='flex-container'>
      <div id={styles.Brand} onClick={() => changePage(<WelcomePage />)}>
        <span>bsBooks</span>
      </div>
      <div id={styles.NavButtons}>
        <div>
          <button>Sản phẩm</button>
        </div>
        <div>
          <button>Điều khoản</button>
        </div>
        <div>
          <button>Liên hệ</button>
        </div>
        <div>
          <button>Admin</button>
        </div>
      </div>
      <div id={styles.SearchBar}>
        {/* <SearchBar
          submitHandler={handleSearch}
          changeHandler={e => setSearchPhrase(e.target.value)}
        /> */}
      </div>
      <div id={styles.UserButtons}>
        <button onClick={() => changePage(<CartPage />)}>
          <img src={cartImage} alt='' />
        </button>
        <button >
          <img src={userIcon} alt='' />
          {user ? (
            <div className={styles.dropdown}>
              <div>
                <button>Trang cá nhân</button>
              </div>
              <div>
                <button>
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export { MainComponent as NavBar };
