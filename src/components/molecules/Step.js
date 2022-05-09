import React, { Component } from 'react'
import Box from '@mui/material/Box'
import InputRender from './InputRender'

export default class Step extends Component {
    
    render() {
        return (
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                autoComplete="off"
            >
                <h1>{this.props.title}</h1>
                {
                    this.props.inputs.map((input, key) => {
                        return <InputRender input={input} key={key} value={this.props.getFormDataState(input.name)} setFormDataState={this.props.setFormDataState} getFormDataState={this.props.getFormDataState}  />
                    })
                }
                
            </Box>
        )
    }
}
