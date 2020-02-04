import React, { Component } from 'react'

import { toast } from 'react-toastify'

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import { RepositoryContainer, Form, SubmitButton, List } from './styles'
import Container from '../../Components/Container'

class Main extends Component {

    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    }

    componentDidMount() {
        const repositories = localStorage.getItem('repositories')

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) })
        }
    }

    componentDidUpdate(_, prevState) {
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

        try {

            const { newRepo, repositories } = this.state
            const exists = repositories.find(repository => repository.name === newRepo)

            if (exists) {
                throw new Error('Repositório duplicado')
            }

            this.setState({ loading: true })

            const response = await api.get(`/repos/${newRepo}`)

            const data = {
                name: response.data.full_name,
            }

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
            })

            toast.success('Repositório adicionado com sucesso!')

        } catch (e) {
            toast.error('Ops... Ocorreu um erro ao adicionar repositório!')

            this.setState({
                newRepo: '',
                loading: false,
            })
        }
    }

    render() {
        const { newRepo, repositories, loading } = this.state

        return (
            <>
                <Container>
                    <h1>
                        <FaGithubAlt />
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
                            {loading ? (
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
                                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                            </RepositoryContainer>
                        </li>
                    ))}
                </List>
            </>
        )
    }
}

export default Main