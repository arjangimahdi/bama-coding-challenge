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
    const removeFilter = (index: number | undefined): void => {
        if (!index) return;
        const filterIndex = filters.value.findIndex((filter) => filter.index == index);
        // removes all arrays items after clicked item
        filters.value.length = filterIndex;
    };

    return { activeFilter, filters, addFilter, removeFilter, setActiveFilter };
};
