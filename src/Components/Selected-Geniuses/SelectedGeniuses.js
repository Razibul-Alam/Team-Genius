import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectedGeniuses = ({selectedGenius}) => {
    console.log(selectedGenius)
    let total=0
    selectedGenius?.map(person=>{
        let sum=parseInt(person.salary)
        total=total+sum
        console.log(total)
    }

        )

    return (
        <div className="genius-list mt-3 text-center">
        <h4 className="text-primary mb-3"> <span className="text-primary mx-2"><FontAwesomeIcon icon={faUser} /></span> Developers History</h4>
        <h5 className="mb-3">Numbers of Developers={selectedGenius?.length}</h5>
        {selectedGenius?.length>0&&<table class="table table-striped">
<thead>
<tr>
  <th scope="col">Sl</th>
  <th scope="col">Name</th>
  <th scope="col">Salary</th>
</tr>
</thead>
<tbody>
{selectedGenius?.map((person,index)=>{
const{name,salary}=person;
return(
<tr>
  <th scope="row">{index+1}</th>
  <td>{name}</td>
  <td>{salary}</td>
</tr>)}
)}
</tbody>
</table>}
<h3>Total Cost: ${total}</h3>
    </div>
    );
};

export default SelectedGeniuses;