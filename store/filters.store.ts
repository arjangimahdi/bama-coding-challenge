import { Filters } from "~/interfaces/filters.interface";

export const useFiltersStore = () => {
    // states
    const filters = useState<Filters[]>();
    const activeFilter = useState<string>();

    // actions
    const setActiveFilter = (filter: string) => {
        activeFilter.value = filter;
    };
    const addFilter = (payload: Filters): void => {
        if (filters.value) {
            filters.value.push({ index: filters.value.length + 1, ...payload });
        } else {
            filters.value = [{ index: 1, ...payload }];
        }
    };
    const updateFilter = (type: string, payload: Filters): void => {
        const filterIndex = filters.value.findIndex((filter) => filter.entity.name == type);

        filters.value[filterIndex] = payload;
    };
    const removeFilter = (index: number | undefined): void => {
        if (!index) return;
        const filterIndex = filters.value.findIndex((filter) => filter.index == index);
        // removes all arrays items after clicked item
        filters.value.length = filterIndex;
    };
    const findFilter = (type: string): Filters => {
        const filterIndex = filters.value.findIndex((filter) => filter.entity.name == type);

        return filters.value[filterIndex];
    };

    return { activeFilter, filters, addFilter, findFilter, removeFilter, updateFilter, setActiveFilter };
};
