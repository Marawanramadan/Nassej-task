import React from "react";
import CustomInput from "@/Components/CustomInput";
import '../styles/globals.css'

export default function Container() {
 
  return (
    <CustomInput pattern={/^h.*o$/} />
  );
}
