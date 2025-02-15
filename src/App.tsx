import "./App.css";
import Button from "./komponenter/button/button";
import Card from "./komponenter/Card/Card";
import Counter from "./komponenter/click/click";
import { ThemeButton, ThemeProvider } from "./komponenter/dark/dark";
import List from "./komponenter/list/list";
import ButtonNew from "./komponenter/Newbutton/button";
import Search from "./komponenter/search/search";
import Status from "./komponenter/status/status";
import Switch from "./komponenter/switch/switch";
import User from "./komponenter/user/user";
import CartPrice from "./komponenter/userList/produkt";
import ActiveUsers from "./komponenter/userList/userActivity";
import UserList from "./komponenter/userList/userList";
import Toggle from "./toggle/toggle";
import NewProfile from "./övning/NewProfile";
import TextUpdater from "./övning/TextUpdater";

function App() {
  return (
    <ThemeProvider>
      <section className="app bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="container mx-auto p-4">
          <ThemeButton />
          <section className="my-4">
            <Button label="Click me" />
          </section>
          <section className="my-4">
            <Card title="Card Title">Card Content</Card>
          </section>
          <section className="my-4">
            <Toggle />
          </section>
          <section className="my-4">
            <Status isOnline={true} />
            <Status isOnline={false} />
          </section>
          <section className="my-4">
            <List items={["item1", "item2", "item3"]} />
          </section>
          <section className="my-4">
            <Search />
          </section>
          <section className="my-4">
            <Counter />
          </section>
          <section className="my-4">
            <User />
          </section>
          <section className="my-4">
            <Switch />
          </section>
          <div className="my-4">
            <ButtonNew text="klicka här" color="red" />
            <ButtonNew text="Du har klickat!" color="blue" />
            <UserList />
            <CartPrice />
          </div>
          <TextUpdater/>
          <NewProfile />
        </section>
      </section>
    </ThemeProvider>
  );
}

export default App;
