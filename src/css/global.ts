import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background: ${({ theme }) => theme.COLORS.mauve[900]};
		color: ${({ theme }) => theme.COLORS.mauve[100]};
	}

	body,
	input,
	select
	button,
	textarea {
		font-family: "Inter Tight", sans-serif;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}

	a {
		color: inherit;
		text-decoration: none;
	}


	::-webkit-scrollbar {
		width: .8rem;
		background: ${({ theme }) => theme.COLORS.mauve[700]};
	}
	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.COLORS.mauve[600]};
	}
	
	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
