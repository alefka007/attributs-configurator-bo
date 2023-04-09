import {useState, useCallback} from 'react';
import './App.css';
import AttributeList from "./components/AttributeList/AttributeList";
import {Button} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import {AttributeContext} from "./context/AttributeContext";

interface IAttribute {
    name: string
    type: string
    id: number,
}

const App = () => {
    const [attributes, setAttributes] = useState<IAttribute[]>([]);
    const [isSave, setIsSave] = useState(false);

    const createAttribute = (type = '', value = '') => {
        setAttributes(prev => [...prev, {
            name: value,
            type: type,
            id: Date.now(),
        }])
    }

    const deleteAttribute = (id: number) => {
        setAttributes(attributes.filter(attr => attr.id !== id));
    }


    const editAttribute = (id: number, type: string, value: string) => {
            if (isSave) {
                attributes.forEach(attr => {
                    if (id === attr.id) {
                        attr.type = type;
                        attr.name = value;
                    }
                })
                setIsSave(false);
                console.log(attributes);
            }
        }


    return (
        <AttributeContext.Provider value={{deleteAttribute, editAttribute, isSave}}>
            <div className="App">
                <Button onClick={() => createAttribute()} style={{width: 50, height: 50}}
                        shape='circle'
                        className='addBtn'>
                    <PlusOutlined/>
                </Button>
                <AttributeList attributes={attributes}/>
                {attributes.length > 0 &&
                    <Button onClick={() => setIsSave(true)}
                            className='saveBtn' style={{width: 150}}>
                        Сохранить
                    </Button>
                }

            </div>
        </AttributeContext.Provider>

    );
}

export default App;
