import {FC, PropsWithChildren, ReactNode, Suspense} from 'react';
import {Await} from 'react-router-dom';
import {ErrorFallback} from '../ErrorBoundary/components/ErrorFallback';

interface DeferPageProps extends PropsWithChildren {
  resolve: unknown;
  loader?: ReactNode;
  errorFallback?: ReactNode;
}

export const DeferPage: FC<DeferPageProps> = ({resolve, loader, errorFallback = <ErrorFallback/>, children}) => {
  return (
    <Suspense fallback={loader}>
      <Await
        resolve={resolve}
        errorElement={errorFallback}
      >
        {children}
      </Await>
    </Suspense>
  );
};
