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
  IonDatetime,
  IonLabel,
  IonIcon,
  IonItemGroup,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import {
  informationCircleOutline,
  flagOutline,
  golfOutline,
  add,
} from "ionicons/icons";

import AppInput from "../components/AppInput";
import CountriesSelect from "../components/CountriesSelect";
import { getTodayDate } from "../lib/utils";

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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>New Post</IonTitle>
          <IonButtons slot="primary">
              <IonButton onClick={handleSubmit(onSubmit)}>
                <IonIcon slot="start" icon={add} />
                {t('add')}
              </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemGroup>
            <IonItemDivider sticky={true}>
              <IonIcon icon={informationCircleOutline} />
              <IonLabel>{t("title__info")}</IonLabel>
            </IonItemDivider>

            <AppInput
              name="weight"
              label={t("label__weight")}
              placeholder={t("placeholder__weight")}
              control={control}
              component={<IonInput type="number" min="0" required={true} />}
            />
            <AppInput
              name="price"
              label={t("label__price")}
              placeholder={t("placeholder__price")}
              control={control}
              component={
                <IonInput
                  type="number"
                  min="0"
                  required={true}
                  inputmode="decimal"
                />
              }
            />
            <AppInput
              name="description"
              label={t("label__description")}
              placeholder={t("placeholder__description")}
              control={control}
              component={<IonTextarea required={true} />}
            />
          </IonItemGroup>
          <IonItemGroup>
            <IonItemDivider sticky={true}>
              <IonIcon icon={flagOutline} />
              <IonLabel>{t("title__travelFrom")}</IonLabel>
            </IonItemDivider>

            <AppInput
              name="fromCounty"
              label={t("label__country")}
              placeholder={t("placeholder__fromCountry")}
              control={control}
              component={<CountriesSelect interface="popover" />}
            />
            <AppInput
              name="fromCity"
              label={t("label__city")}
              placeholder={t("placeholder__fromCity")}
              control={control}
              component={<IonInput type="text" required={true} />}
            />
            <AppInput
              name="fromAirport"
              label={t("label__airport")}
              placeholder={t("placeholder__fromAirport")}
              control={control}
              component={<IonInput type="text" />}
            />
            <AppInput
              name="fromDate"
              label={t("label__date")}
              placeholder={t("placeholder__fromDate")}
              control={control}
              component={
                <IonDatetime
                  displayFormat="MM/DD/YYYY"
                  min={getTodayDate()}
                  max="2022-01-01"
                />
              }
            />
          </IonItemGroup>
          <IonItemGroup>
            <IonItemDivider sticky={true}>
              <IonIcon icon={golfOutline} />
              <IonLabel>{t("title__travelTo")}</IonLabel>
            </IonItemDivider>

            <AppInput
              name="toCounty"
              label={t("label__country")}
              placeholder={t("placeholder__toCountry")}
              control={control}
              component={<CountriesSelect interface="popover" />}
            />
            <AppInput
              name="toCity"
              label={t("label__city")}
              placeholder={t("placeholder__toCity")}
              control={control}
              component={<IonInput type="text" required={true} />}
            />
            <AppInput
              name="toAirport"
              label={t("label__airport")}
              placeholder={t("placeholder__toAirport")}
              control={control}
              component={<IonInput type="text" />}
            />
            <AppInput
              name="toDate"
              label={t("label__date")}
              placeholder={t("placeholder__toDate")}
              control={control}
              component={
                <IonDatetime
                  displayFormat="MM/DD/YYYY"
                  min={getTodayDate()}
                  max="2022-01-01"
                />
              }
            />
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Post;
