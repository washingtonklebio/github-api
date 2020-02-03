import styled, { keyframes, css } from 'styled-components'

export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto 0.5rem auto;

    h1 {
        font-size: 20px;
        display:flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`
const color = ['#f64b3c', '#61d4b3', '#a7e9af', '#8cba51', '#ffcc00', '#ff7315', '#fd7792'] 

export const RepositoryContainer = styled.div`
    max-width: 700px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: auto auto 10px auto;
    padding: 30px;
    border-left: 4px solid ${props => color[props.color]}; 
`

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex:1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg)
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading === 'true' || !props.emptyInput,
}))`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    } 

    ${props => 
        props.loading === 'true' && 
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `
    }
`

export const List = styled.ul`
    list-style: none;

    li div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`