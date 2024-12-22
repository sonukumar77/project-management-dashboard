export const LOGIN_ASIDE_IMAGE_URL =
  "https://cdn.pixabay.com/photo/2021/11/18/11/35/attack-6806140__340.png";

export const DASHBOARD_TITLE = "Dashboard";

export const DASHBOARD_ASIDE_MENU = [
  { id: 1, name: "Home", icon: "" },
  { id: 2, name: "Setting", icon: "" },
  { id: 3, name: "Logout", icon: "" },
];

export const DASHBOARD_OVERVIEW_LIST = [
  { id: 1, name: "Total Projects", icon: "", value: "6545" },
  { id: 2, name: "Task in Progress", icon: "", value: "358" },
  { id: 3, name: "Task Completed", icon: "", value: "569" },
  { id: 4, name: "Task Overdue", icon: "", value: "987" },
];
export const PROJECT_MANAGEMENT_LIST = [
  {
    id: 1,
    name: "Sonu Kumar",
    startDate: "2024-12-10",
    endDate: "2024-12-15",
    status: "Completed",
  },
  {
    id: 2,
    name: "Aman Kumar",
    startDate: "2024-12-14",
    endDate: "2024-12-30",
    status: "In-Progress",
  },
  {
    id: 3,
    name: "Rajiv Arya",
    startDate: "2024-12-16",
    endDate: "2024-12-20",
    status: "Not Started",
  },
];

export const PROJECT_STATUS = ["Not Started", "In Progress", "Completed"];
export const INITIAL_PROJECT_DATA = {
  name: "",
  startDate: "",
  endDate: "",
  status: "",
};
