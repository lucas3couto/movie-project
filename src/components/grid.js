import styled from 'styled-components'

/** CONTAINER */

export const Container = styled.div`
    flex: 1;
    flex-direction: row;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0px 4vw;

`

/** ROW */

function getMarginTop(value){
    if(!value) return

    let margin = value
    return `margin-top: ${margin}px`
}

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before{
        content: " ";
        display: table
    }
    &:after{
        clear: both;
    }

    ${({ mg }) => mg && getMarginTop(mg)}
`

/* COLUMN */

function getWidthGrid(value){
    if(!value) return

    let width = value / 12 * 100
    return `width: ${width}%`
}

export const Col = styled.div`
    float: left;
    padding: .25em;

    margin-top: 15px;    
    min-height: 1px;
    box-sizing: border-box;

    @media only screen and (max-width: 680px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    @media only screen and (min-width: 680px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
`