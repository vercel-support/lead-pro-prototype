import React, { useState, useEffect } from "react";
import { IUser, IUserColumn } from "interfaces/user.interface";
import { paths } from "constants/routes";
import { fetchUsers } from "services/users";
import { Table } from "components/molecules";

const columns: IUserColumn[] = [
  {
    title: "Name",
    dataKey: "name",
    // render: (row: IOffice) => {
    //   return (
    //     <TableLinkCell to={paths.OFFICES_INDEX + "/" + row.id}>
    //       {row.name}
    //     </TableLinkCell>
    //   );
    // },
  },
  {
    title: "Email",
    dataKey: "email",
  },
  {
    title: "Created at",
    dataKey: "createdAt",
  },
  {
    title: "Accounts count",
    dataKey: "accountsCount",
  },
  {
    title: "Last logged in",
    dataKey: "lastLoggedIn",
  },
  {
    title: "Last logged in location",
    dataKey: "lastLoggedInLocation",
  },
];

export const UsersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await fetchUsers();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Table data={data} columns={columns} />
    </>
  );
};
