import "./Task1.css"
export function Task1() {
    let data1= {
        a1: "ID",
        a2: "Name",
        a3:"BRANCH"
    }
    let std1 = { id: 201, name: "Nani", branch: "CSE" };
    let std2 = { id: 202, name: "roja", branch: "ECE" };
    let std3 = { id: 203, name: "srinu", branch: "EEE" };
    let students = [std1,std2,std3]
    students.push({
         id:"204",
         name:"hema",
        branch:"CSE"
     })
    
     students.unshift({
          id:"205",
          name:"vani",
          branch:"ECE"
      })
      
      students.splice(3,0,{
          id:"206",
          name:"raju",
          branch:"EEE"
      })
     
      students[3].name="manu"
      
      students.pop()
      
      students.shift(2)
      students.splice(2,1)

    return (
        <>
            <table className="table table-bordered table-hover table-stripped">
                <thead className="table-primary">
                    <tr>
                        <th>{data1.a1}</th>
                        <th>{data1.a2}</th>
                        <th>{data1.a3}</th>
                    </tr>
                </thead>
                  <tbody>
                    {
                        students.map(studentsData)
                    }
                </tbody>  
            </table>
        </>
    )
}
const studentsData=(item,index,arr)=>{
    return(
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.branch}</td>
        </tr>
        

    )
}