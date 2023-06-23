// * data
import { trims as data } from "~/data";
// * interfaces
import { Trims } from "~/interfaces/trims.interface";

export const useTrimsStore = () => {
    // states
    const trims = useState<Trims[]>();
    // actions
    const findTrims = async (modelId: number): Promise<any> => {
        let response;

        const _trims = data.filter((item) => {
            return item.model_id == modelId;
        });

        try {
            response = new Promise((resolve, reject) => {
                resolve(_trims);
                reject();
            });
        } catch (error) {
            throw new Error("Something Went Wrong! Please Try Again.");
        }

        response
            .then((response) => {
                setTrims(response as Trims[]);
            })
            .catch((error) => {
                console.error(error);
            });

        return response;
    };
    const setTrims = (_trims: Trims[]): void => {
        trims.value = _trims;
    };

    return { trims, setTrims, findTrims };
};
