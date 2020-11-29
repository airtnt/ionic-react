import React, { FC } from "react";
import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { Controller, Control } from "react-hook-form";

export interface InputProps {
  name: string;
  component: JSX.Element;
  control?: Control;
  label?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  name,
  control,
  component = <IonInput />,
  label,
  placeholder,
}) => {
  return (
    <>
      <IonItem>
        {label && <IonLabel position="fixed">{label}</IonLabel>}
        <Controller
          render={({ onChange }) => (
            <component.type
              {...component.props}
              placeholder={placeholder}
              onIonChange={onChange}
            />
          )}
          name={name}
          control={control}
        />
      </IonItem>
    </>
  );
};

export default Input;
