import styled from "styled-components";

const OrdersWrapper = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #1F1D2B;
    border-radius: 20px 0 0 20px;

    .methodButton{
        color: #EA7C69;
        border: 1px solid grey !important;
        border-radius: 8px !important;
        font-size: 12px;
    }

    .methodButtonActive{
        background-color: #EA7C69 !important;
        color: white !important;
        border: 1px solid #EA7C69 !important;
        border-radius: 8px !important;
        font-size: 12px;
    }

    .basket{
        height: 56vh;
        overflow-y: auto;
        
        .qty{
            border: 1px solid grey;
            border-radius: 5px;
            background-color: #2D303E;
        }
        .delButton{
            color: #EA7C69;
            border: 1px solid #EA7C69;
            border-radius: 8px;

            &: hover{
                background-color: #EA7C69 !important;
                color: white !important;
            }
        }
    }
`;

export default OrdersWrapper;