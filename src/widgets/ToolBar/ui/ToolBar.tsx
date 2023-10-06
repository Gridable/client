import cn from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ToolBar.modules.scss';

interface NavbarProps {
    className?: string;
}

// export const ToolBar: FC<NavbarProps> = memo(({ className }) => {
//     const { t } = useTranslation();
//     return <div className={cn(cls.toolbar, className)}>

//         {t('test')}</div>;

// });

export const ToolBar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    return <header className={cn(cls.ToolBar, className)}>{t('test')}</header>;
});
