import { Image } from "antd";
import { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "./NavLink";
import { NavBarStyle } from "./index.style";
// import { userService } from "services";
import { Input } from "antd";
const { Search } = Input;

export { Nav };

function Nav() {
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const subscription = userService.user.subscribe((x) => setUser(x));
  //     return () => subscription.unsubscribe();
  //   }, []);

  //   function logout() {
  //     userService.logout();
  //   }

  // only show nav when logged in
  //   if (!user) return null;

  return (
    <NavBarStyle className="navbar">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-logo">
          <Image
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
            preview={false}
            alt=""
          />
        </NavLink>
        <NavLink href="" className="nav-search">
          <Search
            placeholder="Tìm kiếm trên Lazada"
            onSearch={null}
            enterButton
            size="large"
          />
        </NavLink>
        <NavLink href="/cart" className="nav-item nav-link">
          <ShoppingCartOutlined style={{ fontSize: "32px" }} />
        </NavLink>

        {/* <a onClick={logout} className="nav-item nav-link">
          Logout
        </a> */}
      </div>
    </NavBarStyle>
  );
}
