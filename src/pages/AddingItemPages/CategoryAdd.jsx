import React, { useState, useEffect } from 'react'

function CategoryAdd() {

    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const [data, setData] = useState({
        categoryTitle: "",
        categoryDescription: "",

    });


    return (
        <>
            <div className="containerr" style={{ margin: "2% 20%", backgroundColor: 'white', boxShadow: '5px 10px 30px lightgray', borderRadius: '4px', padding: '2%' }}>
                <div className="row">
                    <div className="col-sm-4">
                        <form method="post">
                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="name"> Category Title</label>
                                <input type="text" className="form-control" required name="name" id="name" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label for="description">Category Description</label>
                                <textarea className="form-control" rows="5" name="description" id="description"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryAdd