import cn from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ToolBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const ToolBar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    return <header className={cn(cls.ToolBar, className)}>{t('test')}</header>;
});
