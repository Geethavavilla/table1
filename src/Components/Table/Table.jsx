import "./Table.css"
export function Table() {
    let abc = new Object({
        h1: "S.NO",
        h2: "AUTHOR NAME",
        h3: "BOOK NAME",
        i1: "1",
        i2: "Leo Tolstoy",
        i3: "War and Peace",
        j1: "2",
        j2: "James Joyce",
        j3: "Ulysses",
        k1: "3",
        k2: "Sir Thomas Moor",
        k3: "Utopia",
        l1: "4",
        l2: "T.S Eliot",
        l3: "Waste land",
        m1: "5",
        m2: "William Shaespeare",
        m3: "Romeo and Juliet"
    });

    return (
        <>
            <center>
                <h2>AUTHOR-DETAILS</h2>
            </center>
            <table className="table table-bordered table-hover table-stripped">
                <thead className="table-primary">
                    <tr>
                        <th>{abc.h1}</th>
                        <th>{abc.h2}</th>
                        <th>{abc.h3}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{abc.i1}</td>
                        <td>{abc.i2}</td>
                        <td>{abc.i3}</td>
                    </tr>
                    <tr>
                        <td>{abc.j1}</td>
                        <td>{abc.j2}</td>
                        <td>{abc.j3}</td>
                    </tr>
                    <tr>
                        <td>{abc.k1}</td>
                        <td>{abc.k2}</td>
                        <td>{abc.k3}</td>
                    </tr>
                    <tr>
                        <td>{abc.l1}</td>
                        <td>{abc.l2}</td>
                        <td>{abc.l3}</td>
                    </tr>
                    <tr>
                        <td>{abc.m1}</td>
                        <td>{abc.m2}</td>
                        <td>{abc.m3}</td>
                    </tr>
                </tbody>
            </table><hr></hr>
        </>
    )
}


        
        
        
        
        
        
        