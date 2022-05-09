import React, { useState, useEffect, Component } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Step  from '../molecules/Step'
import Summary from '../molecules/Summary'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            surveySteps: [],
            formData: {}
        }
    }

    setFormDataState = (key, newValue) => {
        let newFormData = this.state.formData
        newFormData[key] = newValue
        this.setState({formData: {...newFormData}})

    }

    getFormDataState = (key) => {
        return this.state.formData[key]
    }

    getState = () => {
        return this.state.formData
    }


    async componentDidMount() {
        const response = await fetch('mock.json', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }});
        const data = await response.json();
        data.steps.forEach((e) => {
            e.inputs.forEach((input) => {
                this.state.formData[input.name] = ''
            })
            this.setState(prevState => ({
                surveySteps: [...prevState.surveySteps, <Step title={e.title} inputs={[...e.inputs]} setFormDataState={this.setFormDataState} getFormDataState={this.getFormDataState} /> ]
             }))
             
        })
        this.setState(prevState => ({
            surveySteps: [...prevState.surveySteps, <Summary getState={this.getState} /> ]
         }))

    }
        
    render() {
        console.log('data ' + JSON.stringify(this.state.formData))
        return (
            <Box>
                {this.state.surveySteps[this.state.page]}

                <Stack spacing={2} direction="row" alignItems="center">
                    <Button
                        variant="contained"
                        disabled={this.state.page === 0}
                        onClick={() => this.setState({ page:  this.state.page - 1 })}
                    >
                        Prev
                    </Button>

                    <Button
                        variant="contained"
                        disabled={this.state.page === this.state.surveySteps.length -1}
                        onClick={() => this.setState({ page:  this.state.page + 1 })}
                    >
                        Next
                    </Button>

                </Stack>
            </Box>
        )
    }
}