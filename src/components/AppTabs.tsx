import React from "react";
import { Redirect, Route } from "react-router-dom";

import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import routes from "../lib/routes";

const AppTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {routes.map((route) => (
        <Route path={route.path} component={route.component} exact={true} key={route.name} />
      ))}
      <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      {routes.map((route) => (
        <IonTabButton tab={route.name} href={route.path} key={route.name} >
          <IonIcon icon={route.icon} />
          <IonLabel>{route.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  </IonTabs>
);

export default AppTabs;
