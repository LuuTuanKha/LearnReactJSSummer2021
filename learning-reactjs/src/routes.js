
import Form from "./component/Form";
import ListBook from "./component/ListBook";
import CaseStudyIndex from "./component/case-study-component/CaseStudyIndex";
import ProductDetail from "./component/case-study-component/api-product/ProductDetail";
const routes = [
     // { path: "/api/get/all-products", component: GetProduct, exact: true },
   
     { path: "/case-study/form", component: Form, exact: true },
     { path: "/case-study/listbook", component: ListBook, exact: true },
    
     { path: "/product/:id", component: ProductDetail, exact: true },
     
     { path: "/case-study", component: CaseStudyIndex, exact: true }
     // {path:"/show-list", component: RouteA, exact: true}
];
export default routes


