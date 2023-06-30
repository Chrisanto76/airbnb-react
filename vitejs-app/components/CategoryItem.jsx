import React from 'react';

function CategoryItem(props) {
    return (
        <div className='holiday--choice'>
            <img src={`./src/assets/svg-logo/${props.img}`} alt="pool-logo" className='wrapper-svg' />
            <p>{props.text}</p>
        </div>
    );
}

export default CategoryItem;