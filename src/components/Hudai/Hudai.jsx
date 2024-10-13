import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Hudai = () => {

    const user = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h3>Huadai </h3>
        </div>
    );
};

export default Hudai;