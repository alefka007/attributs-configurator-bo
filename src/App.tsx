import { useState } from "react";
import "./App.css";
import './ant.css';
import AttributeList from "./components/AttributeList/AttributeList";
import { Button, Drawer, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAttributeStore } from "./store/attributeStore";

const App = (): JSX.Element => {
  const { attributes, addAttribute, updateAttribute, } = useAttributeStore((state) => state);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const saveAttributesChange = () => {
    updateAttribute(attributes)
  }


  return (
    <div className="App">
      <Button
        onClick={showDrawer}
        style={{ width: 50, height: 50 }}
        shape="circle"
        className="addBtn"
      >
        <PlusOutlined />
      </Button>
      <Drawer
        title="Basic Drawer"
        onClose={onClose}
        open={open}
        footer={
          <div className="btnGroup">
            <Button onClick={onClose}>Отменить</Button>
            <Button
              onClick={saveAttributesChange}
              style={{ width: 150 }}
            >
              Сохранить
            </Button></div>

        }
      >
        <div className="inputGroup">
          <label>Название: <Input placeholder="Впишите категорию" /></label>
          <label>Описание: <Input placeholder="Впишите описание" /></label>
        </div>
        <div className="addAttributeBtn">
          <span onClick={addAttribute}>Добавить аттрибут</span>
        </div>
        <AttributeList />
      </Drawer>
    </div>
  );
};

export default App;
