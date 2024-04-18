import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Stack } from '@mui/material';

interface DragProps {
  
}
export default function TableDragColumn(props: React.PropsWithChildren<DragProps>) {
  const {children} = props
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{
      "& .table-dragicon": {
        visibility: "visible",
        cursor: "ew-resize",
      },
      "&:hover .table-dragicon": {
        visibility: "visible",
      }
    }}>
      {children}
      <Box component={"div"} sx={{display: "flex", alignItems: "center"}}>
       <DragIndicatorIcon className='table-dragicon table-drag__icon' />
      </Box>
    </Stack>
  )
}
