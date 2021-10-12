import React, { ReactElement } from 'react'
import Button from '@mui/material/Button';
import clsx from 'clsx'
import useStyles from '../style'
const key = '/login'
const Login: React.FC = (props): ReactElement => {
    const classes = useStyles()
    return (
        <Button
            title='login'
            className={clsx(classes.menu, document.location.pathname === key ? classes.selected : undefined)}
            href={key}
        >
            Login
        </Button>
    )
}

export default React.memo(Login)