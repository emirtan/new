import { Fragment, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuItems, MenuItem, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/Container";
import { Link } from "react-router-dom";
import { useAuthToken } from "@/store/auth/hooks"
import { authService } from "@/service/auth"
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/cn"

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Anasayfa",
      href: "/"
    },
    {
      label: "Hakkımızda",
      href: "/hakkimizda"
    },
    {
      label: "İletişim",
      href: "/iletisim"
    }
  ];

  const [rightmenu, setRightmenu] = useState([
    {
      label: "Giriş Yap",
      href: "/giris-yap"
    },
    {
      label: "Üye Ol",
      href: "/uye-ol",
    },
  ]);

  const mobilemenu = [...leftmenu, ...rightmenu];

  const token = useAuthToken();

  useEffect(() => {
    if (token) {
      setRightmenu([
        {
          label: "Profile",
          href: "/profile",
        },
        {
          label: "Postlar",
          href: "/postlar",
        },
        {
          label: "Çıkış Yap",
          function: () => {
            authService.logout();
          }
        },
      ]);
    } else {
      setRightmenu([
        {
          label: "Giriş Yap",
          href: "/giris-yap"
        },
        {
          label: "Üye Ol",
          href: "/uye-ol",
        },
      ]);
    }
  }, [token]);
  

  const dropdownProfile = [
    {
      label: "Postlar",
      href: "/posts",
    },
    {
      label: "Profil",
      href: "/profile",
    },
    {
      label: "Çıkış Yap",
      function: () => {
        authService.logout();
      }
    },
  ]

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          to={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link to="/" className="w-28 dark:hidden">
                    {props.logo ? (
                      <img
                        src=""
                        alt="Logo"
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        Emirhan Sonmez
                      </span>
                    )}
                  </Link>
                  <Link to="/" className="hidden w-28 dark:block">
                    {props.logoalt ? (
                      <img
                        src=""
                        alt="Logo"
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        Emirhan Sonmez
                      </span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                    {item.isProfile ? (
                      <Menu as="div"
                      className={cn("relative text-left")}>
                        <MenuButton as={Fragment} >
                          {({ active }) => <button className={cn(
                            "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
                            active
                              ? "text-blue-500 hover:text-blue-500"
                              : " text-gray-600 dark:text-gray-400 ",
                            
                          )}>Profil</button>}
                        </MenuButton>
                        <MenuItems anchor="bottom" className={cn(
                          "shadow p-5 z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56"
                        )}>
                          {dropdownProfile.map((link, index) => (
                            <MenuItem key={`${link.href}-${index}`} as={Fragment} onClick={link.function}>
                              {({ focus }) => (
                                <Link className={cn(
                                  "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                                  focus
                                    ? "text-blue-500"
                                    : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                                )} to={link.href}>
                                  {link.label}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Menu>
                    ) : (
                      <Link
                        to={item.href}
                        key={`${item.label}${index}`}
                        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}
                        onClick={item.function}
                      >
                        <span> {item.label}</span>
                        {item.badge && (
                          <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          to={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cn("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cn(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cn(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cn(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cn(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

DropdownMenu.propTypes = {
  menu: PropTypes.any,
  items: PropTypes.any,
  mobile: PropTypes.bool
}

Navbar.propTypes = {
  logo: PropTypes.any,
  logoalt: PropTypes.string,
}