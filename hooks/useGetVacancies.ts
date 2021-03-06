import { useQuery } from 'react-query'
import { api } from "../services/Api";

import { IVacanciesPage } from "../pages";

export const useGetVacancies = (params={}, vacanciesPage: IVacanciesPage) => {
    // debugger
    const {data: {items=[], ...args }={},
        isLoading,
        refetch
    } = useQuery(
        ['vacancies', params],
        () => {
        // debugger
            return  api.info.getAll({...params
            })
        },
        {
            initialData: vacanciesPage,

            onError: (error: TypeError) => {
                alert(error.message)
            }
        }
    )

    return {items, isLoading, refetch, args}
}
