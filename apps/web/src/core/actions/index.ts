import { createArticleAction } from "./article/create-article.action";
import { findManyArticleAction } from "./article/find-many-article.action";
import { findManyFeaturedArticleAction } from "./article/find-many-featured-article.action";
import { findOneArticleAction } from "./article/find-one-article.action";
import { registerUserAction } from "./auth/register-user.action";
import { useSession } from "./auth/session/client";
import { getSession } from "./auth/session/server";
import { signInAction } from "./auth/sign-in.action";
import { signOutAction } from "./auth/sign-out.action";
import { subscribeNewsLetterAction } from "./newslatter/subscribe-in-newslatter.actio";

export const action = {
	api: {
		auth: {
			getSession,
			useSession,
			signIn: signInAction,
			signOut: signOutAction,
			register: registerUserAction,
		},
		article: {
			create: createArticleAction,
			findMany: findManyArticleAction,
			findOne: findOneArticleAction,
			findFeatured: findManyFeaturedArticleAction,
		},
		newsletter: {
			subscribe: subscribeNewsLetterAction,
		},
	},
};
