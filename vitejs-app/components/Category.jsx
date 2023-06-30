import React from 'react';
import CategoryItem from './CategoryItem';

function Category(props) {
    return (
        <div className='category--wrapper'>
            <CategoryItem 
                img="pool.jpg"
                text="Piscines"
            />
            <CategoryItem 
                img="country.jpg"
                text="Campagne"
            /><CategoryItem 
                img="island.jpg"
                text="Islands"
            />
            <CategoryItem 
                img="room.jpg"
                text="Chambres"
            />
            <CategoryItem 
                img="sea.jpg"
                text="A la mer"
            />
            <CategoryItem 
                img="tiny.jpg"
                text="Tiny Houses"
            />
            <CategoryItem 
                img="sea-shore.jpg"
                text="Bords de mer"
            />
            <CategoryItem 
                img="ufo.jpg"
                text="Wow"
            />
            <CategoryItem 
                img="hot.jpg"
                text="Tendances"
            /> 
        </div>
    );
}

export default Category;