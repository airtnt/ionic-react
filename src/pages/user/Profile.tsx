import React from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonListHeader,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItemDivider,
  IonItemGroup,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import AppInput from "../../components/AppInput";

const Profile: React.FC = () => {
  const { t } = useTranslation(["user", "common"]);
  const profileForm = useForm();
  const passwordForm = useForm();

  const onProfileFormSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("profile")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t("profile")}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader>
            <IonAvatar>
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                alt="user"
              />
            </IonAvatar>
          </IonListHeader>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>{t("title__info")}</IonLabel>
            </IonItemDivider>
            <AppInput
              name="name"
              label={t("label__name")}
              placeholder={t("placeholder__name")}
              control={profileForm.control}
              component={<IonInput type="text" required={true} />}
            />
            <AppInput
              name="email"
              label={t("label__email")}
              placeholder={t("placeholder__email")}
              control={profileForm.control}
              component={<IonInput type="email" required={true} />}
            />
            <AppInput
              name="phone"
              label={t("label__phone")}
              placeholder={t("placeholder__phone")}
              control={profileForm.control}
              component={<IonInput type="tel" required={true} />}
            />

            <IonButton
              expand="block"
              onClick={profileForm.handleSubmit(onProfileFormSubmit)}
            >
              {t("submit")}
            </IonButton>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>{t("title__password")}</IonLabel>
            </IonItemDivider>
            <AppInput
              name="currentPassword"
              placeholder={t("placeholder__currentPassword")}
              control={passwordForm.control}
              component={<IonInput type="password" required={true} />}
            />
            <AppInput
              name="newPassword"
              placeholder={t("placeholder__newPassword")}
              control={passwordForm.control}
              component={<IonInput type="password" required={true} />}
            />

            <IonButton
              expand="block"
              onClick={passwordForm.handleSubmit(onProfileFormSubmit)}
            >
              {t("submit")}
            </IonButton>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
