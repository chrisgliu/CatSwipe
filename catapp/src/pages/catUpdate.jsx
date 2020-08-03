
import React, { Component } from 'react'
import api from '../api'


class catUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            sex: '',
            detail: '',
            age: '',
            url: '',
        }
    }
    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name:name })
    }
    handleChangeInputSex = async event => {
        const sex = event.target.value
        this.setState({ sex:sex })
    }
    handleChangeInputDetail = async event => {
        const detail = event.target.value
        this.setState({  detail:detail })
    }
    handleChangeInputAge = async event => {
        const age = event.target.value
        this.setState({ age:age })
    }
    handleChangeInputUrl = async event => {
        const url = event.target.value
        this.setState({ url:url })
    } 

    handleUpdateCat = async () => {
        const { name, sex, detail, age, url} = this.state
        const payload = { name, sex, detail, age, url}

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Cat updated successfully`)
            this.setState({
                name: '',
                sex: '',
                detail: '',
                age: '',
                url: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const cat = await api.getCatById(id)

        this.setState({
            name: cat.data.data.name,
            sex: cat.data.data.sex,
            detail: cat.data.data.detail,
            age: cat.data.data.age,
            url: cat.data.data.url,
        })
    }

    render() {
        return (
            <div>
                <h1>Change Cat</h1>
                <label>Name: </label>
                <input type="text" value={this.state.name} onChange={this.handleChangeInputName}/>
                <label>Sex: </label>
                <input type="text" value={this.state.sex} onChange={this.handleChangeInputSex}/> 
                <label>Detail: </label>
                <input type="text" value={this.state.detail} onChange={this.handleChangeInputDetail}/>
                <label>Age: </label>
                <input type="text" value={this.state.age} onChange={this.handleChangeInputAge}/> 
                <label>Url: </label>
                <input type="text" value={this.state.url} onChange={this.handleChangeInputUrl}/> 
                <button onClick={this.handleUpdateCat}>Submit</button>
                <a href={'/movies/list'}>Cancel</a>
            </div>
        )
    }
}

export default catUpdate
