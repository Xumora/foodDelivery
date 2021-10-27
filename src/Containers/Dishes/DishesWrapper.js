import styled from "styled-components";

const DishesWrapper = styled.div`
    .dishActive{
        color: #EA7C69 !important;
        position: relative;

        &::after{
            content: '';
            display: block;
            width: 65%;
            height: 2px;
            background-color: #EA7C69;
            position: absolute;
            left: -1px;
            bottom:-2px;
        }
    }

    .form-select{
        background-position: 7px center !important;
        background-color: #1F1D2B;
        border: 1px solid grey !important;
        width: 100px;
        border-radius: 8px !important;
    }

    .foodCard{
        background-color: #1F1D2B;
        border-radius: 20px;
        position: relative;
        transition: 0.5s;

        &:hover{
            transform: scale(1.1);
        }

        img{
            position: absolute;
            left: 12%;
            top: -30%;
        }
    }

    .row{
        height: 64.7vh;
        overflow-y: auto;
    }
`;

export default DishesWrapper;