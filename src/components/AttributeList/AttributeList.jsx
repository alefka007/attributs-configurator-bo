import React from "react";
import style from "./AttributeList.module.css";
import AttributeItem from "../AttributeItem/AttributeItem";
import { useAttributeStore } from "../../store/attributeStore";

const AttributeList = () => {
  const attributes = useAttributeStore((state) => state.attributes);

  return (
    <div className={style.list}>
      {attributes.map((attribute, index) => (
        <AttributeItem
          index={index}
          attributes={attributes}
          attribute={attribute}
          key={attribute.id}
        />
      ))}
    </div>
  );
};

export default AttributeList;
