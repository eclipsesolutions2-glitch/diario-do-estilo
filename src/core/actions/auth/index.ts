import { registerUserAction } from "./register-user.action";
import { useSession } from "./session/client";
import { getSession } from "./session/server";
import { signInAction } from "./sign-in.action";
import { signOutAction } from "./sign-out.action";

export const auth = {
	signIn: signInAction,
	signOut: signOutAction,
	register: registerUserAction,
	forgot: () => {},
	getSession,
	useSession,
};
