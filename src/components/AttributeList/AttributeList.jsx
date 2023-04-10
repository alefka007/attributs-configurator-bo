import React from "react";
import style from "./AttributeList.module.css";
import AttributeItem from "../AttributeItem/AttributeItem";
import { useAttributeStore } from "../../store/attributeStore";

const AttributeList = () => {
  const attributes = useAttributeStore((state) => state.attributes);

  return (
    <div className={style.list}>
      {attributes.map((attr, index) => (
        <AttributeItem
          index={index}
          attributes={attributes}
          attr={attr}
          key={attr.id}
        />
      ))}
    </div>
  );
};

export default AttributeList;
