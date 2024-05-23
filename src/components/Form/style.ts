import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    margin: 2em 0;
    border-radius: 5px;
`

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 10px;
`

export const FormActions = styled.div`
    margin-top: 20px;
    text-align: right;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`
