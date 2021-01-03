import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export const App = () => {
    return (
        <main>
            <Link to={`/products`}>Посмотреть продукты</Link>
            <Switch>
                <Route exact path={`/products`}>
                    <div>look</div>
                </Route>
                <Route path={`/products/:productId`}>
                    <div>
                        yoyo
                    </div>
                </Route>
            </Switch>
        </main>
    );
}
