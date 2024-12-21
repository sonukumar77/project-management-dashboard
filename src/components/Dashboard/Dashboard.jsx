import { Link } from "react-router-dom";
import SimpleCard from "../base/Card/SimpleCard";
import ListItem from "../base/ListItem/ListItem";
import {
  DASHBOARD_ASIDE_MENU,
  DASHBOARD_OVERVIEW_LIST,
  DASHBOARD_TITLE,
  PROJECT_MANAGEMENT_LIST,
} from "../../constants/common";
import { useState } from "react";
import TableRow from "../base/TableRow/TableRow";
import TableData from "../base/TableData/TableData";
import Button from "../base/Button/Button";
import TableHead from "../base/TableHead/TableHead";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="w-1/5 bg-black text-white p-4">
          <div className="text-2xl">{DASHBOARD_TITLE}</div>
          <ul className="list-none text-lg mt-4">
            {DASHBOARD_ASIDE_MENU.map((item, i) => (
              <ListItem
                key={item.id}
                onClick={() => setSelectedMenu(i)}
                listItemStyle={i === selectedMenu ? "bg-green-500" : ""}
                children={<Link>{item.name}</Link>}
              />
            ))}
          </ul>
        </aside>
        <section className="w-4/5 ">
          <nav
            className="h-[10%] p-4 text-lg font-bold
          "
          >
            Project Management Dashboard
          </nav>
          <main className="h-[90%] bg-gray-100 p-4 flex justify-start flex-col">
            {/* Dashboard Overview */}
            <section className="w-full h-fit flex flex-wrap gap-x-4 gap-y-2 md:gap-y-4">
              {DASHBOARD_OVERVIEW_LIST.map((item) => (
                <SimpleCard
                  key={item.id}
                  title={item.name}
                  value={item.value}
                />
              ))}
            </section>

            {/* Project Management */}
            <section className="w-ful rounded mt-4 p-4  bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">Project Management</h1>
                <Button text="Project +" btnStyle="bg-blue-500" />
              </div>
              <table className="table-fixed mt-4 w-full border-collapse border border-gray-400 ">
                <thead>
                  <TableRow>
                    <TableHead text="Sr." />
                    <TableHead text="Name" />
                    <TableHead text="Start Date" />
                    <TableHead text="End Date" />
                    <TableHead text="Status" />
                    <TableHead text="Actions" />
                  </TableRow>
                </thead>
                <tbody>
                  {PROJECT_MANAGEMENT_LIST.map((element, i) => (
                    <TableRow>
                      <TableData>{element.id}</TableData>
                      <TableData>{element.name}</TableData>
                      <TableData>{element.startDate}</TableData>
                      <TableData>{element.endDate}</TableData>
                      <TableData>{element.status}</TableData>
                      <TableData>
                        <Button text="Delete" btnStyle="bg-red-500" />
                        <Button text="Edit" btnStyle="bg-green-500" />
                        <Button text="View" btnStyle="bg-gray-500" />
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
