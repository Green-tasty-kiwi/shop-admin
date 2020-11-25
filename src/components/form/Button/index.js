import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
    link: {
        textDecoration: 'none',
    },

}

export function Button({ to, children }) {

    return (
        <Link to={to} style={styles.link}>
            <MaterialButton variant="contained">{children} </MaterialButton>
        </Link>
    )
}