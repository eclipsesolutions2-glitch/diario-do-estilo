import { CreateArticleAction } from "./create-article.action";
import { findManyArticlesAction } from "./find-many-articles.action";

export const article = {
	findMany: findManyArticlesAction,
	create: CreateArticleAction,
};
