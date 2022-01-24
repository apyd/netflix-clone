import Navigation from "../Navigation/Navigation";
import { Button } from '../UI/Button/Button'

function Layout({ children }) {
    return <div>
        <Navigation />
        <Button>Random button</Button>
        {children}
    </div>;
}
export default Layout;
