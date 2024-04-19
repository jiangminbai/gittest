import * as mui from '@mui/material'
import * as icon from '@mui/icons-material'
import PlainCssSlider from './PlainCssSlider'
import GlobalCss from './GlobalCss'

export default function Comp () {
  return (
    <div className="comp">
      <mui.Slider
        defaultValue={30}
        sx={{
          width: '300px',
          color: '#ccc',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          }
        }}
      >
      </mui.Slider>
      <mui.Button disabled className='Button'>sss</mui.Button>
      <PlainCssSlider />
      <GlobalCss />
      <mui.FormControl>
        <mui.FormLabel error={true}>sss</mui.FormLabel>
        <mui.TextField
          label=""
          error={true}
          helperText="sss"
        ></mui.TextField>
      </mui.FormControl>
      
    </div>
  )
}