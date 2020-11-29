import React, { FC } from "react";
import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { Controller, Control } from "react-hook-form";

export interface InputProps {
  name: string;
  component: JSX.Element;
  control?: Control;
  label?: string;
}

const Input: FC<InputProps> = ({
  name,
  control,
  component = <IonInput />,
  label,
}) => {
  return (
    <>
      <IonItem>
        {label && <IonLabel position="floating">{label}</IonLabel>}
        <Controller
          render={({ onChange }) => (
            <component.type {...component.props} onIonChange={onChange} />
          )}
          name={name}
          control={control}
        />
      </IonItem>
    </>
  );
};

export default Input;
