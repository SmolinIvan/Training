import {useEffect, useState} from "react";
import "./Table.css"
export interface TableDataProps {
    name: string;
    surname: string;
    numb:number;
}

export interface TableProps {
    userData: TableDataProps;
}

type User = {
    name: string;
    surname: string;
}

const Table = () => {
    const [user,usersChange] = useState<User>();

    useEffect(() => {
        fetch("https://run.mocky.io/v3/0b5f8c65-93b7-47f9-a2c0-dfbaa66e212f")
            .then((response) => response.json())
            .then((value) => {
                usersChange(value);
                console.log(value);
            });
    },[]);
    return (
        <div className="tableParent">
            <div className="table1">
                <h4>{user?.name} {user?.surname}</h4>
            </div>
        </div>
    );
};

export default Table;

// надо подумать, как переисользовать этот хук
const useUser = () => {
    const [user, usersChange] = useState<User>();

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b2dff60f-da0c-473d-b2cd-1d60723e60e0")
            .then((response) => response.json())
            .then((value) => {
                usersChange(value);
                console.log(value);
            });
    }, []);
    return user;
};

// const Table = () => {
//     const [users,usersChange] = useState<Array<User>>([]);
//
//     useEffect(() => {
//         fetch("https://run.mocky.io/v3/52df0e4a-da1b-492b-b0df-b71973573887")
//             .then((response) => response.json())
//             .then((value) => {
//                 usersChange(value);
//                 console.log(value);
//             });
//     },[]);
//     return (
//         <div className="table">
//             {users.map(({id, name}) => (
//                 <li key ={id}>{name}</li>
//                 ))}
//         </div>
//     );
// };
