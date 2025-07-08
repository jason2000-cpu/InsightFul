import { Menu, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export default function ProfileMenu() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <Menu as="div" className="relative inline-block text-left dark:bg-[#21364A]">
      <div>
        <Menu.Button className="flex cursor-pointer ">
          <img src="/static/user.png" alt="User" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50"
        >
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => toggleTheme() }
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700`}
                >
                  Toggle Theme
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700`}
                >
                  Account Settings
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
