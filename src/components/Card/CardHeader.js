import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import styles from './';

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
    const classes = useStyles();
    const {
        className,
        children,
        color,
        plain,
        image,
        contact,
        signup,
        stats,
        icon,
        text,
        ...rest
    }  = props;

    const cardHeaderClasses = classNames({
        [classes.cardHeade]: true,
        [classes[color + 'CardHeader']]: color,
        [classes.CardHeaderPlain]: plain

    })
}