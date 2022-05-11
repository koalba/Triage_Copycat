import styled from "styled-components";

export const Section = styled.div`
    width: 100%;
    padding: ${ ({ padding }) => padding || '1rem 0' };
    background-color: ${ ({ theme }) => theme.c.white };

    &.blue{
        background-color: ${ ({ theme }) => theme.c.blue };
    }

    &.pink{
        background-color: ${ ({ theme }) => theme.c.pink };
    }

    &.black{
        background-color: ${ ({ theme }) => theme.c.black };
        --c-section: rgba(255,255,255, 0.2);
    }

    &.yellow{
        background-color: ${ ({ theme }) => theme.c.yellow };
        color: black;
    }

    &.purple{
        background-color: ${ ({ theme }) => theme.c.purple};
    }

    &.grey{
        background-color: ${ ({ theme }) => theme.c.grey};
    }

    &.hero{
        h2{
            font-size: ${ ({ theme }) => theme.f.titleBig };

            @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
                font-size: ${ ({ theme }) => theme.f.title };
            }
        }

        p{
            @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
                font-size: ${ ({ theme }) => theme.f.mainBig };
            }
        }
    }

    @media screen and (max-width: ${ ({ theme }) => theme.media.m }){
        padding: 0;

        &.grey, &.white{
            padding: 3rem 0;
        }
    }
`

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1025px;
    margin: auto;

    &.grid{
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        gap: 2rem;
        width: fit-content;

        @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
            grid-template-columns: repeat( 2, 1fr );
        }

        @media screen and (max-width: ${ ({ theme }) => theme.media.m }){
            grid-template-columns: repeat( 1, 1fr );
        }
    }

    &.flex{
        display: flex;
        flex-flow:       ${ ({ direction }) => direction || 'row'           } nowrap;
        justify-content: ${ ({ justify   }) => justify   || 'space-between' };
        align-items:     ${ ({ align     }) => align     || 'flex-start'    };

        @media screen and (max-width: ${ ({ theme }) => theme.media.m }){
            flex-direction: ${ ({ directionMobile }) => directionMobile };
            width: 100%;
        }
    }
`

export const Title = styled.h2`
    font-size: ${ ({ theme }) => theme.f.title };
    font-weight: 500;
    line-height: 1;
    padding: .6em 0 .35em;

    &.Praise-title{
        color:black;
        margin-bottom: 2rem;

        @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
            text-align: center;
        }
    }

    @media screen and (max-width: ${ ({ theme }) => theme.media.m }){
        font-size: ${ ({ theme }) => theme.f.subtitle };
    }
`

export const Subtitle = styled.p`
    font-size: ${ ({ theme }) => theme.f.subtitle };
    font-weight: 300;
    opacity: 0.7;
    line-height: 1.4;
    letter-spacing: .5px;

    @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
        font-size: ${ ({ theme }) => theme.f.mainSmall };
    }
`

export const Icon = styled.img`
    width: 3rem;
    height: 3rem;
    
    @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
       width: 2rem;
       height: 2rem;
    }

    &.Footer-icon{
        width: 1.5rem;
        height: 1.5rem;
    }

`

export const Image = styled.img`
    &.Hero-apple{
        margin-top: 1.5rem;
    }

    &.Praise-image{
       margin-top: 1rem; 
       width: auto;
       height: 2rem;

       &-1, &-2{
           height: 1.25rem;
       }

       &-3{
           height: 1.5rem;
       }
    }
`

export const Column = styled.div`
    padding-top: ${ ({ paddingTop }) => paddingTop };
    padding-right: ${ ({ paddingRight }) => paddingRight };
    flex-basis: 38.5%;

    @media screen and (max-width: ${ ({ theme }) => theme.media.m }){

        &:first-child{
            padding: 5rem 3rem;
        }

        &:last-child{
            padding: ${ ({ paddingMobile }) => paddingMobile };
            background-color: var(--c-section, rgba(0, 0, 0, 0.2));

            img{
                width: 50%;
                margin: 0 auto;
            }
        }
    }
`

export const Link = styled.a`
    cursor: pointer;
    max-width: 185px;

    &.Hero-link{
        width:5rem;
        height:5rem;

        img{
            width: 100%;
            height: 100%;
        }
    }
`

export const PlainLink = styled.a`
    cursor: pointer;

    &.Footer-link{
        font-size: ${ ({ theme }) => theme.f.main };
        color: black;
        opacity: .75;
        margin: 0 1rem 1.5rem;

        transition: all .3s ease;

        &:hover{
            opacity: .5;
        }
    }
`

export const Block = styled.div`
    padding: 2rem 30% 2rem 2rem;
    border-radius: .75rem;
    max-width: 330px;
    height: 100%;

    &.blue{
        background-color: ${ ({ theme }) => theme.c.blue };
    }

    &.pink{
        background-color: ${ ({ theme }) => theme.c.pink };
    }

    &.black{
        background-color: ${ ({ theme }) => theme.c.black };
    }

    &.yellow{
        background-color: ${ ({ theme }) => theme.c.yellow };
        color: black;
    }

    &.purple{
        background-color: ${ ({ theme }) => theme.c.purple};
    }

    &.white{
        background-color: ${ ({ theme }) => theme.c.white};
        color: black;
    }

    &.Praise{
        padding: 2rem;
        color: ${ ({ theme }) => theme.c.black};
        background-color: ${ ({ theme }) => theme.c.grey};
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;

        transition: all .3s ease;

        &:hover{
            background-color: ${ ({ theme }) => theme.c.greyDark};
        }
    }
`

export const SpecTitle = styled.h3`
    font-size: ${ ({ theme }) => theme.f.subtitle };
    font-weight: 500;
    line-height: 1.3;
    margin-top: 1.5rem;
    hyphens: none;

    @media screen and (max-width: ${ ({ theme }) => theme.media.t }){
        font-size: ${ ({ theme }) => theme.f.mainBig };
    }
`

export const Text = styled.p`
    font-size: ${ ({ theme }) => theme.f.main };
    font-weight: 300;
    line-height: 1.3;
` 

export const Footer = styled.footer`
`