import React from 'react';

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
        <div className="bg-light mt-3 text-center">
        <h4>Genius Persons History</h4>
        <h5>Numbers of Developers={selectedGenius?.length}</h5>
        {selectedGenius?.length>0&&<table class="table">
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
<h3>Total Cost: {total}</h3>
    </div>
    );
};

export default SelectedGeniuses;