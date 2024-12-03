import PropTypes from 'prop-types';
import Container from "../../components/Container";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          <a
            href="https://github.com/emirtan/emirtan"
            rel="noopener"
            target="_blank">
            Emirhan Sönmez
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/emirtan/emirtan"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <ThemeSwitch />
      </div>
    </Container>
  );
}


Footer.propTypes = {
  copyright: PropTypes.string,
}
