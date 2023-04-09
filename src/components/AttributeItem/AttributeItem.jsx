import {useContext, useState, useEffect} from 'react';
import style from './AttributeItem.module.css';
import {Select, Input, Button} from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import {attributeData} from "../../data/attributeData";
import {AttributeContext} from "../../context/AttributeContext";

const AttributeItem = ({attr}) => {
    const [selected, setSelected] = useState('');
    const [value, setValue] = useState('');

    const {deleteAttribute, editAttribute, isSave} = useContext(AttributeContext);


    useEffect(() => {
        editAttribute(attr.id, selected, value);
    }, [isSave]);


    return (
        <div className={style.item}>
            <Select style={{width: '200px'}}
                    selected={selected}
                    onChange={value => setSelected(value)}
                    options={[...attributeData]}
                    defaultValue="Тип атрибута"/>
            <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                style={{width: '350px'}}/>
            <Button onClick={() => deleteAttribute(attr.id)}>
                <DeleteOutlined/>
            </Button>
        </div>
    );
};

export default AttributeItem;
