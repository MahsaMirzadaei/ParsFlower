
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    yellow: '#fbe7c6',
    mint: '#b4f8c8',
    tiffanyBlue: '#a0e7e5',
    hotPink: '#ffaebc',

    palette: {
        hotPink: {
          main: '#ffaebc',
        },
        tiffanyBlue: {
          main: '#a0e7e5',
        },
        mint: {
            main: '#b4f8c8',
        },
        black: {
            main: "#000",
        },
      },
})

{/* <div className='d-flex'>
                        <button onClick={()=>addNumber()}>+</button>
                        <p>{props.item.number}</p>
                        <button>-</button>
                        
                    </div> */}