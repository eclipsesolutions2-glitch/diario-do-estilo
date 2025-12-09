import { findManyArticleAction } from "./article/find-many-article.action";
import { findOneArticleAction } from "./article/find-one-article.action";

export const action = {
	api: {
		/* overview: overviewDashboardAction, */
		/* auth: {
			getSession,
			useSession,
			signIn: signInAction,
			signOut: signOutAction,
		}, */
		article: {
			findMany: findManyArticleAction,
			findOne: findOneArticleAction,
		},
	},
};
