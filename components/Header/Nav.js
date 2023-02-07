import { Image } from "antd";
import { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "./NavLink";
import { NavBarStyle } from "./index.style";
// import { userService } from "services";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

export { Nav };

function Nav() {
  const [user, setUser] = useState(false);
  const accessToken =
    typeof window !== "undefined" && window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [accessToken]);

  const logout = async () => {
    const logout = await axios.get("/api/auth/logout");
    if (logout.status === 200) {
      typeof window !== "undefined" &&
        window.localStorage.removeItem("accessToken");
      setUser(false);
    }
  };

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
        <NavLink href="/cart" className="nav-cart">
          <ShoppingCartOutlined style={{ fontSize: "32px" }} />
        </NavLink>
        {!user ? (
          <NavLink href="/login" className="nav-login ">
            Đăng Nhập
          </NavLink>
        ) : (
          <a onClick={logout} className="nav-logout">
            Đăng xuất
          </a>
        )}
        {/* <a onClick={logout} className="nav-item nav-link">
          Logout
        </a> */}
      </div>
    </NavBarStyle>
  );
}
