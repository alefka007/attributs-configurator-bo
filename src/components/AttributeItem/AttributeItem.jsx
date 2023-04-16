import { useState, useEffect } from "react";
import style from "./AttributeItem.module.css";
import { Select, Input, Avatar, Checkbox } from "antd";
import { useAttributeStore } from "../../store/attributeStore";
import { ReactComponent as BoolIcon } from '../../assets/boolean.svg';
import { ReactComponent as DateIcon } from '../../assets/date.svg';
import { ReactComponent as LinkIcon } from '../../assets/link.svg';
import { ReactComponent as StrIcon } from '../../assets/string.svg';
import { ReactComponent as NumIcon } from '../../assets/number.svg';

import { ReactComponent as DelIcon } from '../../assets/delete.svg';
import { ReactComponent as CopyIcon } from '../../assets/copy.svg';

import { ReactComponent as DelActiveIcon } from '../../assets/del-active.svg';
import { ReactComponent as CopyActiveIcon } from '../../assets/copy-active.svg';
import { ReactComponent as DangerActiveIcon } from '../../assets/danger-active.svg';
import { ReactComponent as DangerIcon } from '../../assets/danger.svg';

const items = [
  { value: 'Строка', label: 'Строка', icon: <StrIcon /> },
  { value: 'Число', label: 'Число', icon: <NumIcon /> },
  { value: 'Дата', label: 'Дата', icon: <DateIcon /> },
  { value: 'Логический', label: 'Логический', icon: <BoolIcon /> },
  { value: 'Ссылка', label: 'Ссылка', icon: <LinkIcon /> }
];
const { Option } = Select;

const AttributeItem = ({ attribute, attributes, index }) => {

  const [selected, setSelected] = useState(attribute.type);
  const [value, setValue] = useState(attribute.name);
  const [active, setActive] = useState(null);

  const { deleteAttribute, updateChecked } = useAttributeStore((state) => state);

  const deleteClickHandler = (id) => {
    if (id !== 'required') {
      deleteAttribute(id)
    }

  }

  const copyClickHandler = (id) => {

  }

  const attributeClickHandler = (id) => {
    setActive(id)
    console.log(id)
  }

  if (attributes.length > 0) {
    attributes[index].name = value;
    attributes[index].type = selected;
  }


  return (
    <div
      onClick={() => attributeClickHandler(attribute.id)}
      className={active === attribute.id ? style.item + ' ' + style.active : style.item}>
      <div className={style.topRow}>
        <Input
          style={{ height: '25px' }}
          disabled={attribute.disabled}
          value={attribute.name}
          placeholder="Атрибут"
          onChange={(e) => setValue(e.target.value)}
        />
        <span
          onClick={() => copyClickHandler(attribute.id, index)}>
          {attribute.disabled ? <CopyIcon /> : <CopyActiveIcon />}
        </span>
        <span
          onClick={() => deleteClickHandler(attribute.id)}>
          {attribute.disabled ? <DelIcon /> : <DelActiveIcon />}
        </span>
      </div>
      <div className={style.bottomRow}>
        <Select
          disabled={attribute.disabled}
          className={style.select}
          style={{ width: "198px" }}
          onChange={(selected) => setSelected(selected)}
          defaultValue={attribute.type ? attribute.type : "Тип атрибута"}
        >
          {items.map((i) => (
            <Option
              key={i.value} value={i.value}
              label={i.label}>
              <Avatar style={{ background: 'transparent' }}
                icon={i.icon} size="small" />
              {i.value}
            </Option>
          ))}
        </Select>
        <Checkbox
          onChange={() => updateChecked(attribute.id)}
          disabled={attribute.disabled}
          checked={attribute.checked} />
        {attribute.checked ? <DangerActiveIcon /> : <DangerIcon />}
      </div>

    </div>
  );
};

export default AttributeItem;
