// * data
import { years as data } from "~/data";

// * interfaces
import { Years } from "~/interfaces/years.interface";

export const useYearsStore = () => {
    // * states
    const years = useState<Years[]>();

    // * actions
    const findYears = async (id: number, type: "trim" | "model"): Promise<any> => {
        let response;

        const _years = data.filter((item) => {
            if (type == "model") {
                return item.model_id == id;
            } else {
                return item.trim_id == id;
            }
        });

        try {
            response = new Promise((resolve, reject) => {
                resolve(_years);
                reject();
            });
        } catch (error) {
            throw new Error("Something Went Wrong! Please Try Again.");
        }

        response
            .then((response) => {
                setYears(response as Years[]);
            })
            .catch((error) => {
                console.error(error);
            });

        return response;
    };
    const setYears = (_years: Years[]): void => {
        years.value = _years;
    };

    return { years, setYears, findYears };
};
