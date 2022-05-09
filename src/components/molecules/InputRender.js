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
    constructor(props) {
        super(props)
        this.value = ''
        this.state = {
            data: {},
            checkedState: []
        }
    }

    handleChange = (event) => {
        this.state.data[this.props.input.name] = event.target.value
        this.props.setFormDataState(this.props.input.name, event.target.value)
      }

    handleChange1 = (e) => {
        const { value, checked } = e.target;

        if (checked) {
          this.setState({
            checkedState: [...this.state.checkedState, value],
            response: [...this.state.checkedState, value],
          });
        }

        else {
          this.setState({
            checkedState: this.state.checkedState.filter((e) => e !== value),
            response: this.state.checkedState.filter((e) => e !== value),
          });
        }

        this.props.setFormDataState(this.props.input.name, this.state.checkedState)
    }


    render() {
        let input
        switch(this.props.input.type) {
            case "text":
                input = <TextField
                            label={this.props.input.label}
                            id={this.props.getFormDataState(this.props.input.name)}
                            name={this.props.input.name}
                            size="small"
                            value={this.state.data[this.props.input.name]}
                            onChange={this.handleChange}

                        />
                break;
            case 'select':
                input = <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{this.props.input.label}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id={this.props.input.name}
                            name={this.props.input.name}
                            label={this.props.input.label}
                            defaultValue={this.state.data[this.props.input.name]}
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
                input = <FormGroup>
                            <FormLabel id={this.props.input.name}>{this.props.input.label}</FormLabel>
                            {
                                this.props.input.options.map((e, key) => 
                                    <FormControlLabel
                                        control={<Checkbox  />}
                                        label={e.label}
                                        key={key}
                                        value={e.value}
                                        name={this.props.input.name}
                                        onChange={this.handleChange1}
                                        />
                                        
                                )
                            }
                        </FormGroup>
                break;
            case 'radio':
                input = <FormControl>
                        <FormLabel id={this.props.input.name}>{this.props.input.label}</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name={this.props.input.name}
                            onChange={this.handleChange}
                            value={this.state.data[this.props.input.name]}
                        >
                            {
                                this.props.input.options.map((e, key) => 
                                    <FormControlLabel  value={e.value} control={<Radio />} label={e.label} key={key} />
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                break;
            default:
                input = <h1>Opps, something went wrong</h1>
                break;
        }

        

        return (
            <div>{input}</div>
        )
  }
}
