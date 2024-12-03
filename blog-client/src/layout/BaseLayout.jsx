import PropTypes from 'prop-types';
import NavbarAlt from "./shared/NavbarAlt";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useSiteLayout } from "../store/site/hooks";
import { Outlet } from "react-router-dom"
import { cn } from "../utils/cn";

const BaseLayout = (props) => {
  const layout = useSiteLayout();

  return (
    <>
      <div
        className={cn(
          props?.fontStyle,
          "min-h-screen antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}>
        {props.alternate ? (
          <NavbarAlt {...props} />
        ) : (
          layout.hideNavbar === false && (<Navbar {...props} />)
        )}

        <main><Outlet /></main>

        { layout.hideFooter === false && (<Footer {...props} />) }
      </div>
    </>
  )
}

BaseLayout.propTypes = {
  fontStyle: PropTypes.string,
  alternate: PropTypes.bool
}

export default BaseLayout