import { getUserProfileAction } from "./profile/get-user-profile.action";
import { updateProfileAction } from "./profile/update-profile.action";
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
            restore: restoreUserAction,
            profile: {
                getInfo: getUserProfileAction,
                update: updateProfileAction
            }
        },
    },
};