import styled from 'styled-components'

export const LoginForm = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 0.8rem;
    box-shadow: 1px 0px 5px 5px rgba(0,0,0, 0.3);
    background-color: #fff;

    div{
			display: flex;
			flex-direction: column;
			gap: 1rem;
    }

		@media(max-width: 768px){
			height: 60vh;
			width: 60%;
			border-radius: 10px;
			transform: translateY(-140px);
		}
`

export const Title = styled.h2`
    opacity: 0.7;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    .input-container{
        width: 60%;
    }

		.form-container{
			width: 40%;
		}

		@media(max-width: 768px){
			justify-content: center;
			height: 100vh;
			align-items: center;
			flex-direction: column;
			background-color: #ea2845;

			.form-container{
				width: 100vw;
				display: flex;
				justify-content: center;
				border-radius: 25px 25px 0px 0px;
				background-color: #fff;
			}
		}

`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    background-color: #ea2845;

    .banner-image{
        width: inherit;
        max-width: 80vh;   
    }

		@media(max-width: 768px){
			width: 100vw;
			height: 40vh;

			.banner-image{
				display: none;
			}
    }
    
`