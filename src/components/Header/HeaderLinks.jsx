import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderLinks = () => {

    const links = [
        { iconName: "home", text: "Home", linkTo: "/dashboard" },
        { iconName: "group", text: "Clients", linkTo: "/clients" },
        { iconName: "folder", text: "Projects", linkTo: "/projects" },
        { iconName: "account_balance_wallet", text: "Finance", linkTo: "/finance" },
        { iconName: "checklist_rtl", text: "Tasks", linkTo: "/tasks" },
        { iconName: "settings", text: "Settings", linkTo: "/settings" }
    ]


    return (
        <nav className={styles.linksBlock}>
            {
                links.map((link) => (
                    <NavLink
                        key={link.linkTo}
                        to={link.linkTo}
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <span className="material-symbols-outlined">{link.iconName}</span>
                        <span>{link.text}</span>
                    </NavLink>
                ))
            }
        </nav>
    );
};

export default HeaderLinks;