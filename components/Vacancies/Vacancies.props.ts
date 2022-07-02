
export interface VacanciesProps {
    vacancies: Array<VacancyProps>
}

export interface VacancyProps {
    id: string;
    name: string;
    alternate_url: string;
    employer: {
        logo_urls: {
            original: string;
        };
        name: string;
    },
    schedule: {
        name: string;
    }
    area: {
        name: string;
    }
}



export interface vacancyFullProps {
    description: string;
}
