import { Card, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";

export default function HomeListCategory({ data }) {
  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60;

    const end = new Date();
    end.setUTCHours(23, 59, 59, 999);
    const countDown = new Date(end).getTime();
    var timer = setInterval(() => {
      let start = new Date().getTime(),
        distance = countDown - start;
      (document.getElementById("hours").innerText = Math.floor(
        distance / hour
      )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClickProduct = (product) => {
    if (product) {
      const currentOrder = window.localStorage.getItem("OrderProduct");
      if (!currentOrder) {
        window.localStorage.setItem("OrderProduct", JSON.stringify([product]));
        window.alert("Đã thêm sản phẩm vào giỏ hàng");
      } else {
        const checkCart = JSON.parse(currentOrder).findIndex((item) => {
          return item.productId === product.productId;
        });
        if (checkCart.toString() === "-1") {
          const dataAddToCard = [...JSON.parse(currentOrder), product];
          window.localStorage.setItem(
            "OrderProduct",
            JSON.stringify(dataAddToCard)
          );
          window.alert("Đã thêm sản phẩm vào giỏ hàng");
        } else {
          window.alert("Đã tồn tại sản phẩm trong giỏ hàng");
        }
      }
    }
  };

  const FlashSale = (data) => {
    return (
      <>
        <div className="fs-content-header">
          <div className="fs-header-left">đang bán</div>
          <div className="fs-header-mid">
            Kết thúc trong <div id="hours"></div>:<div id="minutes"></div>:
            <div id="seconds"></div>
          </div>
          <a href="" className="fs-header-right">
            Mua sắm toàn bộ sản phẩm{" "}
          </a>
        </div>
        <div className="fs-content-body">
          <Row gutter={[24, 0]}>
            {data &&
              data.data.data.map((item, index) => (
                <Col key={index} span={4}>
                  <Card
                    hoverable
                    cover={
                      <Image alt="example" src={item.itemImg} preview={false} />
                    }
                    onClick={() => handleClickProduct(item)}
                  >
                    <p className="card-title">{item.itemTitle}</p>
                    <div className="card-price">
                      <span className="price">{item.itemDiscountPrice}</span>
                      <span className="currence"> {item.currency}</span>
                    </div>
                    <div className="card-origin-price">
                      <span className="price">{item.itemPrice}</span>
                      <span className="currence"> {item.currency}</span>
                      <span className="discount"> {item.itemDiscount}</span>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </>
    );
  };

  const OfficialStore = (data) => {
    return (
      <>
        <div className="official-store-content-body">
          <Row gutter={[24, 0]}>
            {data &&
              data.data.data.map((item, index) => (
                <Col key={index} span={4}>
                  <Card
                    hoverable
                    cover={
                      <Image alt="example" src={item.shopImg} preview={false} />
                    }
                  >
                    <div className="card-official-stores-brand-overlay"></div>
                    <div className="brand-logo">
                      <Image
                        alt="example"
                        src={item.brandLogo}
                        preview={false}
                      />
                    </div>
                    <div className="card-title">
                      <span className="name">{item.shopName}</span>
                      <br />
                      <span className="des"> {item.shopSlogan}</span>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </>
    );
  };

  const CategoryList = (data) => {
    return (
      <>
        <div className="category-list-content-body">
          {data &&
            data.data.data.map((item) => (
              <Col key={item.id} span={3}>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt="example"
                      src={item.categoryImg}
                      preview={false}
                    />
                  }
                >
                  <div className="card-title">
                    <span className="name">{item.categoryName}</span>
                  </div>
                </Card>
              </Col>
            ))}
        </div>
      </>
    );
  };

  return (
    <div className="home-category">
      <div className="home-category-header">
        <h3>{data.category_name}</h3>
      </div>
      <div className="home-category-content">
        {data && data.id === "1" && <FlashSale data={data}></FlashSale>}
        {data && data.id === "2" && <OfficialStore data={data}></OfficialStore>}
        {data && data.id === "3" && <CategoryList data={data}></CategoryList>}
      </div>
    </div>
  );
}
