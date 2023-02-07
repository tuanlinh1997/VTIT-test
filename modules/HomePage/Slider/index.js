import { Carousel, Image } from "antd";
import React from "react";

export default function Slider({ banner }) {
  return (
    <Carousel effect="fade">
      {banner &&
        banner.map((item) => (
          <div key={item.id}>
            <Image
              className="banner-img"
              src={item.src}
              preview={false}
              alt=""
            />
          </div>
        ))}
    </Carousel>
  );
}
