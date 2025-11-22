import { createCategoryAction } from "./create-category.action";
import { deleteCategoryAction } from "./delete-category.action";
import { useFindManyCategories } from "./find-many/client";
import { findManyCategoryAction } from "./find-many/server";
import { updateCategoryAction } from "./update-category.action";

export const category = {
	useFindManyCategories,
	findMany: findManyCategoryAction,
	create: createCategoryAction,
	delete: deleteCategoryAction,
	update: updateCategoryAction,
};
