import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    selectCountries,
    selectCountriesFetch,
    selectCountriesFetchSuccess
} from "../store/countries/countries.selectors";
import * as countriesActions from "../store/countries/countries.actions";

function CountrySelect(props) {
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries);
    const countriesFetch = useSelector(selectCountriesFetch);
    const countriesFetchSuccess = useSelector(selectCountriesFetchSuccess);

    React.useEffect(() => {
        if (!countriesFetch && !countriesFetchSuccess) {
            dispatch(countriesActions.fetchCountries());
        }
    }, []);

    if (countriesFetch) return (
        <input
            {...props}
            type="text"
            placeholder="Fetching countries..."
            readOnly
        />
    );

    return (
        <select {...props}>
            <option disabled selected>
                Select Country
            </option>
            {countries.map(country => (
                <option value={country.id}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}

export default CountrySelect;
