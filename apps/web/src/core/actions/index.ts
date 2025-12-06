import { registerUserAction } from "./auth/register-user.action.js";
import { useSession } from "./auth/session/client.js";
import { getSession } from "./auth/session/server.js";
import { signInAction } from "./auth/sign-in.action.js";
import { signOutAction } from "./auth/sign-out.action.js";

export const action = {
	api: {
		auth: {
			getSession,
			useSession,
			signIn: signInAction,
			signOut: signOutAction,
			register: registerUserAction,
		},
	},
};
