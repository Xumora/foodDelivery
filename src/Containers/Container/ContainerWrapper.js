import styled from "styled-components";

const ContainerWrapper = styled.div`
    display: flex;
    background-color: #252836;
    .sidebar{
        width: 60px;
        background-color: #1F1D2B;
        height: 100vh;
        border-radius: 0 20px 20px 0;

        .logo{
            width:50px;
            transform: rotateZ(20deg);
        }

        .sbLink{
            width: 38px;
            color: #EA7C69;
        }

        .sbLinkActive{
            background-color: #EA7C69 !important;
            color: white !important;
            position: relative;
            border-radius: 8px !important;
            &::after{
                content: '';
                position: absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                border-radius: 6px 0 0 6px;
                box-shadow: 0 0 0 10px #252836;
            }
        }
    }
    .main{
        flex: 1;
    }
`;

export default ContainerWrapper;