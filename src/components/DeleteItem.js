import React from 'react';
export default function DeleteItem({setItems, itemId}) {

    return (
        <button
            className="button delete--button"
            onClick={() => setItems((prevItem) => {
                return prevItem.filter(element => element.id !== itemId);
            })}
            >Delete
        </button>
    );
}