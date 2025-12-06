import { createArticleAction } from "./article/create-article.action";
import { deleteArticleAction } from "./article/delete-article.action";
import { findManyArticleAction } from "./article/find-many-article.action";
import { findOneArticleAction } from "./article/find-one-article.action";
import { restoreArticleAction } from "./article/restore-article.action";
import { updateArticleAction } from "./article/update-article.action";
import { desynchronizeArticleWithCategory } from "./article-category/desynchronize-article-with-category.article";
import { synchronizeArticleWithCategory } from "./article-category/synchronize-article-with-category.article";
import { registerUserAction } from "./auth/register-user.action";
import { useSession } from "./auth/session/client";
import { getSession } from "./auth/session/server";
import { signInAction } from "./auth/sign-in.action";
import { signOutAction } from "./auth/sign-out.action";
import { createCategoryAction } from "./category/create-category.action";
import { deleteCategoryAction } from "./category/delete-category.action";
import { findManyCategoryAction } from "./category/find-many-category.action";
import { findOneCategoryAction } from "./category/find-one-category.action";
import { updateCategoryAction } from "./category/update-category.action";
import { findManyNotificationAction } from "./notifications/find-many-notification.action";
import { findManyUnReadNotificationAction } from "./notifications/find-many-unread-notification.action";
import { markAllReadNotificationAction } from "./notifications/mark-all-read-notification.action";
import { markOneReadNotificationAction } from "./notifications/mark-one-read-notification.action";
import { overviewDashboardAction } from "./overvew";
import { getUserProfileAction } from "./profile/get-user-profile.action";
import { updateProfileAction } from "./profile/update-profile.action";
import { findManyUserAction } from "./users/find-many-user.action";
import { findOneUserAction } from "./users/find-one-user.action";
import { inactiveUserAction } from "./users/inactive-user.action";
import { restoreUserAction } from "./users/restore-user.action";

export const action = {
	api: {
		overview: overviewDashboardAction,
		auth: {
			getSession,
			useSession,
			signIn: signInAction,
			signOut: signOutAction,
		},
		user: {
			findMany: findManyUserAction,
			findOne: findOneUserAction,
			inactive: inactiveUserAction,
			restore: restoreUserAction,
			create: registerUserAction,
			profile: {
				getInfo: getUserProfileAction,
				update: updateProfileAction,
			},
		},
		notification: {
			findMany: findManyNotificationAction,
			findManyUnRead: findManyUnReadNotificationAction,
			markAllRead: markAllReadNotificationAction,
			markOneRead: markOneReadNotificationAction,
		},
		category: {
			findMany: findManyCategoryAction,
			findOne: findOneCategoryAction,
			create: createCategoryAction,
			delete: deleteCategoryAction,
			update: updateCategoryAction,
		},
		article: {
			findMany: findManyArticleAction,
			findOne: findOneArticleAction,
			create: createArticleAction,
			delete: deleteArticleAction,
			update: updateArticleAction,
			restore: restoreArticleAction,
			sync: {
				desynchronize: desynchronizeArticleWithCategory,
				synchronize: synchronizeArticleWithCategory,
			},
		},
	},
};
