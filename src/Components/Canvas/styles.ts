import styled from "styled-components";

export const Container = styled.div`
    border: solid 1px ${props => props.theme.colors.medium};
    border-radius: 8px;
    box-shadow: 4px 4px 10px ${props => props.theme.colors.medium}
`