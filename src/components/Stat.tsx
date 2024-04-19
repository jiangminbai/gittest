import * as React from 'react';
import { styled } from '@mui/material/styles';

export interface StatProps {
  value: number | string;
  unit: string;
  variant?: 'outlined';
}

const StatRoot = styled('div', {
  name: 'MuiStat',
  slot: 'root',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  letterSpacing: '-0.25em',
  fontWeight: 600,
}))

const StatValue = styled('div', {
  name: 'MuiStat',
  slot: 'value',
})(({ theme }) => ({
  ...theme.typography.h3,
}))

const StatUnit = styled('div', {
  name: 'MuiStat',
  slot: 'unit',
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
}))

const Stat = React.forwardRef<HTMLDivElement, StatProps>((props, ref) => {
  const { value, unit, ...other } = props
  return (
    <StatRoot ref={ref} {...other}>
      <StatValue>{value}</StatValue>
      <StatUnit>{unit}</StatUnit>
    </StatRoot>
  )
})

export default Stat