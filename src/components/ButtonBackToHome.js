import React from "react";
import { Link } from 'react-router-dom';

export const ButtonBackTohome = () => (
    <Link
        className='button is-info'
        to='/'>
        Volver ala portada
    </Link>
)