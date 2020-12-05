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

const AppTabs: React.FC = () => {
  return (
  <IonTabs>
    <IonRouterOutlet>
      {routes.map((route) => (
        <Route path={route.path} component={route.component} key={route.name} />
      ))}
      <Redirect exact from="/" to="/home" />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      {routes.map((route) => (
        <IonTabButton
          href={route.path}
          tab={route.name}
          key={route.name}
        >
          <IonIcon icon={route.icon} size={route.size} />
          <IonLabel>{route.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  </IonTabs>
  );
};

export default AppTabs;
