import styled from 'styled-components'

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #fff;
        background:#7159c1;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 14px;
        margin-top: 10px;
    }

    p {
        margin-top:5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
    }

    & + li {
        margin-top: 10px;
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;
        
        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: #7159c1;
                }
            }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
`

export const Label = styled.span`
    background-color: #${props => props.color};
    padding: 0px 8px;
    border-radius: 25px;
    color: #000;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    width: max-content;
    margin-top: -5px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    margin-left: 10px;
`
