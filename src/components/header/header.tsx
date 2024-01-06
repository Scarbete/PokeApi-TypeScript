import classes from './header.module.sass'


export const Header = () => {

    return (
        <div className={classes.header}>
            <div className={'container'}>
                <div className={classes.header__inner}>
                    {Array(20).fill('Header')}
                </div>
            </div>
        </div>
    )
}