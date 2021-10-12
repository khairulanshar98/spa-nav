import React, { ReactElement } from 'react'
import Button from '@mui/material/Button';
import clsx from 'clsx'
import useStyles from '../style'
const key = '/home'
const Home: React.FC = (props): ReactElement => {
    const classes = useStyles()
    return (
        <Button
            title='home'
            className={clsx(classes.menu, document.location.pathname === key || document.location.pathname === '/' ? classes.selected : undefined)}
            href={key}
        >
            Home
        </Button>
    )
}

export default React.memo(Home)