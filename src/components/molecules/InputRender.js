import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default class InputRender extends Component { 


    render() {
        let teste

        switch(this.props.input.type) {
            case "text":
                teste = <TextField
                            label={this.props.input.label}
                            id={this.props.input.name}
                            name={this.props.input.name}
                            size="small"
                        />
                break;
            case 'select':
                teste = <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{this.props.input.label}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={0}
                            label={this.props.input.label}
                            onChange={this.handleChange}
                            >
                                {
                                    this.props.input.options.map((e, key) => 
                                        <MenuItem value={e.value} key={key}>{e.label}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                break;
            case 'checkbox':
                teste = <FormGroup>
                            <FormLabel id="demo-checkbox-group-label">{this.props.input.label}</FormLabel>
                            {
                                this.props.input.options.map((e, key) => 
                                    <FormControlLabel value={e.value} control={<Checkbox />} label={e.label} key={key} />
                                )
                            }
                        </FormGroup>
                break;
            case 'radio':
                teste = <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">{this.props.input.label}</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            {
                                this.props.input.options.map((e, key) => 
                                    <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={key} />
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                break;
            default:
                teste = <h1>Opps, something went wrong</h1>
                break;
        }

        

        return (
            <div>{teste}</div>
        )
  }
}
