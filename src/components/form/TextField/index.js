import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: theme.spacing(1),
        maxWidth: 400,
        width: '100%',
    },
}));

export default ({
    variant = 'outlined',
    color = 'primary',
    size = 'medium',
    ...props
}) => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.textField}
            variant={variant}
            color={color}
            size={size}
            {...props}
        />
    )
}