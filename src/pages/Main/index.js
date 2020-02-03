import React, { Component } from 'react'

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../services/api'

import { Container, RepositoryContainer, Form, SubmitButton, List } from './styles'

class Main extends Component {

    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    }

    componentDidMount () {
        const repositories = localStorage.getItem('repositories')

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) })
        }
    }

    componentDidUpdate (_, prevState) {
        const { repositories } = this.state

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories))
        }
    }

    handleInputChange = evt => {
        this.setState({ newRepo: evt.target.value })
    }

    handleSubmit = async evt => {
        evt.preventDefault()

        this.setState({ loading: true })

        const { newRepo, repositories } = this.state
        const response = await api.get(`/repos/${newRepo}`)

        const data = {
            name: response.data.full_name,
        }

        this.setState({
            repositories: [... repositories, data],
            newRepo: '',
            loading: false,
        })
    }

    render () {
        const { newRepo, repositories, loading } = this.state

        return (
            <>
                <Container>
                    <h1>
                        <FaGithubAlt/>
                        Repositórios
                    </h1>
        
                    <Form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Adicionar repositório"
                            value={newRepo}
                            onChange={this.handleInputChange}
                        />
                    
                        <SubmitButton loading={loading.toString()} emptyInput={newRepo}>
                            { loading ? ( 
                                <FaSpinner color="#fff" size={14} /> 
                            ) : (
                                <FaPlus color="#fff" size={14} />
                            )}
                        </SubmitButton>
                    </Form>
                </Container>
                <List>
                    {repositories.map(repository => (
                        
                        <li key={repository.name}>
                            <RepositoryContainer color={Math.floor(Math.random() * 6)}>
                                <span>{repository.name}</span>
                                <a href="">Detalhes</a>
                            </RepositoryContainer>
                        </li>
                    ))}
                </List>
            </>
        )
    }
}

export default Main