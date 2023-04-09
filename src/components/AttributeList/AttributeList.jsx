import React from 'react';
import style from './AttributeList.module.css';
import AttributeItem from "../AttributeItem/AttributeItem";

const AttributeList = ({attributes}) => {
    return (
        <div className={style.list}>
            {attributes.map(attr => (
                <AttributeItem attr={attr} key={attr.id} />
            ))}
        </div>
    );
};

export default AttributeList;
