
import React from 'react'
import api from '../api'
import App from '../react-deck-swiper/App'
import CardData from '../data';

class CatList extends React.Component {
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
        if (this.cats !== []){
            return (App(this.cats))
        } else {
            return (App(CardData))
        } 
    }
}

export default CatList 
