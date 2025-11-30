import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/card";

export function ProfileInfoCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                    Atualize suas informações básicas de perfil
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6"></CardContent>
        </Card>
    );
}