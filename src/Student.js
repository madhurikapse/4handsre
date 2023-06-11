import React from 'react'
import Nav from './Nav'

const Student = () => {
  return (
    <div>
        <Nav/>
        <div className='details'>
        <h1>Students Details</h1>
        <button>Add New Student</button>
        </div>
        <div className='table'>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                <tbody>
                    <tr>
                        <td>madhuri</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>devansh</td>
                        <td>2</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>dynaeshwar</td>
                        <td>30</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>soma</td>
                        <td>22</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>priyanak</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>anita</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Harshita Sharma</td>
                        <td>24</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student