import { BrandCategories, Brands } from "~/interfaces/brands.interface";

export const useBrandsListStore = () => {
    //states
    const brandsCategories = useState<BrandCategories[]>();
    // mutations
    const setBrands = async (brands: Brands[], categories: BrandCategories[]): Promise<any> => {
        let response;

        const brandsWithCategory = categories.map((category: BrandCategories) => {
            const _brands = brands.filter((brand) => {
                return brand.category_id == category.id;
            });

            return {
                ...category,
                brands: _brands,
            };
        });

        try {
            response = await new Promise((resolve, reject) => {
                resolve(brandsWithCategory);
                reject();
            });
        } catch (error) {
            throw new Error("Something Went Wrong! Please Try Again.");
        }

        return response;
    };
    // actions
    const fetchBrands = (brands: Brands[], categories: BrandCategories[]) => {
        setBrands(brands, categories)
            .then((response) => {
                brandsCategories.value = response;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // process done
            });
    };

    return { brandsCategories, fetchBrands };
};
