import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemDivider,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";

import AppInput from '../components/AppInput';

const Post: React.FC = () => {
  const { t } = useTranslation("order");
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>{t("title__info")}</IonItemDivider>
          <AppInput 
            name="weight"
            label={t("label__weight")}
            control={control}
            component={<IonInput
              type="number"
              min="0"
              required={true}
            />}
          />
          <AppInput 
            name="price"
            label={t("label__price")}
            control={control}
            component={<IonInput
              type="number"
              min="0"
              required={true}
              inputmode="decimal"
            />}
          />
          <AppInput 
            name="description"
            label={t("label__description")}
            control={control}
            component={<IonTextarea
              required={true}
            />}
          />
   
        <IonItemDivider>{t("title__travelFrom")}</IonItemDivider>
    
        </IonList>
        <IonButton onClick={handleSubmit(onSubmit)}>submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Post;
