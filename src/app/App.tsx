import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { Header } from 'widgets/Header';
import { ToolBar } from 'widgets/ToolBar';

export const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <ToolBar/>
            <Suspense fallback={'loading..'}>
                <AppRouter />
            </Suspense>
        </div>
    );
};
