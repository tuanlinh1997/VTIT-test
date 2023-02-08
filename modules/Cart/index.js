import { DeleteOutlined } from "@ant-design/icons";
import { Button, Image, InputNumber, Table } from "antd";
import React, { useEffect, useState } from "react";
import { CartModulesStyles } from "./index.style";

function CartModules() {
  const [orders, setOrders] = useState();
  const [pickItems, setPickItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [quantity, setChangeQuantity] = useState(0);

  const products =
    typeof window !== "undefined" &&
    window.localStorage.getItem("OrderProduct");
  const columns = [
    {
      title: "Chọn tất cả sản phẩm",
      dataIndex: "img",
      render: (record) => (
        <Image src={record} alt="" preview={false} width="80px"></Image>
      ),
      width: "15%",
    },
    {
      dataIndex: "name",
      render: (text) => <div className="product-name">{text}</div>,
      width: "30%",
    },
    {
      dataIndex: "price",
      render: (record) => <div className="product-price">{record}</div>,
      width: "10%",
    },
    {
      render: (record) => (
        <InputNumber
          onChange={onChangeQuantity}
          defaultValue={1}
          min={1}
          id={record.key}
        ></InputNumber>
      ),
    },
  ];
  const onChangeQuantity = (value) => {
    setChangeQuantity(quantity + 1);
  };
  useEffect(() => {
    if (products) {
      const data = [];
      JSON.parse(products).map((item) => {
        data.push({
          key: item.productId,
          img: item.itemImg,
          name: item.itemTitle,
          price: item.itemDiscountPrice + " " + item.currency,
          finalPrice: item.itemDiscountPrice,
          productId: item.productId,
        });
      });
      setOrders(data);
    }
  }, [products]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      let sum = 0;
      selectedRows.map((item) => {
        sum =
          sum +
          Number(item.finalPrice) *
            Number(document.getElementById(item.key).value);
      });

      setSum(sum);
      setPickItems(selectedRows);
    },
  };
  const handleDelete = () => {
    const products =
      typeof window !== "undefined" &&
      window.localStorage.getItem("OrderProduct");

    let newArr = [...JSON.parse(products)];
    if (products) {
      for (let i = 0; i < pickItems.length; i++) {
        let k = JSON.parse(products).findIndex(
          (item) => item.productId === pickItems[i].productId
        );
        if (k != -1) {
          newArr.splice(k, 1, "delete");
        }
      }
      let a = newArr.filter((item) => item != "delete");

      setOrders(a);
      window.localStorage.setItem("OrderProduct", JSON.stringify(a));
      setSum(0);
    }
  };
  useEffect(() => {
    if (pickItems) {
      let sum = 0;
      pickItems.map((item) => {
        sum =
          sum +
          Number(item.finalPrice) *
            Number(document.getElementById(item.key).value);
      });
      setSum(sum);
    }
  }, [pickItems, quantity]);
  return (
    <CartModulesStyles>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={orders}
        pagination={false}
        key=""
      />
      <div className="icon-delete" onClick={handleDelete}>
        <DeleteOutlined style={{ fontSize: "1.5rem" }} />
        <span className="text-delete">xóa</span>
      </div>

      <div className="sumary">
        <div className="title">Thông tin đơn hàng</div>
        <div className="tmp-sum">
          <span>Tạm tính({pickItems.length} sản phẩm)</span>
          <span>
            {(sum * 1000).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <div className="fee-shipping">
          <span>Phí vận chuyển</span>
          <span>
            {sum
              ? (10000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : (0).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </span>
        </div>
        <div className="total">
          <span>Tổng cộng</span>
          <span className="sum">
            {sum
              ? Math.floor((sum + 10) * 1000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : (0).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </span>
        </div>
        <div className="vat">đã báo gồm VAT (nếu có)</div>
        <Button>Xác nhận giỏ hàng ({pickItems.length})</Button>
      </div>
    </CartModulesStyles>
  );
}

export default CartModules;
