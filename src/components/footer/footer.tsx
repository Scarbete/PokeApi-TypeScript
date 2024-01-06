import classes from './footer.module.sass'


export const Footer = () => {

    return (
        <div className={classes.footer}>
            <div className={'container'}>
                <div className={classes.footer__inner}>
                    {Array(20).fill('Footer')}
                </div>
            </div>
        </div>
    )
}