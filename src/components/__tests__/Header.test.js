import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";



it("should render header component with a login button", () => {
 
    render(
    <BrowserRouter>
      <Provider store = {appStore}>    
        <Header/>
    </Provider>
    </BrowserRouter>
);

 const loginButton = screen.getByRole("button", { name: "Login"});

//const loginButton = screen.getByText("Login");

expect(loginButton).toBeInTheDocument();
});

it("should render header component with a Cart item", () => {
 
    render(
    <BrowserRouter>
      <Provider store = {appStore}>    
        <Header/>
    </Provider>
    </BrowserRouter>
);

 const loginButton = screen.getByText(/Cart/);


expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
 
    render(
    <BrowserRouter>
      <Provider store = {appStore}>    
        <Header/>
    </Provider>
    </BrowserRouter>
);

 const loginButton = screen.getByRole("button", { name: "Login"});

fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", { name: "Logout"});

expect(logoutButton).toBeInTheDocument();
});