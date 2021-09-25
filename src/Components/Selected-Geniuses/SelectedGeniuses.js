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
        <div>
        <h2>Genius Persons History</h2>
        <h3>Numbers of Players={selectedGenius?.length}</h3>
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
<h3>Total Budget {total}</h3>
    </div>
    );
};

export default SelectedGeniuses;