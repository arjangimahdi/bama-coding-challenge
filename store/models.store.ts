// * data
import { models as data } from "~/data";
// * interfaces
import { Models } from "~/interfaces/models.interface";

export const useModelsStore = () => {
    // states
    const models = useState<Models[]>();
    // actions
    const findModels = async (brandId: number): Promise<any> => {
        let response;

        const _models = data.filter((item) => {
            return item.brand_id == brandId;
        });

        try {
            response = new Promise((resolve, reject) => {
                resolve(_models);
                reject();
            });
        } catch (error) {
            throw new Error("Something Went Wrong! Please Try Again.");
        }

        response
            .then((response) => {
                setModels(response as Models[]);
            })
            .catch((error) => {
                console.error(error);
            });

        return response;
    };
    const setModels = (_models: Models[]): void => {
        models.value = _models;
    };

    return { models, setModels, findModels };
};
