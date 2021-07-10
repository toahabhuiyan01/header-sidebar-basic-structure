import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    return (
        <button className={classes.button}>
            <span>Logout</span>
        </button>
    )
};

export default HeaderCartButton;