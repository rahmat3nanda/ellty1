import {useState} from 'react';
import {IItem} from "./models";
import {CheckboxComponent, DividerComponent} from "./components";


function App() {
    const [items, setItems] = useState<IItem[]>([
        {id: 1, label: 'Page 1', checked: false},
        {id: 2, label: 'Page 2', checked: false},
        {id: 3, label: 'Page 3', checked: false},
        {id: 4, label: 'Page 4', checked: false},
        {id: 5, label: 'Page 5', checked: false},
        {id: 6, label: 'Page 6', checked: false},
    ]);

    const handleSubmit = () => {
        const selectedItems = items.filter(item => item.checked);
        console.log('Selected items:', selectedItems);
        alert(`Selected ${selectedItems.length} items`);
    };


    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                paddingTop: '10px',
                paddingBottom: '10px',
                minWidth: '370px',
                maxHeight: '326px',
                display: 'inline-flex',
                flexDirection: 'column',
                borderRadius: '6px',
                boxShadow: '0px 8px 15px rgba(20, 20, 20, 0.12), 0px 0px 4px rgba(20, 20, 20, 0.10)',
            }}>

                <CheckboxComponent
                    label="All pages"
                    checked={items.every(item => item.checked)}
                    onChange={(checked) => {
                        setItems(items.map(item => ({...item, checked})));
                    }}
                />

                <DividerComponent/>

                <div style={{
                    overflowY: 'auto',
                    maxHeight: 'calc(100% - 120px)',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}>
                    {items.map(item => (
                        <CheckboxComponent
                            key={item.id}
                            label={item.label}
                            checked={item.checked}
                            onChange={(checked) => {
                                setItems(items.map(i =>
                                    i.id === item.id ? {...i, checked} : i
                                ));
                            }}
                        />
                    ))}
                </div>

                <DividerComponent/>

                <button
                    onClick={handleSubmit}
                    disabled={!items.some(item => item.checked)}
                    style={{
                        width: 'calc(100% - 30px)',
                        padding: '10px 0',
                        margin: '10px 15px',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#1F2128',
                        // backgroundColor: items.some(item => item.checked) ? '#007bff' : '#ccc',
                        backgroundColor: '#FFCE22',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: items.some(item => item.checked) ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.2s',
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default App;