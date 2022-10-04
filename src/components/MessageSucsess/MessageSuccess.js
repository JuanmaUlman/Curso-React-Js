import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({purchaseID}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Gracias por su compra!, su ID de transaccion es: {purchaseID} </Alert>
    </Stack>
  );
}