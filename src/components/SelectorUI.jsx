// src/components/SelectorUI.tsx
import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectorUI: React.FC = () => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    alert(`Valor seleccionado: ${event.target.value}`);
  };

  return (
    <Select defaultValue="" onChange={handleChange} displayEmpty>
      <MenuItem value="" disabled>
        Selecciona una opción
      </MenuItem>
      <MenuItem value="opcion1">Opción 1</MenuItem>
      <MenuItem value="opcion2">Opción 2</MenuItem>
      <MenuItem value="opcion3">Opción 3</MenuItem>
    </Select>
  );
};

export default SelectorUI;
