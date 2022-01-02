import React from 'react';
import { Button } from 'antd';
import cn from 'classnames';

import styles from './index.module.scss';

const ButtonComp: React.FC = () => {
    return (
        <Button type="primary" className={cn(styles.button)}>Primary Button</Button>
    )
}

export default ButtonComp;
