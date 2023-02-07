import { Card, Image } from "antd";
import React from "react";
const { Meta } = Card;
export default function HomeListCategory({ data }) {
  const FlashSale = (data) => {
    return (
      <>
        <div className="fs-content-header">
          <div className="fs-header-left">đang bán</div>
          <div className="fs-header-mid">Kết thúc trong </div>
          <a href="" className="fs-header-right">
            Mua sắm toàn bộ sản phẩm{" "}
          </a>
        </div>
        <div className="fs-content-body">
          {data &&
            data.data.data.map((item, index) => (
              <Card
                key={index}
                hoverable
                cover={
                  <Image alt="example" src={item.itemImg} preview={false} />
                }
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
            ))}
        </div>
      </>
    );
  };

  const OfficialStore = (data) => {
    console.log(data);
    return (
      <>
        <div className="official-store-content-body">
          {data &&
            data.data.data.map((item, index) => (
              <Card
                key={index}
                hoverable
                cover={
                  <Image alt="example" src={item.shopImg} preview={false} />
                }
              >
                <div className="card-official-stores-brand-overlay"></div>
                <div className="brand-logo">
                  <Image alt="example" src={item.brandLogo} preview={false} />
                </div>
                <div className="card-title">
                  <span className="name">{item.shopName}</span>
                  <br />
                  <span className="des"> {item.shopSlogan}</span>
                </div>
              </Card>
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
      </div>
    </div>
  );
}
