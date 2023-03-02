import styled from "styled-components"

const LoadingBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    height: 100vh;
    weight: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
`

const LoadingMessage = styled.h1`
    color: white;
    font-weight: bolder;
    font-size: 40px;
`

function Loading() {
    return(
        <LoadingBox>
            <LoadingMessage>Loading...<br />Please Wait...</LoadingMessage>
        </LoadingBox>
    )
}

export default Loading