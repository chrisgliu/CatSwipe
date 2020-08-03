
import React, { Component } from 'react'
import api from '../api'
import App from '../react-deck-swiper/App'


class catList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllCats().then(catos => {
            this.setState({
                cats: catos.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        return (
           App(this.cats)
        )
    }
}

export default catList 
