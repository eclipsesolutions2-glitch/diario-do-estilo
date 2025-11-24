import Link from "next/link";
// import { SignInForm } from "@/components/forms/auth/sign-in.form";

export default function SignInPage() {
    return (
        <div className="space-y-4">
            {/* <SignInForm /> */}

            <p className="text-sm text-neutral-500 text-center">
                Ainda não tem uma conta?{" "}
                <Link
                    href="/register"
                    className="text-primary font-medium hover:underline"
                >
                    Cadastre-se
                </Link>
            </p>
        </div>
    );
}