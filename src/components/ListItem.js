import React, { useState } from 'react';

const ListItem = ({ ListItem }) => {
    const [list, setList] = React.useState(ListItem);

    const handleChangeCheckbox = id => {
        setList(
            ListItem.map(item => {
                if (item.id === id) {
                    return { ...item, complete: !item.complete };
                } else {
                    return item;
                }
            })
        );
    };

    const handleClick = id => {
        setList(ListItem.filter(item => item.index !== id));
    };
    return (
        <div>
            <ul>
                {ListItem.data.map((item, index) => (
                    <li key={item}>
                        <label>
                            
                            {item}
                            <button type="button" onClick={() => handleClick(index)}>
                                Remove
                            </button>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListItem;