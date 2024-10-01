import "./Employee.css"
export function Employee(){
    let data={
        a1:"S.NO",
        a2:"NAME",
        a3:"EMP.ID",
        a4:"ROLE",
        a5:"SALARY",
        b1:"1",
        b2:"Geetha",
        b3:"E1265",
        b4:"Frontend Developer",
        b5:"35,000",
        c1:"2",
        c2:"Reetha",
        c3:"E1263",
        c4:"Python Developer",
        c5:"23,000",
        d1:"3",
        d2:"Seetha",
        d3:"E1269",
        d4:"General Manager",
        d5:"60,000",
        e1:"4",
        e2:"Meetha",
        e3:"E1269",
        e4:"HR",
        e5:"50,000"

    }
    return(
        <>
        <center>
            <h2>EMPLOYEE-DATA</h2>
        </center>
        <table className="table table-bordered table-hover table-stripped">
            <thead className="table-primary">
                <tr>
                    <th>{data.a1}</th>
                    <th>{data.a2}</th>
                    <th>{data.a3}</th>
                    <th>{data.a4}</th>
                    <th>{data.a5}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.b1}</td>
                    <td>{data.b2}</td>
                    <td>{data.b3}</td>
                    <td>{data.b4}</td>
                    <td>{data.b5}</td>
                </tr>
                <tr>
                    <td>{data.c1}</td>
                    <td>{data.c2}</td>
                    <td>{data.c3}</td>
                    <td>{data.c4}</td>
                    <td>{data.c5}</td>
                </tr>
                <tr>
                    <td>{data.d1}</td>
                    <td>{data.d2}</td>
                    <td>{data.d3}</td>
                    <td>{data.d4}</td>
                    <td>{data.d5}</td>
                </tr>
                <tr>
                    <td>{data.e1}</td>
                    <td>{data.e2}</td>
                    <td>{data.e3}</td>
                    <td>{data.e4}</td>
                    <td>{data.e5}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}