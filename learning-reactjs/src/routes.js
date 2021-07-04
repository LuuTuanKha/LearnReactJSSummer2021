
import Form from "./component/Form";
import ListBook from "./component/ListBook";
import CaseStudyIndex from "./component/case-study-component/CaseStudyIndex";
const routes = [
     { path: "/case-study/form", component: Form, exact: true },
     { path: "/case-study/listbook", component: ListBook, exact: true },
     { path: "/case-study", component: CaseStudyIndex, exact: true }
     // {path:"/show-list", component: RouteA, exact: true}
];
export default routes


