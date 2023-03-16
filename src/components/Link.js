
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classNames(
        'text-blue-500  hover:bg-gray-700 hover:text-white rounded-md',
        className,
        currentPath === to && activeClassName
    );


    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    }
    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;