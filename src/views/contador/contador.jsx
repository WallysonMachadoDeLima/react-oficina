import { Typography } from "@mui/material"
import { useState } from "react"
import { Contador } from "../../components/contador/contador"
import { UICard } from "../../components/ui/card"


export const ContadorView = () => {
    

   return (
      <UICard>
         <Typography variant="h5"  mb={5}>
            MEU CONTADOR
         </Typography>

         
        <Contador color={'red'}/>

        <Contador color={'black'}/>

        <Contador/>

        <Contador/>
      </UICard>
   )
}
