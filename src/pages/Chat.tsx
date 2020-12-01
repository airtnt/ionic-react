import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonAvatar,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

const Chat: React.FC = () => {
  const { t } = useTranslation("chat");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("chat")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("chat")}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonListHeader>
          <IonLabel>{t("recent")}</IonLabel>
        </IonListHeader>
        <IonList>
          {["Sam", "Max"].map((name) => (
            <IonItem>
              <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt={name} />
              </IonAvatar>
              <IonLabel>
                <h2>{name}</h2>
                <p>Listen, I've had a pretty messed up day...</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
