import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

export const BreadCrumbs = ({
    items = [{
        link: '',
        label: ''
    }, {
        label: ''
    }]
}) => {
    const classes = useStyles();
    return (
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
            {items.map(item => {
                return (
                    item.link ?
                        <Link className={classes.link} to={item.link}>{item.label}</Link> :
                        <span color="grey">{item.label}</span>
                )
            })}
        </Breadcrumbs>
    )
}

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'grey'
    },
    breadcrumbs: {
        marginBottom: '20px',
        marginRight: '10px',
        borderBottom: '1px solid lightgrey'
    }
}));