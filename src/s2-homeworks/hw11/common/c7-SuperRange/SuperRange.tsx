import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                color: 'success.main',
                '& .MuiSlider-thumb': {
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    background: '#FFFFFF',
                    border: '1px solid #00cc22',
                    '& ::after': {
                        width: '10px',
                        height: '10px',
                        background: '#00cc22',
                        border: '1px solid',
                        zIndex:'1'
                    }
                },
                '& .MuiSlider-rail': {
                    background: '#7f8f8f',
                    borderRadius: '10px',
                },
            }}
            className="slider"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
