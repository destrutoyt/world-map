import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WorldBankAPI {
    constructor(private http: HttpClient) {}

    extractCountryInfo(countryID: string): Observable<any> {
        let countryData = this.http.get(
            `https://api.worldbank.org/v2/country/${countryID}?format=json`)
        console.log(countryData);
        return (countryData) ?? [];
    }
    getPopulation(countryID: string): Observable<any> {
        return this.http.get(`https://api.worldbank.org/v2/country/${countryID}/indicator/SP.POP.TOTL?format=json`);
    }
}