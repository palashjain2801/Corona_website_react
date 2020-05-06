import React, { useState, useEfffect } from "react";
import { NativeSelect, FormControl } from " @material-ui/core";
import styles from "./CountryPicker.module.css" 
import {countries} from '../../api'
const CountryPicker = () => {




    
  return (    
  <FormControl className={styles.formControl}>
      <NativeSelect>
        <options value="global">Global</options>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
