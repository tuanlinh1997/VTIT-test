import { Col, Image, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeListCategory from "./HomeListCategory";
import { HomePageStyle } from "./index.style";
import Slider from "./Slider";

const HomePage = () => {
  const [banner, setBanner] = useState();
  const [category, setCategory] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("api/banner");
      const category = await axios.get("api/category");
      const banner = data;
      return { banner, category };
    };
    fetchData()
      .then((res) => {
        const result = res;
        console.log(result, "resutl");
        setBanner(result.banner.data.data);
        setCategory(result.category.data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <HomePageStyle>
      <Slider banner={banner} />
      <div className="card-channels">
        <Row>
          <Col span={6}>
            <div className="card-channels-item">
              <div className="card-channels-icon">
                <Image
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png"
                  preview={false}
                  alt=""
                />
              </div>
              <div className="card-channels-name">LazMall</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-channels-item">
              {" "}
              <div className="card-channels-icon">
                <Image
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png"
                  preview={false}
                  alt=""
                />
              </div>
              <div className="card-channels-name">Mã Giảm Giá</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-channels-item">
              {" "}
              <div className="card-channels-icon">
                <Image
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png"
                  preview={false}
                  alt=""
                />
              </div>
              <div className="card-channels-name">Nạp Thẻ & eVocher</div>
            </div>
          </Col>
          <Col span={6}>
            <div className="card-channels-item">
              {" "}
              <div className="card-channels-icon">
                <Image
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png"
                  preview={false}
                  alt=""
                />
              </div>
              <div className="card-channels-name">LazGlobal</div>
            </div>
          </Col>
        </Row>
      </div>
      {category &&
        category.map((item) => <HomeListCategory key={item.id} data={item} />)}
    </HomePageStyle>
  );
};
export default HomePage;
