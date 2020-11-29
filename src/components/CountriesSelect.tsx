import React, { useState } from "react";
import { IonSelect, IonSelectOption } from "@ionic/react";

import countries from "../lib/countries";

const CountriesSelect = (props: any) => {
  const [value, setValue] = useState<unknown>();
  const handleChange = (e: any): void => {
    const value = e.detail.value;
    setValue(e.detail.value);
    props.onIonChange(value);
  };

  return (
    <IonSelect {...props} value={value} onIonChange={handleChange}>
      {countries.map(({ code, name }) => (
        <IonSelectOption value={code} key={code}>
          {name}
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};

export default CountriesSelect;
