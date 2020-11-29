import React, { useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemDivider,
  IonItem,
  IonInput,
} from "@ionic/react";

const Post: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>{'weight'}</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={weight}
              placeholder={'weight'}
              onIonChange={(e) => setWeight(parseInt(e.detail.value!, 10))}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Post;
