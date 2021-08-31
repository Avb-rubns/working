import styled from 'styled-components'


export const Container = styled.main`
padding: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&  > div{
    margin-top: 10%;
    background: ${({ theme }) => theme.colors.card.background};
    width: calc(100vw - 25%);
    height: 500px;
    border-radius: 2px;
    padding-top: 90px;
    box-shadow: 1px 1px 5px 2px ${({ theme }) => theme.colors.body.text};;
 
    & > article{
        display: flex;
        flex-direction: row;
        & > h1{
        font-family: 'NotoSans SC Bold';
        font-size: 64px;
        margin:0 5%;
        
    }
    @media all and (max-width: 768px) {
        h1 {
            font-size: 28px;
        }
    }
    }
    section{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    &&& > section{
        background: red;
    }
}
@media all and (max-width: 768px) {
        h1 {
            font-size: 28px;
        }
  
    }
`
export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
height: 90px;
width: calc( 100vw - calc(100vw * .80));
background: ${({ theme }) => theme.colors.tag.background};
h1{
    font-family: 'NotoSans SC Bold';
    font-size: 64px;
}
@media all and (max-width: 768px) {
        h1 {
            font-size: 28px;
        }
  
    }
`

export const Rectangle = styled.div(props => ( {
    background: 'var('+props.background+')',
    height: '10px',
    width: props.size ? props.size  : '200px' ,
    margin: '10px 10px',
    padding: '0 10px',
    borderRadius:'4px',
}))