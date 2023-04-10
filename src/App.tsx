import { useState } from "react";
import "./App.css";
import AttributeList from "./components/AttributeList/AttributeList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAttributeStore } from "./store/attributeStore";

const App = (): JSX.Element => {
  const addAttribute = useAttributeStore((state) => state.addAttribute);
  const updateAttribute = useAttributeStore((state) => state.updateAttribute);
  const attributes = useAttributeStore((state) => state.attributes);

  const saveAttributesChange = () => {
    updateAttribute(attributes)
  }
 

  return (
    <div className="App">
      <Button
        onClick={addAttribute}
        style={{ width: 50, height: 50 }}
        shape="circle"
        className="addBtn"
      >
        <PlusOutlined />
      </Button>
      <AttributeList />
      {attributes.length > 0 && (
        <Button
          onClick={saveAttributesChange}
          className="saveBtn"
          style={{ width: 150 }}
        >
          Сохранить
        </Button>
      )}
    </div>
  );
};

export default App;
