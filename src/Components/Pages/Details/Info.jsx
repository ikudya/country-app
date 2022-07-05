import React, {useEffect, useState} from "react";
import {InfoImage, InfoTitle, List, ListGroup, ListItem, Meta, Tag, TagGroup, Wrapper} from "./DetailsElement";
import axios from "axios";
import {fillterByCode} from "../../config";

export const Info = (props) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        navigate
    } = props;

    const [neighbors, setNeighbors] = useState([])

    useEffect(()=>{
        axios.get(fillterByCode(borders)).then(
            ({data}) => setNeighbors(data.map(c=>c.name))
        );
    }, [borders])
    return(
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name: </b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region: </b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>{topLevelDomain.map(
                                d=>(
                                    <span key={d}>d</span>
                                ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency: </b>{currencies.map(
                                c=>(
                                    <span key={c.code}>{c.name}</span>
                                ))}
                        </ListItem>
                        <ListItem>
                            <b>Top Level Domain: </b>{languages.map(
                                l=>(
                                    <span key={l.name}>{l.name}</span>
                                ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is not border countries</span>
                    ):(
                        <TagGroup>
                            {neighbors.map(
                                b=>(
                                    <Tag key={b} onClick={()=>navigate(`/country/${b}`)}>{b}</Tag>
                                )
                            )}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}