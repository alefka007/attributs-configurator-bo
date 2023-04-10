import { useState, useEffect } from "react";
import style from "./AttributeItem.module.css";
import { Select, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { attributeData } from "../../data/attributeData";
import { useAttributeStore } from "../../store/attributeStore";

const AttributeItem = ({ attr, attributes, index }) => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");

  const deleteAttribute = useAttributeStore((state) => state.deleteAttribute);

  if (attributes.length > 0) {
    attributes[index].name = value;
    attributes[index].type = selected;
  }


  return (
    <div className={style.item}>
      <Select
        style={{ width: "200px" }}
        onChange={(selected) => setSelected(selected)}
        options={[...attributeData]}
        defaultValue="Тип атрибута"
      />
      <Input
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "350px" }}
      />
      <Button onClick={() => deleteAttribute(attr.id)}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default AttributeItem;
