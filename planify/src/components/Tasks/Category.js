import React from 'react';

function Category({ category }) {
    return (
        <h1 className="head-text px-10 py-3 pink-gradient-text font-semibold drop-shadow-sm">{category.name}</h1>
    );
}

export default Category;
