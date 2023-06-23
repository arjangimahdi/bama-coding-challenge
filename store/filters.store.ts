import { Filters } from "~/interfaces/filters.interface";

export const useFiltersStore = () => {
    // states
    const filters = useState<Filters[]>();

    // actions
    const addFilter = (payload: Filters): void => {
        if (filters.value) {
            filters.value.push({ index: filters.value.length + 1, ...payload });
        } else {
            filters.value = [{ index: 1, ...payload }];
        }
    };
    const removeFilter = (index: number): void => {       
        const filterIndex = filters.value.findIndex((filter) => filter.index == index);
        filters.value.splice(filterIndex, 1);
    };

    return { filters, addFilter, removeFilter };
};
