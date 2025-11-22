import { CreateArticleAction } from "./create-article.action";
import { deleteArticleAction } from "./delete-article.action";
import { findManyArticlesAction } from "./find-many-articles.action";
import { changeSynchronizeArticleOfCategory } from "./synchronize-article-with-category/change-synchronize";
import { desynchronizeArticleOfCategory } from "./synchronize-article-with-category/desynchronize";
import { synchronizeArticleWithCategory } from "./synchronize-article-with-category/synchronize";

export const article = {
	findMany: findManyArticlesAction,
	create: CreateArticleAction,
	delete: deleteArticleAction,
	synchronizeArticleWithCategory: {
		desynchronize: desynchronizeArticleOfCategory,
		synchronize: synchronizeArticleWithCategory,
		changeSynchronize: changeSynchronizeArticleOfCategory,
	},
};
