import { CityStructure } from 'src/app/cityStructure';

export class CityResponse {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: CityStructure[]
}