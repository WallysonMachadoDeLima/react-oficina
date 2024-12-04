import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"

export const Contador = ({ color }) => {
    const [valor, setValor] = useState(0)

    return (
        <Stack direction={'row'} mb={2}>
         <Button variant="contained" 
         sx={{bgcolor: color, mr: 3}}
         onClick={() => setValor(valor + 1)}
         >
            MUI - BOTÃO
         </Button>
         <Typography variant="h5" >
           {valor}
         </Typography>
         </Stack>
    )
}