import { Component, inject,  } from '@angular/core';
import { CountryInformation } from '../countryInfo';
import { WorldBankAPI } from '../api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [NgIf],
  templateUrl: './world-map.html',
  styleUrl: './world-map.css'
})
export class WorldMap {
// API SERVICE
  apiService: WorldBankAPI = inject(WorldBankAPI)

  // VARIABLES
  isVisible: boolean = false;
  countryIds: string[] = [];

  // COUNTRY INFORMATION INTERFACE
  countryInfo: CountryInformation = {
    countryCode: '',
    countryName: '',
    countryCapital: '',
    countryRegion: '',
    incomeLevel: '',
    totalPopulation: '',
  }

  mouseClick(event: MouseEvent) {
    const selectedCountry = event.target as SVGPathElement;
    const countryID = selectedCountry.id;
    if (countryID != '') {
      this.showCountryData(countryID);
    }
    else {
      console.warn("CountryID is empty")
    }
  }

  toggleCountryData() {
    this.isVisible = true;
  }

  showCountryData(countryID: string) {
    this.toggleCountryData();
    console.log(countryID + " selected");
    this.apiService.extractCountryInfo(countryID).subscribe({next: data => {
      const extractedData = data[1][0];
      this.countryInfo = {
        countryCode: extractedData.iso2Code,
        countryName: extractedData.name,
        countryCapital: extractedData.capitalCity,
        countryRegion: extractedData.region.value,
        incomeLevel: extractedData.incomeLevel.value,
        totalPopulation: '',
      };

      // Get Population Data
      this.apiService.getPopulation(countryID).subscribe(populationData => {
        const pData = populationData[1][0].value;
        this.countryInfo.totalPopulation = pData;
      })
    }});
  }
}

