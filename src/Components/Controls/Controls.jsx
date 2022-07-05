import React, {useEffect, useState} from "react";
import Search from "./Search";
import {CustomSelect} from "./CustomSelect";
import {Wrapper} from "./ControlsElement";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('')
    const [region, setRegion]=useState('')

    useEffect(()=>{
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
    }, [search, region]);

    return(
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect options={options}
                          placeholder="Filter by Region"
                          isClearable
                          IsSearchable={false}
                          value={region}
                          onChange={setRegion}
            />
        </Wrapper>
    )
}