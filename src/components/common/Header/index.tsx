/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.scss";

// const Header: React.FC = () => {
//   return (
//     <header className={styles.header}>
//       <div className="container">
//         <div className={styles.row}>
//           <Link className={styles.logo} to="/" />
//           <nav className={styles.nav}>
//             <ul className={styles.list}>
//               <li>
//                 <NavLink to="/product">продукты</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">о нас</NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <Link className={styles.logo} to="/" />
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <NavLink to="/product">продукты</NavLink>
              </li>
              <li>
                <NavLink to="/about">о нас</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
