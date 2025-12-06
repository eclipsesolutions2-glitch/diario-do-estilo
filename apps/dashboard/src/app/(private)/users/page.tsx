import { TableListUser } from "@/components/tables/users";
import { action } from "@/core/actions";
import { User } from "@/core/schemas/user";

export default async function UsersPage() {
  const result = await action.api.user.findMany();
  const users: User[] = [];
  if (result.success) {
    result.data.users.forEach((user) => {
      users.push(user);
    });
  }
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
          Usuários
        </h1>
        <p className="text-muted-foreground font-light">
          Gerencie os usuários cadastrados na plataforma
        </p>
      </div>

      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
      <TableListUser data={users} />
    </div>
  );
}
