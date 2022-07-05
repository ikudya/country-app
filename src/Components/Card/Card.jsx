import React from "react";
import {CardBody, CardImg, CardList, CardListItem, CardTitle, CardWrapper} from "./CardElement";


export const Card = ({ img, name, info = [], onClick }) => {
    return(
        <CardWrapper onClick={onClick}>
            <CardImg src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el=>(
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </CardWrapper>
    )
}