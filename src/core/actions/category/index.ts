import { createCategoryAction } from "./create-category.action";
import { deleteCategoryAction } from "./delete-category.action";
import { findManyCategoryAction } from "./find-many-category.action";
import { updateCategoryAction } from "./update-category.action";

export const category = {
	findMany: findManyCategoryAction,
	create: createCategoryAction,
	delete: deleteCategoryAction,
	update: updateCategoryAction,
};
