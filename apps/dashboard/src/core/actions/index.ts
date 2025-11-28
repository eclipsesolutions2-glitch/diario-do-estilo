import { findManyUserAction } from "./users/find-many-user.action";
import { findOneUserAction } from "./users/find-one-user.action";
import { inactiveUserAction } from "./users/inactive-user.action";
import { restoreUserAction } from "./users/restore-user.action";

export const action = {
    api: {
        user: {
            findMany: findManyUserAction,
            findOne: findOneUserAction,
            inactive: inactiveUserAction,
            restore: restoreUserAction
        }
    },
};