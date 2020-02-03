import React from 'react'
import Routes from '../../routes'
import GlobalStyle from '../../global'
import theme from '../../theme/'
import { ThemeProvider } from 'styled-components'

const App = () => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <Routes />
            <GlobalStyle />
        </ThemeProvider>
    </React.Fragment>
)

export default App