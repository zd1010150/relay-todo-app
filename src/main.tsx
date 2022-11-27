import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './app';
import RelayEnvironment from './RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { getQueryRef } from "./loadQuery";

const queryRef = getQueryRef("jser1");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={"loading...."}>
                <App queryRef={queryRef} />
            </Suspense>
        </RelayEnvironmentProvider>
    </React.StrictMode>
);

