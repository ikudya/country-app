import React, {useEffect, useState} from "react";
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import {List} from "../Card/List";
import {Card} from "../Card/Card";
import {Controls} from "../Controls/Controls";
import {useNavigate} from "react-router-dom";


export const HomePage = ({countries, setCountries}) => {
    const [filtredCountry, setFiltredCountry] = useState(countries);
    const  navigate  = useNavigate();
    const handlerSearch = ( search, region) => {
        let data = [...countries]

        if (region){
            data = data.filter(c => c.region.includes(region))
        }
        if (search){
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFiltredCountry(data);
    }

    useEffect(() => {
        if(!countries.length)
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, []);

    useEffect(()=>{
    handlerSearch();
    }, [countries])
    return (
        <>
            <Controls onSearch={handlerSearch}/>
            <List>
                {
                    filtredCountry.map(c => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Popelation',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: c.region
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital
                                }
                            ],
                        };
                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
            </List>
        </>
    )
}