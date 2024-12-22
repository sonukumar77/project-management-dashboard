import { Link } from "react-router-dom";
import SimpleCard from "../base/Card/SimpleCard";
import ListItem from "../base/ListItem/ListItem";
import {
  DASHBOARD_ASIDE_MENU,
  DASHBOARD_OVERVIEW_LIST,
  DASHBOARD_TITLE,
  INITIAL_PROJECT_DATA,
  PROJECT_MANAGEMENT_LIST,
} from "../../constants/common";
import { useState } from "react";
import TableRow from "../base/TableRow/TableRow";
import TableData from "../base/TableData/TableData";
import Button from "../base/Button/Button";
import TableHead from "../base/TableHead/TableHead";
import Footer from "../Footer/Footer";
import Modal from "../base/Modal/Modal";
import { addProjectForm, viewProject } from "../../utils/dashboard/dashboard";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../../redux/actions/AuthAction";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selecetedProject, setSelectedProject] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [input, setInput] = useState(INITIAL_PROJECT_DATA);
  const [projectList, setProjectList] = useState(() => PROJECT_MANAGEMENT_LIST);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedProject(null);
    setIsModalOpen(false);
    setInput(INITIAL_PROJECT_DATA);
  };

  const handleOpenModal = (type, project = null) => {
    setModalType(type);
    setSelectedProject(project);
    setIsModalOpen(true);

    if (type === "edit") {
      setInput(project);
    }
  };

  const deleteProject = () => {
    const filterData = projectList.filter(
      (element) => element.id !== selecetedProject.id
    );
    setProjectList(filterData);
    setIsModalOpen(false);
  };

  const createProject = () => {
    setProjectList((prev) => [
      ...prev,
      { ...input, id: new Date().getMilliseconds() },
    ]);
    setInput(INITIAL_PROJECT_DATA);
    setIsModalOpen(false);
  };

  const editProject = () => {
    const updatedData = projectList.map((element, i) =>
      element.id === input.id ? input : element
    );
    setProjectList(updatedData);
    setIsModalOpen(false);
    setInput(INITIAL_PROJECT_DATA);
    setSelectedProject(null);
  };

  const handleInput = (e, key) => {
    const { value } = e.target;
    setInput((prev) => ({ ...prev, [key]: value }));
  };

  const onLogOut = () => {
    const isLOgout = window.confirm("Are you sure to logout?");

    if (isLOgout) {
      dispatch(LogoutAction());
    }
  };

  const renderFunction = () => {
    switch (modalType) {
      case "delete":
        return deleteProject();
      case "create":
        return createProject();
      case "edit":
        return editProject();
      default:
        return handleCloseModal();
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case "delete": {
        return <h2>Are you sure want to delete?</h2>;
      }
      case "create": {
        return addProjectForm(handleInput, input);
      }
      case "edit": {
        return addProjectForm(handleInput, input);
      }
      case "view": {
        return viewProject(selecetedProject);
      }
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full min-h-screen max-h-content flex">
        <aside className="w-1/5 bg-black text-white p-4">
          <div className="text-2xl">{DASHBOARD_TITLE}</div>
          <ul className="list-none text-lg mt-4">
            {DASHBOARD_ASIDE_MENU.map((item, i) => (
              <ListItem
                key={item.id}
                onClick={() =>
                  item.name === "Logout" ? onLogOut() : setSelectedMenu(i)
                }
                listItemStyle={`${item.name === "Logout" ? "bg-red-500" : ""} ${
                  i === selectedMenu ? "bg-green-500" : ""
                }`}
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
                <Button
                  text="Project +"
                  btnStyle="bg-blue-500"
                  onClick={() => handleOpenModal("create")}
                />
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
                  {projectList.map((element, i) => (
                    <TableRow key={i}>
                      <TableData>{element.id}</TableData>
                      <TableData>{element.name}</TableData>
                      <TableData>{element.startDate}</TableData>
                      <TableData>{element.endDate}</TableData>
                      <TableData>{element.status}</TableData>
                      <TableData>
                        <Button
                          text="Delete"
                          btnStyle="bg-red-500"
                          onClick={() => handleOpenModal("delete", element)}
                        />
                        <Button
                          text="Edit"
                          btnStyle="bg-green-500"
                          onClick={() => handleOpenModal("edit", element)}
                        />
                        <Button
                          text="View"
                          btnStyle="bg-gray-500"
                          onClick={() => handleOpenModal("view", element)}
                        />
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={renderFunction}
        footerBtnText={modalType === "delete" ? "Delete" : "Submit"}
        footerBtnStyle={modalType === "delete" ? "bg-red-500" : "bg-blue-500"}
        modalTitle={`${modalType} Project`}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};

export default Dashboard;
