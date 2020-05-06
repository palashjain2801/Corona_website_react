import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css" 
import {fetchCountries} from '../../api'
const CountryPicker = () => {
    const [fetchCountries , setFetchedCountries] = useState([]);
        useEffect(()=>{
            const fetchAPI = async () =>{
                setFetchedCountrues(await fetchCountries())

            }
            fetchAPI();
        },[setFetchedCountrues]);



  return (    
  <FormControl className={styles.formControl}>
      <NativeSelect>
        <options value="global">Global</options>
        {fetchCountries.map((country,i)=><option keys={i} values={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
