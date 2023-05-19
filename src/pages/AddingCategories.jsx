import React from 'react'
import { Link } from "react-router-dom";

function AddingCategories() {
    return (
        <>
            <div class="container my-5" style={{ display: 'block' }}>
                {/* <a th: href="@{/admin/categories/add}" style="margin: 20px 0" class="btn btn-primary">Add Category</a> */}
                <Link style={{ margin: "2%  0px ",padding:'1%', width: '20%' }} class=" d-block     btn btn-primary ">Add Category</Link>
                {/* <div className="tableCont"> */}
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <th >1</th>
                            <td >Larry</td>

                            <td><Link class="btn btn-danger">Delete</Link></td>
                            <td><Link class="btn btn-warning">Update</Link></td>

                        </tr>

                        <tr >
                            <th >2</th>
                            <td >Harry</td>

                            <td><Link class="btn btn-danger">Delete</Link></td>
                            <td><Link class="btn btn-warning">Update</Link></td>

                        </tr>

                        <tr >
                            <th >3</th>
                            <td >Carry</td>

                            <td><Link class="btn btn-danger">Delete</Link></td>
                            <td><Link class="btn btn-warning">Update</Link></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            {/* </div> */}
        </>
    )
}

export default AddingCategories